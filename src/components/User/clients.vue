<template>
  <v-container>
    <h1 style="text-align:center; color:white; font-size: 3em;">CLIENT MANAGER</h1>
    <!-- <v-text-field solo>
      <v-btn icon @click.native.stop="modalModel=true">
        <v-icon>search</v-icon>
      </v-btn>
    </v-text-field>-->
    <input type="text" v-model="search" placeholder="Search for clients....." />
    <v-layout justify-center row wrap>
      <v-flex xs12 sm6 v-for="client in filterClients" :key="client.id">
        <v-card
          class="elevation-3 singleBlog cardStyle"
          color="grey darken-3"
          style="margin: 5px"
          flat
        >
          <v-container fluid>
            <v-layout row justify-center>
              <v-flex xs12 sm12 md12>
                <v-container>
                  <v-layout class="row">
                    <v-flex xs12>
                      <h1 style="text-align: center; color:#b7a460">{{client.name}}</h1>
                      <hr />
                      <v-flex class="text-xs-center">
                        <v-btn outline>manage</v-btn>
                        <v-btn outline>Remove</v-btn>
                      </v-flex>
                    </v-flex>
                  </v-layout>
                </v-container>

                <!-- <h1 style="text-align: center;color:white">{{client.title}}</h1>
                <h1
                  style="text-align:center; color:white; letter-spacing:2px; font-size:1.5em"
                >{{client.email}}</h1>-->
              </v-flex>
            </v-layout>
            <!-- <div v-if="!client.contacted"></div> -->
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      show: true,
      toggled: false,
      search: ""
    };
  },
  methods: {
    markedDone(contacted, id) {
      if (contacted) {
        contacted = true;
      } else {
        contacted = false;
      }
      this.$store.dispatch("contacted", { contacted, id });
    }
  },
  computed: {
    clients() {
      return this.$store.getters.loadedClients;
    },
    aClient(id) {
      return this.$store.getters.loadedClient(this.id);
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },
    filterClients() {
      return this.clients.filter(client => {
        return client.name.match(this.search);
      });
    }
  }
};
</script>
<style scoped>
html {
  font-size: 2vw;
}
h1 {
  font-size: 2em;
}
hr {
  /* margin-bottom: 5px; */
  border: 0;
  height: 1px;
  background: #b7a460;
}
</style>
