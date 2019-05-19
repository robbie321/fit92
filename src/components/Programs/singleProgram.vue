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
                  <label>Full Name:</label>
                  <input type="text" v-model="client.name" required>
                  <label>Email:</label>
                  <input type="text" v-model="client.email" required>
                  <!-- <label></label> -->

                  <v-card-actions class="align">
                    <h1>€{{program.price}}&nbsp;</h1>
                    <paypal :amount="program.price" :title="program.title"></paypal>
                  </v-card-actions>
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
import Paypal from './PayPal';

export default {
  data() {
    return {
      id: this.$route.params.id,
      amount: '',
      client: {
        name: '',
        email: '',
        title: '',
        reached: false,
      },

      btnDisabled: true,
    };
  },
  components: {
    paypal: Paypal,
  },
  methods: {
    upload() {
      this.$http
        .post('https://tournament-website.firebaseio.com/clients.json', {
          name: this.client.name,
          email: this.client.email,
          title: this.client.title,
          reached: this.client.reached,
        })
        .then((data) => {
          console.log(data);
          //   this.submitted = true;
        });
    },
    btnStatus() {
      if (this.name != null && this.email != null) {
        this.btnDisabled = false;
      }
    },
  },
  computed: {
    program() {
      return this.$store.getters.loadedProgram(this.id);
    },
  },
  mounted() {
    this.client.title = this.program.title;
  },
};
</script>
<style scoped>
#singleBlog {
  max-width: 900px;
  margin: 0 auto;
}
.align {
  margin-top: 10px;
  float: right;
}
</style>
