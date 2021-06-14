<template>
	<div id="userPolls">
			<div class="w-full flex flex-col items-center">
					<div class="header mb-8">
							<div class="self-start">
									<h2 class="text-4xl">My Polls</h2>
									<p class="mt-4 text-gray-900 text-opacity-50">Below are the polls created by you.</p>
							</div>
					</div>
					<div class="searchInput">
							<vs-input v-model="searchQuery" placeholder="Search by poll or users" class="py-2 mb-4"/>
					</div>
          <!-- TODO: refresh poll when deleted -->
					<div v-if="filteredPolls.length > 0" class="card">
							<div class="vs-card py-4 px-8 mb-4" v-for="poll in filteredPolls" :key="poll.id">
                <poll-card :poll="poll" @deletePoll="deletePoll(poll.id)"></poll-card>
							</div>
					</div>
					<div v-else>
							<p class="text-center">No Polls found!</p>
					</div>
			</div>
	</div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import PollCard from '@js/components/PollCard.vue';

export default {
  data() {
    return {
      filteredPolls: [],
      searchQuery: '',
    };
  },
  components: {
    PollCard,
  },
  computed: {
    polls() {
      return this.$store.state.polls.userPolls;
    },
    user() {
      return this.$store.state.auth.loggedInUser;
    },
  },
  watch: {
    searchQuery() {
      this.filteredPolls = this.searchPolls(this.polls, this.searchQuery);
    },
  },
  methods: {
    getPolls() {
      const userId = this.user.id;
      if (userId) {
        const loading = this.$vs.loading();
        this.$store.dispatch('polls/getUserPolls', { userId })
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
      }
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

    #userPolls .card {
        width: 60% !important;
    }

    #userPolls .vs-card {
        max-width: none;
        width: 100%;
        transition: transform .5s ease;
    }


    #userPolls .vs-card:hover {
        transform: translateY(-8px);
        /* box-shadow: 0px 1px 2px 0px rgba(0,0,0,.25); */
    }

    #userPolls .searchInput {
        width: 60% !important;
    }

    #userPolls .vs-input-content, #userPolls .vs-input{
    background-color: white !important;
    }
    #userPolls .vs-input {
        width: 100%;
    }
</style>
