<template>
  <div id="dashboard" v-if="user">
    <h1>Welcome {{ user.name }}</h1>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      error: null,
    }
  },
  computed: {
    user () {
      return this.$store.state.auth.loggedInUser;
    },
  },
}
</script>

<style>

</style>