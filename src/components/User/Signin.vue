<template>
  <!-- <v-layout row v-if="error">
            <v-flex xs12 sm6 offset-sm3>
                <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
            </v-flex>
  </v-layout>-->
  <v-layout align-center justify-center>
    <v-flex xs12 sm6>
      <v-card
        flat
        color="grey darken-3"
        style="outline-style: solid;outline-width: thin;outline-color:#b7a460;border-radius:2px"
      >
        <v-card-text>
          <v-container>
            <form @submit.prevent="OnSignIn">
              <v-layout column>
                <v-flex xs12>
                  <label style="color:white">Email</label>
                  <v-text-field
                    name="email"
                    id="email"
                    v-model="email"
                    type="email"
                    required
                    :rules="[
                                         val => !!val || 'Email is required',
                                        ]"
                    append-icon="mail_outline"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <label style="color:white">Password</label>
                  <v-text-field
                    name="password"
                    id="password"
                    v-model="password"
                    required
                    :append-icon="show ? 'visibility' : 'visibility_off'"
                    :type="show ? 'text' : 'password'"
                    @click:append="show = !show"
                    :rules="[
                                         val => !!val || 'Password is required',
                                        ]"
                  ></v-text-field>
                </v-flex>
                <v-card-actions>
                  <v-btn fab small round block class="success" type="submit" :loading="load">Sign In</v-btn>
                </v-card-actions>
              </v-layout>
            </form>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import { setTimeout } from "timers";

export default {
  data() {
    return {
      email: "",
      password: "",
      show: false,
      load: false
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  watch: {
    user(value) {
      if (value != null && value !== undefined) {
        this.$router.push("/");
      }
    }
  },
  methods: {
    OnSignIn() {
      this.showLoader();
      // Vuex
      this.$store.dispatch("signUserIn", {
        email: this.email,
        password: this.password
      });
    },
    onDismissed() {
      console.log("Dismissed Alert!");
      this.$store.dispatch("clearError");
    },
    showLoader() {
      this.load = true;
      setTimeout(() => {
        this.load = false;
      }, 4000);
    }
  }
};
</script>
<style scoped>
/**
  Places the login box in the middle of the screen
*/
.align-center {
  height: -webkit-fill-available;
}
</style>