<template>
  <div class="home">
    <v-container>
      <v-layout id="singleBlog" align-center justify-center row wrap>
        <v-flex justify-center xs12 sm10 md12>
          <v-card flat class="elevation-6 homeCard">
            <v-container fluid>
              <v-layout row>
                <v-flex xs12 sm12 md12>
                  <v-card-title class="align" primary-title>
                    <h2>{{program.title}}</h2>
                  </v-card-title>
                  <hr>

                  <h2 style="margin-left: 15px;">
                    <span style="color:#00897b">PRICE:</span>
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
          <h1>{{program.title}}</h1>
          <article>By {{program.author}}</article>
          <!-- <h2 class="align">WHAT THIS PROGRAM IS</h2> -->
          <h2 class="align">OVERVIEW</h2>
          <p>{{program.overview}}</p>
          <h2 class="align">GYM PLAN</h2>

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
  background-size: 100% 40%;
}
.homeCard {
  margin-top: 200px;
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
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
}
</style>
