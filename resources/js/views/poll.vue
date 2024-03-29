<template>
    <div class="w-full">
        <vs-alert color="danger" v-if="error" class="dark:text-white">
            <template #title>
                Poll Not Found
            </template>
            <p>Poll you requested not found, Please check again poll url.</p>
        </vs-alert>
        <div class="mx-auto w-full mb-12" v-if="poll">
            <div class="vs-card py-4 px-6 dark:text-white dark:bg-gray-900" id="pollDetails">
                <div class="pollHeader flex items-center justify-between">
                    <h2 class="text-2xl font-semibold" v-if="this.poll.poll_question[this.poll.poll_question.length - 1] === '?'">{{ poll.poll_question }}</h2>
                    <h2 class="text-2xl font-semibold" v-else>{{ poll.poll_question }}?</h2>
                    <p v-if="!showPoll">Total Votes: {{ poll.totalVotes }}</p>
                </div>
                <div v-if="showPoll">
                    <div class="mt-5">
                        <vs-radio class="mt-2" v-model="option" :val="pollOption.id" v-for="pollOption in poll.poll_options" :key="pollOption.id">
                            {{ pollOption.option }}
                        </vs-radio>
                    </div>
                    <div class="flex items-center justify-between mt-6">
                        <vs-button ref="button" primary icon :disabled="!option" @click="submitPoll">
                            Submit
                        </vs-button>
                        <vs-button shadow primary @click="showPoll = false">
                            Jump to result
                        </vs-button>
                    </div>
                </div>
                <div v-else>
                    <div class="mt-8">
                        <div class="pollOption vs-card py-4 px-6 mb-3 dark:bg-gray-800 dark:text-white"  v-for="(pollOption, index) in pollOptionsSorted" :key="index">
                            <h3 class="text-xl mb-4 font-semibold">{{ pollOption.option }}</h3>
                            <k-progress :color="colors[index]" class="dark:text-gray-200"  :percent="getVotesPercent(pollOption.votes, poll.totalVotes)" />
                            <p class="mt-4 text-sm text-black dark:text-gray-300">{{ pollOption.votes }} Votes</p>
                        </div>
                        <div class="flex justify-end mt-6">
                            <vs-button shadow primary @click="showPoll = true">
                                Back to vote
                            </vs-button>
                        </div>
                    </div>
                </div>
                <p class="text-sm mt-2 text-gray-900 text-opacity-50 dark:text-gray-200">Created by {{ poll.created_by }}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      poll: null,
      error: false,
      option: null,
      showPoll: true,
      colors: [
        '#409eff',
        '#581b98',
        '#f3558e',
        '#482ff7',
        '#21e6c1',
        '#faee1c',
        '#fc5185',
        '#ff5959',
        '#0e153a',
      ],
      pollOptionsSorted: [],
    };
  },
  methods: {
    sortOptions(pollOptions) {
      return [...pollOptions].sort((a, b) => (a.votes > b.votes ? -1 : 1));
    },
    fetchPollDetails() {
      const fetchLoading = this.$vs.loading({
        text: 'loading...',
        type: 'circles',
      });
      this.$store.dispatch('polls/getPoll', { pollId: this.$route.params.uri })
        .then(res => {
          if (res.data.poll) {
            fetchLoading.close();
            this.poll = res.data.poll;
            this.pollOptionsSorted = this.sortOptions(this.poll.poll_options);
          } else {
            fetchLoading.close();
            this.error = true;
          }
        })
        .catch(err => {
          fetchLoading.close();
          this.error = true;
          this.$vs.notification({
            title: 'Error',
            text: err,
            color: 'danger',
          });
        });
    },
    submitPoll() {
      const loading = this.$vs.loading({
        target: this.$refs.button,
        scale: '0.6',
        background: 'primary',
        opacity: 1,
        color: '#fff',
      });
      this.$store.dispatch('polls/votePoll',
        {
          pollId: this.poll.id,
          option: this.option,
        })
        .then(res => {
          loading.close();
          if (res.data.success === true) {
            this.poll = res.data.poll;
            this.pollOptionsSorted = this.sortOptions(this.poll.poll_options);
            this.$vs.notification({
              title: 'Vote saved successfully',
              text: `${res.data.message}`,
              color: 'success',
            });
          } else {
            this.$vs.notification({
              title: 'Already voted',
              text: 'You already voted on this poll!',
              color: 'warning',
            });
          }
          this.showPoll = false;
        })
        .catch(err => {
          loading.close();
          if (err.response.status === 429) {
            this.$vs.notification({
              title: 'Error',
              text: 'Too Many Attempts',
              color: 'danger',
            });
          } else {
            this.$vs.notification({
              title: 'Error',
              text: `${err.response.data.message}`,
              color: 'danger',
            });
          }
        });
    },
    getVotesPercent(votes, totalVotes) {
      if (totalVotes === 0) return 0;
      return parseFloat(((votes / totalVotes) * 100).toFixed(1));
    },
  },
  created() {
    this.fetchPollDetails();
  },
};
</script>

<style>
#pollDetails {
    cursor: auto !important;
    max-width: 100% !important;
}

#pollDetails {
    width: 100% !important;
}

.pollOption {
    max-width: 100% !important;
    width: 100% !important;
    transition: transform 1s ease;
}

.pollOption:hover {
    transform: translateY(-5px);
    /* box-shadow: 0px 1px 2px 0px rgba(0,0,0,.25); */
}

.vs-radio-content {
    width: fit-content;
}
</style>
