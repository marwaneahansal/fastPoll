<template>
<div class="container mx-auto">
  <vs-navbar center-collapsed>
        <template #left>
          <h2 class="text-2xl font-semibold cursor-pointer" @click="$router.push('/')">FastPoll</h2>
        </template>
        <template #right>
          <vs-button flat transparent @click="$router.push({name: 'publicPolls'})">Public Polls</vs-button>
          <vs-button @click="$router.push({name: 'create_poll'})">Create poll</vs-button>
          <p class="mx-2">|</p>
          <div v-if="!isUserLoggedIn" class="flex">
            <vs-button flat transparent @click="$router.push({name: 'login'})">Login</vs-button>
            <vs-button flat transparent @click="$router.push({name: 'register'})">Register</vs-button>
          </div>
          <div v-else class="flex relative">
            <vs-button flat transparent>My Polls</vs-button>
            <div class="dropdown">
              <vs-button flat transparent>Profile</vs-button>
              <div class="dropdown-items absolute bg-white mt-2 shadow hidden">
                <vs-button flat transparent>Profile</vs-button>
                <vs-button flat transparent>Settings</vs-button>
                <vs-button flat transparent>Log out</vs-button>
              </div>
            </div>
          </div>
        </template>
      </vs-navbar>
  <router-view class="mt-16"></router-view>
</div>
</template>

<script>
export default {
  computed: {
    isUserLoggedIn() {
      return localStorage.getItem('user') && localStorage.getItem('accessToken') && (localStorage.getItem('loggedIn') == 'true');
    }
  }
}
</script>

<style lang="css">
  .dropdown-items {
    border-radius: 8px 18px 18px 18px;
    z-index: 1000;
  }
  .dropdown:hover .dropdown-items, .dropdown-items:hover .dropdown-items {
    display: block !important;
  }
</style>
