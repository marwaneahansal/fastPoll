require('./bootstrap');


import Vue from 'vue';

import Vuesax from 'vuesax';

// vuesax scss
import 'vuesax/dist/vuesax.css'


Vue.use(Vuesax);


// Vue.component('home-component', require('./views/app.vue').default);
import App from './views/App.vue';
import router from './router.js';

new Vue({
    router,
    Vuesax,
    render: h => h(App)
}).$mount('#app')