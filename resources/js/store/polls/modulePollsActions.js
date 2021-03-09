import axios from 'js/axios'

export default {
  getPublicPolls({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('polls')
        .then(res => {
          commit('SET_PUBLIC_POLLS', res.data.polls);
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  getUserPolls({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`polls/${payload.userId}`)
        .then(res => {
          commit('SET_USER_POLLS', res.data.polls);
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
}