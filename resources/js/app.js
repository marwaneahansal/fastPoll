require('./bootstrap');


import Vue from 'vue';


import store from './store/index';

import 'boxicons';

import Vuesax from 'vuesax';
// vuesax scss
import 'vuesax/dist/vuesax.css'

import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)

Vue.use(Vuesax);

import KProgress from 'k-progress';
Vue.component('k-progress', KProgress);


// Vue.component('home-component', require('./views/app.vue').default);
import App from './views/App.vue';
import router from './router.js';

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')