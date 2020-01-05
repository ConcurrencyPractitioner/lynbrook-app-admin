<template>
  <v-container fluid>
    <v-list-item
      two-line
      v-for="author in $store.state.authors.data"
      :key="author.id"
      :to="`/dashboard/author/${author.id}`"
    >
      <v-list-item-action>
        <v-icon>mdi-home</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>{{ author.name }}</v-list-item-title>
        <v-list-item-subtitle>Admin</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-container>
</template>

<script>
export default {};
</script>
