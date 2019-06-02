<template>
  <div>
    <v-responsive class="primaryColor" dark>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h1 class="jumboText">SERVICES</h1>
          </v-flex>
        </v-layout>
      </v-container>
    </v-responsive>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
          <v-btn outline left v-if="userIsAuthenticated" :to="{name: 'programpost'}">New Program</v-btn>
        </v-flex>
      </v-layout>
      <v-layout justify-center row wrap class="singleBlog">
        <v-flex xs12 sm7 md4 v-for="program in programs" :key="program.id">
          <v-card class="cardMargin elevation-3 cardStyle" flat color="grey darken-3">
            <v-container fluid>
              <v-layout row>
                <v-flex xs12 sm md12>
                  <img class="responsive" src="./../../assets/FIT92.png">
                  <v-card-title class="justify-center" primary-title>
                    <h2 class="white--text">{{program.title}}</h2>
                  </v-card-title>
                  <!-- <p style="margin-top:20px" align="center">{{program.overview}}</p> -->
                  <v-card-actions class="align">
                    <v-btn
                      outline
                      v-bind:to="'/programs/'+program.id"
                      style="margin-right: 10px"
                    >START NOW</v-btn>
                    <v-btn
                      outline
                      v-if="userIsAuthenticated"
                      @click="remove(program.id)"
                      class="error"
                      color="white"
                    >DELETE</v-btn>
                  </v-card-actions>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // blogs: [],
      id: "",
      search: ""
    };
  },
  methods: {
    remove(id) {
      console.log(id);
      this.$store.dispatch("removeProgram", { id });
      console.log(`${id} Program Removed`);
    }
  },

  computed: {
    programs() {
      return this.$store.getters.loadedPrograms;
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
<style>
.responsive {
  max-width: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: auto;
}
.align {
  justify-content: center;
  align-content: center;
}
@media screen and (min-width: 800px) {
  .cardMargin {
    margin-bottom: 20px;
    margin-right: 20px;
  }
}
@media screen and (max-width: 700px) {
  .cardMargin {
    margin-bottom: 10px;
  }
}
.singleBlog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  /* background: #eee; */
}
.deleteButton {
  margin: 0 auto;
  margin-left: 250px;
  /* color: white; */
  /* text-align: right; */
}
@media screen and (min-width: 480px) {
  .deleteButton {
    margin-left: 650px;
  }
}
h4 {
  color: black;
  text-decoration: none;
}
h2 {
  text-align: center;
  font-size: 32px;
}
a:-webkit-any-link {
  text-decoration: none;
}

.topHeading {
  font-size: 50px;
  letter-spacing: 5px;
}

.image {
  background-image: url("https://www.essentiallysports.com/wp-content/uploads/2-1.jpg");
  background-size: cover;
  /* Sets black overlay on image */
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.4);
}
hr {
  border: 2px solid #4e798f;
  border-radius: 5px;
  width: 55%;
  margin: auto;
}
.jumboText {
  color: #b7a460;
  font-size: 58px;
}
</style>
