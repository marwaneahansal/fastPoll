<template>
  <div id="login" class="h-full flex items-center justify-center">
      <div class="vs-card w-1/3 p-4 mx-auto dark:bg-gray-900 dark:text-white">
          <div class="header mb-4 mt-8">
            <div class="divider"></div>
            <h1 class="text-xl text-center">Welcome back</h1>
          </div>
          <vs-input v-model="email" placeholder="Email" class="w-full mb-2">
            <template #icon>
                <i class='bx bx-user text-xl'></i>
            </template>
          </vs-input>
          <vs-input type="password" v-model="password" placeholder="Password" class="w-full mb-4">
              <template #icon>
                  <i class='bx bx-lock-alt text-xl'></i>
              </template>
          </vs-input>

          <vs-button size="large" class="mx-auto" @click="login">Login</vs-button>
          <p class="text-red-500 text-sm mx-auto mt-2" v-if="error">{{ error }}</p>
          <p class="text-black text-sm text-opacity-50 mx-auto mt-4 mb-8 dark:text-gray-300">Forgot you password</p>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    login() {
      const loading = this.$vs.loading({
        type: 'circles',
      });
      this.error = null;
      this.$store.dispatch('auth/login', { email: this.email, password: this.password })
        .then(_ => {
          loading.close();
          this.$router.push({ name: 'dashboard' });
        })
        .catch(err => {
          loading.close();
          this.error = err;
        });
    },
  },
};
</script>

<style>
    .vs-card {
        max-width: 100% !important;
    }

    .vs-input {
        width: 100% !important;
    }

    .vs-card p {
      width: fit-content !important;
    }

    html.dark #login .vs-input {
      background-color: rgba(31, 41, 55, var(--tw-bg-opacity)) !important;
    }

    html.dark #login .vs-input__icon {
      background-color: rgba(31, 41, 55, var(--tw-bg-opacity)) !important;
      color: white;
    }
</style>
