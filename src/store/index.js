import Vue from 'vue';
import Vuex from 'vuex';
import pathify, { make } from 'vuex-pathify';

import modules from './modules';

Vue.use(Vuex);
const state = {
  root1: 'rootValue1',
  root2: 'rootValue2',
};

const mutations = make.mutations(state);

const store = new Vuex.Store({
  plugins: [pathify.plugin],
  modules,
  state,
  mutations,
});

store.subscribe((mutation) => {
  console.log(mutation);
});

export default store;
