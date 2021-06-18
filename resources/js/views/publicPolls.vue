<template>
    <div id="publicPolls">
        <div class="w-full flex flex-col items-center">
            <div class="header mb-8">
                <div class="self-start">
                    <h2 class="text-4xl">Public polls</h2>
                    <p class="mt-4 text-gray-900 text-opacity-50 dark:text-gray-300">Below are the public polls created by Fast Poll members.</p>
                </div>
            </div>
            <div class="searchInput">
                <vs-input v-model="searchQuery" primary placeholder="Search by poll or users" class="py-2 mb-4"/>
            </div>

            <div v-if="filteredPolls.length > 0" class="cards">
              <div class="vs-card w-full py-4 px-8 mb-4 dark:bg-gray-900 dark:text-white dark:text-opacity-90" v-for="poll in filteredPolls" :key="poll.id">
                <poll-card :poll="poll" @deletePoll="deletePoll(poll.id)"></poll-card>
              </div>
            </div>
            <div v-else>
							<p class="text-center text-gray-200">No Polls found!</p>
            </div>
        </div>
    </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import PollCard from '@js/components/PollCard.vue';

export default {
  components: {
    PollCard,
  },
  data() {
    return {
      filteredPolls: [],
      searchQuery: '',
      filters: {},
    };
  },
  computed: {
    polls() {
      return this.$store.state.polls.publicPolls;
    },
  },
  watch: {
    searchQuery() {
      this.filteredPolls = this.searchPolls(this.polls, this.searchQuery);
    },
  },
  methods: {
    getPolls() {
      const loading = this.$vs.loading();
      this.$store.dispatch('polls/getPublicPolls')
        .then(_ => {
          this.filteredPolls = this.polls;
          loading.close();
        })
        .catch(err => {
          this.$vs.notification({
            title: 'Ooops',
            text: `Something went wrong, ${err}`,
            color: 'danger',
          });
          loading.close();
        });
    },
    deletePoll(pollId) {
      const loading = this.$vs.loading();
      this.$store.dispatch('polls/deletePoll', { pollId })
        .then(res => {
          loading.close();
          this.$vs.notification({
            title: 'Success',
            text: `${res.data.message}`,
            color: 'success',
          });
          this.getPolls();
        })
        .catch(err => {
          loading.close();
          this.$vs.notification({
            title: 'Ooops',
            text: `${err}`,
            color: 'danger',
          });
        });
    },
    searchPolls(polls, query) {
      return polls.filter(item => item.poll_question.toLowerCase().includes(query.toLowerCase()) || item.created_by.toLowerCase().includes(query.toLowerCase()));
    },
  },
  created() {
    this.getPolls();
  },
};
</script>

<style>
	.header {
		width: 60%;
	}
	#publicPolls .vs-card {
		max-width: none;
		width: 60%;
		transition: transform .5s ease;
	}


	#publicPolls .vs-card:hover {
		transform: translateY(-8px);
		/* box-shadow: 0px 1px 2px 0px rgba(0,0,0,.25); */
	}

	#publicPolls .searchInput, #publicPolls .cards {
		width: 60% !important;
	}

	#publicPolls .vs-input-content, #publicPolls .vs-input{
		background-color: white !important;
	}
	#publicPolls .vs-input {
		width: 100%;
	}

  html.dark #publicPolls .vs-input {
      background-color: rgba(17, 24, 39, var(--tw-bg-opacity)) !important;
      color: white;
  }

  html.dark #publicPolls .vs-input-content {
		background-color: unset !important;
	}
</style>
