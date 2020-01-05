<template>
  <div>
    <div class="deep-purple pa-12 text-center white--text">
      <h1 class="display-2 font-weight-black text-uppercase">{{ author.name }}</h1>
    </div>
    <v-container fluid class="pa-8">
      <!-- <v-card class="mb-4"> -->
      <v-list-item outlined link v-for="announcement in announcements" :key="announcement.id">
        <v-list-item-content>
          <v-list-item-title>{{ announcement.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!-- </v-card> -->
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex';

Object.filter = (obj, predicate) => {
  const result = {};

  for (const key of Object.keys(obj)) {
    if (predicate(obj[key])) {
      result[key] = obj[key];
    }
  }

  return result;
};

export default {
  data: () => ({
    showModal: false,
  }),
  computed: mapState({
    author(state) {
      return state.authors.data[this.$route.params.id] || {};
    },
    announcements(state) {
      return Object.filter(
        state.announcements.data,
        ann => ann.from.path === `authors/${this.$route.params.id}`,
      );
    },
  }),
};
</script>

<style scoped>
.stitle {
  margin-bottom: 20px;
}
.term {
  flex-direction: column;
}
.tname {
  font-size: 18px;
  margin-bottom: 10px;
}
</style>
