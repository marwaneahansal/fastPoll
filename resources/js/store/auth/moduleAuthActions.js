import axios from 'js/axios'

export default {
  login ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios.post('login', {
          email: payload.email,
          password: payload.password
        })
        .then(res => {
          if(res.data.success === true) {
            commit('SET_LOGGED_IN_USER_INFO', res.data.user);
            resolve('Success')
          } else {
            reject('Email or password is worng. Please try again!');
          }
        }).catch(_ => {
          reject('Email or password is worng. Please try again!');
        })
    })
  },
  register ({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios.post('register', {
          email: payload.email,
          name: payload.name,
          password: payload.password,
          password_confirmation: payload.confirmpassword
        }).then(res => {
          if(res.data.success === true) {
            commit('SET_LOGGED_IN_USER_INFO', res.data.user);
            resolve('Success')
          } else {
            reject('Ooops! something went wrong! Please try again!')
          }
        }).catch(err => {
          reject(err.response.data.errors)
        }
      );
    })
  },
  getloggedInUser({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('user')
        .then(res => {
          if(res.data.loggedIn === true) {
            commit('SET_LOGGED_IN_USER_INFO', res.data.user);
            resolve(res.data.loggedIn);
          } else {
            commit('LOGOUT_USER');
            resolve(res)
          }
        })
        .catch(err => {
          commit('LOGOUT_USER');
          reject(err);
        })
    })
  },
  logout ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('logout')
        .then(res => {
          commit('LOGOUT_USER');
          resolve(res)
        })
        .catch(err => {
          reject('Ooops, Something went wrong!');
        })
    })
  }
}