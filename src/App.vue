<template>
  <v-app :style="{background: $vuetify.theme.themes.light.background}">
    <v-app-bar
      v-if="$route.path != '/board'"
      app outlined dense elevation="0"
      color="rgb(166,203,183)"
    >
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
