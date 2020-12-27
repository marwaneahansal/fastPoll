<template>
<div class="flex flex-row justify-between items-center">
  <div class="flex flex-col items-center">
    <p class="text-4xl text-center font-semibold">Create instant, real time polls for free</p>
    <vs-button class="mt-8" size="xl" @click="$router.push({ name: 'create_poll' })">Create a poll</vs-button>
    <p class="mt-4 text-gray-900 text-opacity-50">No registration required, it's 100% free and easy to setup</p>
  </div>
  <img src="../../assets/svg/hero.svg" alt="hero image" height="600px">

</div>
</template>

<script>
import axios from 'axios';
export default {
  created() {
    // axios.post('/api/register', {
    //   name: 'sdkjksd',
    //   email: 'qsqsjklqs@gmail.com',
    //   password: '12345678',
    //   password_confirmation: '12345678'
    // }).then(res => console.log(res))
    // .catch(err => console.log(err));
  }
};
</script>

<style>
  img {
    height: 600px !important;
  }
</style>