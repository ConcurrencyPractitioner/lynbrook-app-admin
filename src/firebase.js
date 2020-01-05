import Vue from 'vue';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

Vue.mixin({
  beforeCreate() {
    const options = this.$options;
    if (options.firebase) this.$firebase = options.firebase;
    else if (options.parent && options.parent.$firebase) this.$firebase = options.parent.$firebase;
  },
});

export default firebase;
