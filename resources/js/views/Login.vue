<template>
  <div id="login h-full flex items-center justify-center">
      <div class="vs-card w-1/3 p-4 mx-auto">
          <div class="header mb-4 mt-8">
            <div class="divider"></div>
            <h1 class="text-xl">Welcome back</h1>
          </div>
          <vs-input  primary v-model="email" placeholder="Email" class="w-full mb-2">
            <template #icon>
                <box-icon name='user' ></box-icon>
            </template>
          </vs-input>
          <vs-input type="password" primary v-model="password" placeholder="Password" class="w-full mb-4">
              <template #icon>
                    <box-icon name='lock-alt' ></box-icon>
                </template>
          </vs-input>

          <vs-button size="large" class="mx-auto" @click="login">Login</vs-button>
          <p class="text-red-500 text-sm mx-auto mt-2" v-if="error">{{ error }}</p>
          <p class="text-black text-sm text-opacity-50 mx-auto mt-4 mb-8">Forgot you password</p>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            email: '',
            password: '',
            error: null,
        }
    },
    methods: {
      login() {
        const loading = this.$vs.loading({
          type: 'circles'
        });
        this.error = null;
        axios.post('/api/login', {
          email: this.email,
          password: this.password
        }).then(res => {
          loading.close();
          if(res.success) {
            localStorage.setItem('user', res.user);
            localStorage.setItem('accessToken', res.token);
            localStorage.setItem('loggedIn', true);
            this.$router.push({name: 'dashboard'});
          } else {
            this.error = 'Invalid Email or password. Please Try Again!'
          }
        }).catch(err => {
          loading.close();
          this.$vs.notification({
            title: 'Error',
            text: 'Sorry. Something went wrong',
            color: 'danger'
          })
        });
      }
    },
}
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
</style>