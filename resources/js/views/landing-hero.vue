<template>
<div class="flex flex-row justify-between items-center">
  <div class="flex flex-col items-center">
    <p class="text-4xl text-center font-semibold">Create instant, real time polls for free</p>
    <button class="shadow rounded-lg mt-4 py-4 px-6 bg-blue-500 rounded text-white text-2xl hover:bg-blue-600" @click="$router.push({ name: 'create_poll' })">Create a poll</button>
    <p class="mt-4 text-gray-900 text-opacity-50">No registration required, it's 100% free and easy to setup</p>
  </div>
  <img src="../../assets/svg/hero.svg" alt="hero image" height="600px">

</div>
</template>

<script>
export default {
};
</script>

<style>
  img {
    height: 600px !important;
  }
</style>