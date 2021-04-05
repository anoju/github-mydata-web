import { make } from 'vuex-pathify';
import authApi from '@/api/authApi';

// 사용자 정보 저장소
const state = {
  isLogin: false,
};

// getter
const getters = {};

// setter
const mutations = make.mutations(state);

// actions
const actions = {
  CHECK({ commit }, loginParam) {
    return new Promise((resolve, reject) => {
      console.log(loginParam);
      if (state.isLogin) {
        commit('SET_IS_LOGIN', state.isLogin);
        resolve(true);
      } else {
        reject();
        // TODO 로그인 여부 서버 체크 API 개발 후 대체
        // authApi.loginCheck(loginParam)
        //   .then((user) => {
        //     commit('SET_IS_LOGIN', true);
        //     resolve(user);
        //   }).catch(() => reject());
      }
    });
  },

  LOGIN({ commit }, loginParam) {
    return new Promise((resolve, reject) => {
      authApi.login(loginParam).then((res) => {
        console.log(res);
        commit('SET_IS_LOGIN', true);
        resolve();
      })
        .catch((error) => {
          reject(error);
        });
    });
  },

  LOGOUT({ commit }) {
    return new Promise((resolve) => {
      authApi.logout().then(() => {
        commit('SET_IS_LOGIN', false);
        resolve();
      });
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
