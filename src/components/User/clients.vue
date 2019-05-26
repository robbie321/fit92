<template>
  <v-container>
    <h1 style="text-align:center">MY CLIENTS</h1>

    <v-layout justify-center row wrap>
      <v-flex xs12 sm8 v-for="client in clients" :key="client.id">
        <v-card class="elevation-3 singleBlog" flat>
          <v-container fluid>
            <v-layout row>
              <v-flex xs12 sm12 md12>
                <h1 style="text-align:center; color:blue">{{client.title}}</h1>
                <h1 style="display:inline-block">NAME: {{client.name}}</h1>
                <h1>EMAIL: {{client.email}}</h1>
              </v-flex>
            </v-layout>
            <!-- <div v-if="!client.contacted"></div> -->
            <v-switch
              v-model.lazy="client.contacted"
              @change="markedDone(client.contacted, client.id)"
              :label="`Contacted Client: ${client.contacted.toString()}`"
              color="success"
            ></v-switch>
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
      toggled: false
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
    }
  }
};
</script>
<style scoped>
</style>
