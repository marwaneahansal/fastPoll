<template>
<div>
  <vs-navbar center-collapsed>
    <template #left class="ml-5">
      <h2 class="text-2xl font-semibold cursor-pointer" @click="$router.push('/')">FastPoll</h2>
    </template>
    <template #right class="mr-5">
      <vs-button flat transparent @click="$router.push({name: 'publicPolls'})">Public Polls</vs-button>
      <vs-button @click="$router.push({name: 'create_poll'})">Create poll</vs-button>
      <p class="mx-2">|</p>
      <div v-if="!isUserLoggedIn" class="flex">
        <vs-button flat transparent @click="$router.push({name: 'login'})">Login</vs-button>
        <vs-button flat transparent @click="$router.push({name: 'register'})">Register</vs-button>
      </div>
      <div v-else class="flex">
        <vs-button flat transparent @click="$router.push({name: 'mypolls'})" class="inline-block">My Polls</vs-button>
        <div class="relative w-16">
          <span class="profileDropdown absolute" :class="{'showProfileDropdown': isShowDropdown}" @mouseenter="showDropdown(true)" @mouseleave="showDropdown(false)">
            <div class="dropdown relative">
              <vs-button flat transparent>More</vs-button>
              <div class="dropdown-items absolute bg-white mt-2 mr-4 shadow" :class="{'hidden': !isShowDropdown}">
                <vs-button flat transparent>Profile</vs-button>
                <vs-button flat transparent>Settings</vs-button>
                <vs-button flat transparent @click.stop="logout">Logout</vs-button>
              </div>
            </div>
          </span>
        </div>
      </div>
    </template>
  </vs-navbar>
  <router-view class="mt-16 layout" v-if="this.$store.state.auth.isUserLoggedIn !== null"></router-view>
</div>
</template>

<script>
export default {
	data() {
		return {
			isShowDropdown: false,
		};
	},
	computed: {
		isUserLoggedIn() {
			return this.$store.state.auth.loggedInUser && this.$store.state.auth.isUserLoggedIn;
		},
	},
	methods: {
		logout() {
			const loading = this.$vs.loading();
			this.$store.dispatch('auth/logout')
				.then(_ => {
					loading.close();
					this.$vs.notification({
						title: 'Success',
						text: "You've successfully logged out",
						color: 'success',
					});
					this.$router.push({ name: 'home' });
				})
				.catch(err => {
					loading.close();
					this.$vs.notification({
						title: 'Ooops',
						text: `Something went wrong, ${err}`,
						color: 'danger',
					});
				});
		},
		showDropdown(val) {
			this.isShowDropdown = val;
		},
		getUserInfo() {
			const loading = this.$vs.loading();
			this.$store.dispatch('auth/getloggedInUser')
				.then(_res => {
					loading.close();
				})
				.catch(err => {
					loading.close();
					this.$vs.notification({
						title: 'Ooops',
						text: `Something went wrong, ${err}`,
						color: 'danger',
					});
				});
		},
	},
	mounted() {
		this.getUserInfo();
	},
};
</script>

<style lang="css">
  .vs-navbar, .layout {
    width: 80% !important;
    margin: 0 auto;
  }

  .vs-navbar {
    padding: 0;
  }

  .showProfileDropdown {
    position: absolute;
    min-height: 160px;
    min-width: 90px;
  }

  .dropdown-items {
    border-radius: 8px 18px 18px 18px;
    z-index: 1000;
  }

</style>
