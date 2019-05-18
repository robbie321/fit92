<template>
  <div>
    <v-jumbotron class="image" dark>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h1 class="jumboText">ARE YOU READY TO MAKE A CHANGE?</h1>
            <!-- <hr> -->
            <v-btn color="green" large>START NOW</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <v-container>
      <v-layout justify-center>
        <v-flex xs12 sm10>
          <h1 class="why">WHY CHOOSE FIT92?</h1>
        </v-flex>
      </v-layout>

      <v-layout wrap row>
        <v-flex xs12 md4>
          <!-- <v-img
            style="width: 64px;"
            src="https://images.sftcdn.net/images/t_app-logo-l,f_auto,dpr_auto/p/b6197d55-14f8-4644-9024-596ce630b41b/2027944199/my-circle-k-icon.png"
          ></v-img>-->
          <p>All our products are 100% personalised to you, your lifestyle and your goals.</p>
        </v-flex>
        <v-flex xs12 md4 text-xs-center>
          <!-- <v-img
            style="height:auto; width: 64px"
            src="https://images.sftcdn.net/images/t_app-logo-l,f_auto,dpr_auto/p/b6197d55-14f8-4644-9024-596ce630b41b/2027944199/my-circle-k-icon.png"
          ></v-img>-->
          <p>You will receive 24/7 support and guidance through all our plans.</p>
        </v-flex>
        <v-flex xs12 md4 text-xs-center>
          <!-- <v-img
            style="height:auto; width: 64px"
            src="https://images.sftcdn.net/images/t_app-logo-l,f_auto,dpr_auto/p/b6197d55-14f8-4644-9024-596ce630b41b/2027944199/my-circle-k-icon.png"
          ></v-img>-->
          <p>You will receive 24/7 support and guidance through all our plans.</p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jumboTron: [
        { id: 1, image: '', description: 'rgwesrg' },
        { id: 2, image: '', description: 'ergwerg' },
        { id: 3, image: '', description: 'wergewr' },
      ],
    };
  },
};
</script>
<style scoped>
.align {
  /* display: flex; */
  align-items: center;
  justify-content: center;
}
.image {
  background-image: url("https://www.essentiallysports.com/wp-content/uploads/2-1.jpg");
  background-size: cover;
  /* Sets black overlay on image */
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.4);
}
hr {
  border: 2px solid green;
  border-radius: 5px;
  width: 20%;
}
.jumboText {
  font-size: 58px;
}
.why {
  text-align: center;
  font-size: 40px;
  letter-spacing: 6px;
  padding-top: 20px;
}
</style>
