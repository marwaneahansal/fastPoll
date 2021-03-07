import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);



import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

// store modules
import moduleAuth from './auth/moduleAuth';


export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    auth: moduleAuth
  },
  strict: process.env.NODE_ENV !== 'production',
});