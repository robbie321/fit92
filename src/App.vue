<template>
  <v-app class="black">
    <v-navigation-drawer fixed temporary app v-model="sideNav" style="width: 250px; ">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" router :to="item.link">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="userIsAuthenticated" @click="onLogout">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Logout</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="black" class="justify-center" flat app>
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase" style="color:#b7a460">
        <v-container>
          <router-link to="/" tag="span" style="cursor: pointer">
            <span class="font-weight-light">FIT</span>
            <span class="font-weight-dark"></span>92
          </router-link>
        </v-container>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          class="text-uppercase"
          style="color:#b7a460"
          flat
          v-for="item in menuItems"
          :key="item.id"
          router
          :to="item.link"
        >
          <!-- <v-icon left>{{item.icon}}</v-icon> -->
          {{item.title}}
        </v-btn>
        <v-btn
          class="text-uppercase"
          style="color:#b7a460"
          flat
          v-if="userIsAuthenticated"
          @click="onLogout"
        >Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  // name: 'App',

  data: () => ({
    icons: [
      {
        name: "fab fa-facebook",
        link: "https://www.facebook.com/quansinjuryclinic/"
      },
      {
        name: "fab fa-twitter",
        link: ""
      },
      {
        name: "fab fa-youtube",
        link: "https://www.youtube.com/channel/UCutsqY6zrLwuhRsXqHOVp8A"
      },
      {
        name: "fab fa-instagram",
        link: "https://www.instagram.com/jq_fit92/?hl=en"
      }
    ],
    sideNav: false
  }),
  computed: {
    menuItems() {
      let menuItems = [
        { icon: "lock", title: "home", link: "/" },
        { icon: "lock", title: "services", link: "/programs" },
        { icon: "settings", title: "admin", link: "/signin" }
      ];
      if (this.userIsAuthenticated) {
        menuItems = [
          { icon: "lock", title: "home", link: "/" },
          { icon: "person", title: "clients", link: "/clients" },
          { icon: "shop", title: "services", link: "/programs" }
        ];
      }
      return menuItems;
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css?family=Wire+One");
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
@import url("https://fonts.googleapis.com/css?family=Oswald");
body {
  /* font-family: "Courier New", Courier, monospace; */
  font-family: "Oswald", sans-serif;
  background: #dfdfdd;
}
.primaryColor {
  background-color: black;
  color: #b7a460;
}
.secondaryColor {
  color: black;
}
/*stops page shifting to left when scroll bar appears*/
html {
  overflow-y: scroll;
}
.v-btn .v-btn__content .v-icon {
  color: #b7a460;
}
.v-btn--active:before,
.v-btn:hover:before,
.v-btn:focus:before {
  background-color: black;
  color: #b7a460;
  border-radius: 40px;
  /* size: 20%; */
}

.headings {
  padding-top: 10px;
  text-align: center;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Oswald", sans-serif;
  /* text-align: center; */
}
p {
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  color: rgb(168, 168, 168);
}
/*  */
</style>
