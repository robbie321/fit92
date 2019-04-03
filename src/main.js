import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import * as firebase from "firebase";
import router from "./router";
import store from "./store";
import Vuetify from "vuetify";
import VueResource from "vue-resource";

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
    //initialise firebase
    firebase.initializeApp({
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
  }
}).$mount("#app");
