// eslint-disable-next-line import/no-unresolved
import axios from '@js/axios';

export default {
  getPublicPolls({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`polls?query=${payload.searchQuery}&order=${payload.orderByOption}`)
        .then(res => {
          commit('SET_PUBLIC_POLLS', res.data.data);
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  getUserPolls({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`mypolls?query=${payload.searchQuery}&order=${payload.orderByOption}`)
        .then(res => {
          commit('SET_USER_POLLS', res.data.data);
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  createPoll({ _ }, payload) {
    return new Promise((resolve, reject) => {
      axios.post('polls', payload)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  votePoll({ _ }, payload) {
    return new Promise((resolve, reject) => {
      axios.put(`polls/${payload.pollId}`, { option: payload.option })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  getPoll({ _ }, payload) {
    return new Promise((resolve, reject) => {
      axios.get(`poll/${payload.pollId}`)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  deletePoll({ _ }, payload) {
    return new Promise((resolve, reject) => {
      axios.delete(`polls/${payload.pollId}`)
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  },
};
