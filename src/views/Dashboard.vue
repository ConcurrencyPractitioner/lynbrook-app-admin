<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img :src="$store.state.user.data.photoURL" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ $store.state.user.data.displayName }}</v-list-item-title>
          <v-list-item-subtitle>Logged In</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item link to="/dashboard">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item link @click="signOut">
          <v-list-item-action>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Sign out</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Lynbrook High School App Admin</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-content>

    <v-footer app>
      <span>&copy; 2019 Lynbrook ASB. All rights reserved.</span>
    </v-footer>

    <v-snackbar v-model="snackbar" :timeout="1000">
      Signing out...
    </v-snackbar>
  </v-app>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>


<script>
export default {
  data: () => ({
    drawer: null,
    snackbar: false,
  }),
  methods: {
    signOut() {
      this.snackbar = true;
      window.setTimeout(() => {
        this.$firebase.auth().signOut();
      }, 1000);
    },
  },
};
</script>
