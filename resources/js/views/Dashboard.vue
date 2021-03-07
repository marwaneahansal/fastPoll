<template>
  <div id="dashboard">
    <p>You're logged in</p>
    <vs-button flat transparent @click="logout">Logout</vs-button>
    <p v-if="error" class="text-danger">{{ error }}</p>
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
    loggedIn() {
      return localStorage.getItem('loggedIn') && localStorage.getItem('accessToken') && localStorage.getItem('user');
    }
  },
  methods: {
    logout() {
      axios.get('api/logout')
        .then(res => {
          console.log(res);
          if(res.data.success == true) {
            this.error = null;
            this.$router.push({ name: 'home'});
          }
          else this.error = "Something happend"
        })
        .catch(err => {
          this.err = err
        })
    }
  }
}
</script>

<style>

</style>