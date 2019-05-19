<template>
  <v-app class="grey lighten-5">
    <v-navigation-drawer fixed temporary app v-model="sideNav" style="width: 250px">
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
    <v-toolbar color="#263238" class="justify-center" flat app>
      <v-toolbar-side-icon @click.native.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase white--text">
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
          class="text-uppercase white--text"
          flat
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link"
        >
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
        <v-btn class="text-uppercase white--text" flat v-if="userIsAuthenticated" @click="onLogout">
          <v-icon left>exit_to_app</v-icon>Logout
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view></router-view>

      <!-- <v-btn v-if="userIsAuthenticated" color="blue" dark fixed bottom right fab>
        <v-icon>add</v-icon>
        <v-icon>close</v-icon>
      </v-btn>-->
    </v-content>
    <!-- <div class="fab">
      <vue-fab size="big" scrollAutoHide="false" mainBtnColor="#3599DB">
        <fab-item @clickItem="clickItem" :idx="0" title="add blog/program" icon="add"/>
        <fab-item @clickItem="clickItem" :idx="1" title="remove blog/program" icon="delete"/>
        <fab-item @clickItem="clickItem" :idx="2" title="edit" icon="edit"/>
      </vue-fab>
    </div>-->
  </v-app>
</template>

<script>
export default {
  // name: 'App',

  data() {
    return {
      sideNav: false
    };
  },
  computed: {
    menuItems() {
      let menuItems = [
        { icon: "home", title: "blog", link: "/blog" },
        // { icon: 'lock', title: 'sign up', link: '/signup' },
        { icon: "lock", title: "classes", link: "/classes" },
        { icon: "lock", title: "meals & plans", link: "/programs" },
        { icon: "settings", title: "admin", link: "/signin" }
      ];
      if (this.userIsAuthenticated) {
        menuItems = [
          { icon: "person", title: "clients", link: "/clients" },
          { icon: "shop", title: "programs", link: "/programs" },
          // { icon: "shop", title: "purchased", link: "/billed" },
          { icon: "home", title: "blog", link: "/blog" }
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
/*stops page shifting to left when scroll bar appears*/
html {
  overflow-y: scroll;
}
a {
  color: black;
}
a:hover {
  color: white;
}
nav li:hover,
nav li.router-link-active,
nav li.router-link-exact-active {
  color: black;
  /* cursor: pointer; */
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
