import Vue from "vue";
import "./plugins/vuetify";
import * as firebase from "firebase";
import Vuetify from "vuetify";
import VueResource from "vue-resource";
// FAB
import VueFab from "vue-float-action-button";
import store from "./store";
import router from "./router";
import App from "./App.vue";

import VueYoutube from "vue-youtube";

Vue.use(VueYoutube);

Vue.use(VueFab, {
  iconType: "MaterialDesign"
  // iconType: 'iconfont'
});
Vue.use(Vuetify);
Vue.use(VueResource);

Vue.config.productionTip = false;

// Filters
Vue.filter("toUppercase", value => value.toUpperCase());

Vue.filter("snippet", value => `${value.slice(0, 120)}.....`);

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    // initialise firebase
    firebase.initializeApp({
      apiKey: "AIzaSyC3tVP-fuqR9f4xDBrPiINFxMHqq5kYup4",
      authDomain: "tournament-website.firebaseapp.com",
      databaseURL: "https://tournament-website.firebaseio.com",
      projectId: "tournament-website",
      storageBucket: ""
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch("autoSignIn", user);
      }
    });
    this.$store.dispatch("loadBlogs");
    this.$store.dispatch("loadPrograms");
    this.$store.dispatch("loadClients");
  }
}).$mount("#app");
