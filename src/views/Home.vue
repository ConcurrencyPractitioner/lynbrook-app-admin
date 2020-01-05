<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Lynbrook High School App Admin</v-toolbar-title>
              </v-toolbar>
              <v-card-text class="text--primary">
                <v-alert type="error" v-if="error != null">{{ error.message }}</v-alert>
                Welcome to the admin panel for Lynbrook's mobile application. This website
                is not intended for ordinary students. Club admins are able to use this website
                to manage their club, send out announcements, and manage sign-in codes.
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click="signIn">Sign in with Google</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      error: null,
    };
  },
  methods: {
    signIn() {
      const provider = new this.$firebase.auth.GoogleAuthProvider();
      this.$firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => {
          this.$router.push({ name: 'dashboard' });
        })
        .catch((error) => {
          this.error = error;
        });
    },
  },
};
</script>
