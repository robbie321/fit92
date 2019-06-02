<template>
  <div>
    <v-responsive class="primaryColor" dark>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h1 class="jumboText">{{program.title}}</h1>
          </v-flex>
        </v-layout>
      </v-container>
    </v-responsive>
    <v-container>
      <v-layout id="singleBlog" align-center justify-center row wrap>
        <v-flex justify-center xs12 sm10 md12>
          <v-card flat class="homeCard cardStyle" color="grey darken-3">
            <v-container fluid>
              <v-layout row>
                <v-flex xs12 sm12 md12>
                  <!-- <v-card-title class="align" style="color:#b7a460" primary-title>
                    <h2>{{program.title}}</h2>
                  </v-card-title>-->
                  <hr style="margin-bottom:5px">

                  <h2 style="margin-left: 15px; color:white">
                    <span style="color:#b7a460">PRICE:</span>
                    €{{program.price}}
                  </h2>

                  <div>
                    <v-card-actions class="align">
                      <paypal :contacted="false" :amount="program.price" :title="program.title"></paypal>
                    </v-card-actions>
                  </div>
                  <hr>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
          <h1 style="color:#b7a460">{{program.title}}</h1>
          <article style="color:white">By {{program.author}}</article>
          <!-- <h2 class="align">WHAT THIS PROGRAM IS</h2> -->
          <h2 class="align" style="color:white">OVERVIEW</h2>
          <p>{{program.overview}}</p>
          <h2 class="align" style="color:white">GYM PLAN</h2>

          <ul>
            <li v-for="line in program.content" :key="line">
              <span>{{line}}</span>
            </li>
          </ul>

          <div id="enroll"></div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import Paypal from "./PayPal";

export default {
  data() {
    return {
      id: this.$route.params.id,
      amount: "",
      contaced: "",
      client: {
        name: "",
        email: "",
        title: "",
        reached: false
      },

      btnDisabled: true
    };
  },
  components: {
    paypal: Paypal
  },
  methods: {
    btnStatus() {
      if (this.name != null && this.email != null) {
        this.btnDisabled = false;
      }
    }
  },
  computed: {
    program() {
      return this.$store.getters.loadedProgram(this.id);
    }
  },
  mounted() {
    this.client.title = this.program.title;
  }
};
</script>
<style scoped>
.home {
  background-image: url("https://www.essentiallysports.com/wp-content/uploads/2-1.jpg");
  background-repeat: no-repeat;
  background-size: 100% 25%;
}
.homeCard {
  /* margin-top: 200px; */
  margin-bottom: 40px;
}
#singleBlog {
  max-width: 900px;
  margin: 0 auto;
}
.align {
  margin-top: 10px;
  float: center;
  /* text-align: center; */
}
ul {
  text-align: left;
  /* margin-left: 50px; */
  list-style-position: outside;
}
li {
  font-size: 26px;
  color: rgb(250, 58, 58);
}
li span {
  font-size: 18px;
  color: rgb(168, 168, 168);
}
p {
  font-size: 26px;
}
hr {
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #b7a460, #333, #b7a460);
}
</style>
