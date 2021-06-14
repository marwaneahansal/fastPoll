<template>
  <div>
    <box-icon class="absolute right-3 cursor-click" color="#D52941" name='trash'
      @click="deletePoll(poll.id)" v-if="belongsToAuthUser"></box-icon>

    <div class="pollHeader flex items-center justify-between cursor-pointer" @click="$router.push({name: 'poll', params:{ uri: poll.uri }})">
        <h2 class="text-2xl font-semibold" v-if="poll.poll_question[poll.poll_question.length - 1] === '?'">{{ poll.poll_question }}</h2>
        <h2 class="text-2xl font-semibold" v-else>{{ poll.poll_question }}?</h2>
    </div>
    <p class="text-xl mt-6">Total Votes: {{ poll.totalVotes }}</p>
    <p class="mt-4 text-gray-900 text-opacity-50" v-if="displayAuthor">asked by {{ poll.created_by }}</p>
  </div>
</template>

<script>
export default {
  props: {
    poll: {
      type: Object,
      required: true,
    },
    displayAuthor: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    belongsToAuthUser() {
      return this.poll.user_id === this.$store.state.auth.loggedInUser.id;
    },
  },
  methods: {
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
  },
};
</script>
