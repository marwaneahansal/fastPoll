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
  createPoll({  }, payload) {
    return new Promise((resolve, reject) => {
      axios.post('polls', payload)
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        });
    })
  },
  votePoll({ }, payload) {
    return new Promise((resolve, reject) => {
      axios.put(`polls/${payload.pollId}`, { pollOptions: payload.pollOptions })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        })
    });
  },
  getPoll({ }, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`poll/${payload.pollId}`)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        })
    });
  },
  deletePoll({ }, payload) {
    return new Promise((resolve, reject) => {
      axios.delete(`polls/${payload.pollId}`)
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  }
}