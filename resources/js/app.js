import Vue from 'vue';



import 'boxicons';

import Vuesax from 'vuesax';
// vuesax scss
import 'vuesax/dist/vuesax.css';

import VeeValidate from 'vee-validate';

import KProgress from 'k-progress';


import store from './store/index';


// Vue.component('home-component', require('./views/app.vue').default);
import App from './views/App.vue';
import router from './router';


require('./bootstrap');

Vue.use(VeeValidate);
Vue.use(Vuesax);
Vue.component('k-progress', KProgress);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
