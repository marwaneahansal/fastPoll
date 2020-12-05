require('./bootstrap');


import Vue from 'vue';

import Vuesax from 'vuesax';
// vuesax scss
import 'vuesax/dist/vuesax.css'

// import Vuelidate from 'vuelidate';

// Vue.use(Vuelidate);

Vue.use(Vuesax, {
    colors: {
        primary:'#5b3cc4',
        success:'rgb(23, 201, 100)',
        danger:'rgb(242, 19, 93)',
        warning:'rgb(255, 130, 0)',
        dark:'rgb(36, 33, 69)'
    }
});


// Vue.component('home-component', require('./views/app.vue').default);
import App from './views/App.vue';
import router from './router.js';

new Vue({
    router,
    Vuesax,
    render: h => h(App)
}).$mount('#app')