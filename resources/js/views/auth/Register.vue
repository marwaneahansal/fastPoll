<template>
    <div id="register" class="h-full flex items-center justify-center">
        <div class="vs-card w-1/3 p-4 mx-auto dark:bg-gray-900 dark:text-white">
            <div class="header mb-4 mt-8">
                <div class="divider"></div>
                <h1 class="text-xl text-center">Welcome</h1>
            </div>
            <vs-input
                primary
                v-model="name"
                placeholder="Full Name"
                class="w-full mb-2"
            >
                <template #icon>
                    <i class='bx bx-user text-xl'></i>
                </template>
            </vs-input>
            <vs-input
                primary
                v-model="email"
                placeholder="Email"
                class="w-full mb-2"
            >
                <template #icon>
                    <i class='bx bx-user text-xl'></i>
                </template>
            </vs-input>
            <vs-input
                type="password"
                primary
                v-model="password"
                placeholder="Password"
                class="w-full mb-4"
            >
                <template #icon>
                    <i class='bx bx-lock-alt text-xl'></i>
                </template>
            </vs-input>

            <vs-input
                type="password"
                primary
                v-model="confirmpassword"
                placeholder="Confirm Password"
                class="w-full mb-4"
            >
                <template #icon>
                    <i class='bx bx-lock-alt text-xl'></i>
                </template>
            </vs-input>

            <vs-button size="large" class="mx-auto" @click="register"
                >Register</vs-button
            >
            <p class="text-red-500 text-sm mx-auto mt-2" v-html="error"></p>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmpassword: '',
      error: null,
    };
  },
  methods: {
    register() {
      const loading = this.$vs.loading({
        type: 'circles',
      });
      this.error = null;
      this.$store
        .dispatch('auth/register', {
          email: this.email,
          name: this.name,
          password: this.password,
          password_confirmation: this.confirmpassword,
        })
        .then(_ => {
          loading.close();
          this.$router.push({ name: 'dashboard' });
          this.$vs.notificattion({
            title: 'Success',
            text: "You're registred successfully",
            color: 'success',
          });
        })
        .catch(err => {
          loading.close();
          this.error = `${Object.values(err).join(' <br>')}`;
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

    html.dark #register .vs-input {
      background-color: rgba(31, 41, 55, var(--tw-bg-opacity)) !important;
      color: white;
    }

    html.dark #register .vs-input__icon {
      background-color: rgba(31, 41, 55, var(--tw-bg-opacity)) !important;
      color: white;
    }
</style>
