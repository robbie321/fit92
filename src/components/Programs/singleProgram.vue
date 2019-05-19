<template>
  <v-container>
    <v-layout id="singleBlog" row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <h1>{{program.title}}</h1>
        <article>By {{program.author}}</article>

        <div id="enroll">
          <v-card flat class="elevation-3">
            <v-container fluid>
              <v-layout row>
                <v-flex xs12 sm12 md12>
                  <v-card-title primary-title>
                    <h2>
                      <span style="color:red">ENROLL NOW:</span>
                      {{program.title}}
                    </h2>
                  </v-card-title>
                  <h2 style="margin-left: 15px">
                    <span style="color:red">PRICE:</span>
                    €{{program.price}}
                  </h2>
                  <div>
                    <v-card-actions class="align">
                      <paypal :amount="program.price" :title="program.title"></paypal>
                    </v-card-actions>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import Paypal from "./PayPal";

export default {
  data() {
    return {
      id: this.$route.params.id,
      amount: "",
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
#singleBlog {
  max-width: 900px;
  margin: 0 auto;
}
.align {
  margin-top: 10px;
  float: center;
}
</style>
