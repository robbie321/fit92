<template>
  <v-container>
    <h1 style="text-align:center">MY CLIENTS</h1>

    <v-layout justify-center row wrap>
      <v-flex xs12 sm8 v-for="client in clients" :key="client.name">
        <v-card class="elevation-3 singleBlog" flat>
          <v-container fluid>
            <v-layout row>
              <v-flex xs12 sm12 md12>
                <h1 style="text-align:center; color:blue">{{client.title}}</h1>
                <h1 style="display:inline-block">NAME: {{client.name}}</h1>
                <h1>EMAIL: {{client.email}}</h1>
              </v-flex>
            </v-layout>
            <v-switch label="Contacted Client" color="success"></v-switch>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      toggled: false,
    };
  },
  methods: {
    markedDone(reached, id) {
      if (!reached) {
        client = this.aClient(id);
        client.reached = true;
      }
      console.log('Success');
    },
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
        this.$store.getters.user !== null
        && this.$store.getters.user !== undefined
      );
    },
  },
};
</script>
<style scoped>
</style>
