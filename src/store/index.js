import Vue from 'vue';
import Vuex from 'vuex';
import VuexEasyFirestore from 'vuex-easy-firestore';
import firebase from '../firebase';

import announcements from './announcements';
import authors from './authors';
import events from './events';
import users from './users';

Vue.use(Vuex);

const easyFirestore = VuexEasyFirestore(
  [
    announcements,
    authors,
    events,
    users,
  ],
  { logging: true, FirebaseDependency: firebase },
);

const store = new Vuex.Store({
  plugins: [easyFirestore],
  state: {
    loaded: false,
    user: {
      loggedIn: false,
      data: null,
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
  },
  mutations: {
    SET_LOADED(state, value) {
      state.loaded = value;
    },
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      state.user.data = data;
    },
  },
  actions: {
    fetchUser({ commit }, user) {
      commit('SET_LOGGED_IN', user !== null);
      if (user) {
        commit('SET_USER', user);
      } else {
        commit('SET_USER', null);
      }
    },
  },
});

export default store;
