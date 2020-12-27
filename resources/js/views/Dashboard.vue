<template>
  <p v-if="loggedIn">You're logged in</p>
</template>

<script>
export default {
    computed: {
        loggedIn() {
            return localStorage.getItem('loggedIn') && localStorage.getItem('accessToken') && localStorage.getItem('user');
        }
    }
}
</script>

<style>

</style>