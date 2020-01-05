import Vue from 'vue';
import firebase from './firebase';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  router,
  firebase,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');

firebase.initializeApp({
  apiKey: 'AIzaSyAvG7Wbgn3qbQs67ALvONDoX7LBb5QvZSc',
  authDomain: 'lynbrook-high-school.firebaseapp.com',
  databaseURL: 'https://lynbrook-high-school.firebaseio.com',
  projectId: 'lynbrook-high-school',
  storageBucket: 'lynbrook-high-school.appspot.com',
  messagingSenderId: '591406000207',
  appId: '1:591406000207:web:34b4c5c786d803e446e23a',
});

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch('fetchUser', user);
  if (user) {
    router.push('/dashboard');
  } else {
    router.push('/');
  }
  store.commit('SET_LOADED', true);
});

store.dispatch('announcements/openDBChannel');
store.dispatch('authors/openDBChannel');
store.dispatch('events/openDBChannel');
store.dispatch('users/openDBChannel');
