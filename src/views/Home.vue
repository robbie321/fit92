<template>
  <div>
    <v-jumbotron class="image" dark>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h1 class="jumboText">ARE YOU READY TO MAKE A CHANGE?</h1>
            <!-- <hr> -->
            <v-btn to="/programs" color="green" large>START NOW</v-btn>
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

      <v-layout wrap row justify-center>
        <v-flex xs10 sm4 md4 text-xs-center>
          <img src="./../assets/hp-circle-one.png" alt="pic" style="height:auto; width: 128px;">
          <!-- <v-img
            src="./../assets/hp-circle-one.png"
            style="height:auto; width: 128px;     display: -webkit-inline-box;"
          ></v-img>-->
          <p>All our products are 100% personalised to you, your lifestyle and your goals.</p>
        </v-flex>
        <v-flex xs12 sm4 md4 text-xs-center>
          <img src="./../assets/hp-circle-one.png" alt="pic" style="height:auto; width: 128px;">

          <p>You will receive 24/7 support and guidance through all our plans.</p>
        </v-flex>
        <v-flex xs12 sm4 md4 text-xs-center>
          <img src="./../assets/hp-circle-one.png" alt="pic" style="height:auto; width: 128px;">

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
      videoId: "lG0Ys-2d4MA",
      playerVars: {
        autoplay: 1
        // frameborder: 0
      }
    };
  },
  methods: {
    playing() {
      // this.$refs.video.player.loadVideoById("bHQqvYy5KYo", "large");
      // this.$refs.video.player.playVideo();
      console.log("o/ we are watching!!!");
    }
  }
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
