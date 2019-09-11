<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn
        v-for="link in links"
        :key="`${link.label}-header-link`"
        text
        :to="link.url"
      >{{ link.label }}</v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title>John Doe</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer color="primary darken-2" padless>
      <v-layout justify-center wrap>
        <v-flex
          primary
          darken-2
          py-4
          text-center
          white--text
          xs12
        >VueJS/Vuetify example: military-equipment-categories version 0.0.3, author Zbigiew Ciok, PL, {{ new Date().getFullYear() }}</v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      links: [
        {
          label: "Home",
          url: "/"
        },
        {
          label: "Categories",
          url: "/categories"
        },
        {
          label: "Login",
          url: "/login"
        }
      ]
    };
  }
};
</script>

<style>
* {
  text-transform: none !important;
}
</style>


