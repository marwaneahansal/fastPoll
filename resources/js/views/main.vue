<template>
<div class="container mx-auto">
  <vs-navbar center-collapsed>
        <template #left>
          <h2 class="text-2xl font-semibold cursor-pointer" @click="$router.push('/')">FastPoll</h2>
        </template>
        <template #right>
          <vs-button flat transparent @click="$router.push({name: 'publicPolls'})">Public Polls</vs-button>
          <vs-button @click="$router.push({name: 'create_poll'})">Create poll</vs-button>
        </template>
      </vs-navbar>
  <router-view class="mt-16"></router-view>
</div>
</template>

<script>
export default {

}
</script>
