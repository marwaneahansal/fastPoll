<template>
  <div id="dashboard">
    <div v-if="user && isLoggedIn">
      <h1>Welcome {{ user.name }}</h1>
    </div>
    <div v-else>
      <h1>You're not logged in</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      error: null,
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.state.auth.isUserLoggedIn;
    },
    user () {
      return this.$store.state.auth.loggedInUser;
    },
  },
}
</script>

<style>

</style>