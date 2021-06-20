<template>
  <div>
    <box-icon class="absolute right-3 cursor-click" color="#D52941" name='trash'
      @click="deletePoll" v-if="belongsToAuthUser"></box-icon>

    <div class="pollHeader flex items-center justify-between cursor-pointer" @click="$router.push({name: 'poll', params:{ uri: poll.uri }})">
        <h2 class="text-2xl font-semibold" v-if="poll.poll_question[poll.poll_question.length - 1] === '?'">{{ poll.poll_question }}</h2>
        <h2 class="text-2xl font-semibold" v-else>{{ poll.poll_question }}?</h2>
    </div>
    <p class="text-xl mt-6">Total Votes: {{ poll.totalVotes }}</p>
    <p class="mt-4 text-gray-900 text-opacity-50 dark:text-gray-400">
      Asked by <span class="font-bold">{{ belongsToAuthUser ? "You" : poll.created_by }}</span>.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    poll: {
      type: Object,
      required: true,
    },
  },
  computed: {
    belongsToAuthUser() {
      return this.poll.user_id === this.$store.state.auth.loggedInUser?.id;
    },
  },
  methods: {
    deletePoll() {
      this.$emit('deletePoll');
    },
  },
};
</script>
