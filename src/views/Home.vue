<template>
  <div>
    <!-- <v-responsive class="primaryColor">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex text-xs-center>
            <h1 class="jumboText">FIT92</h1>
          </v-flex>
        </v-layout>
      </v-container>
    </v-responsive>-->
    <v-layout row wrap>
      <v-flex xs12 sm4 @click="clickMethod(home)">
        <v-card color="black">
          <h1 class="image-text">HOME</h1>
          <v-img class="home-image" :src="require('./../assets/jasonbeach.png')"></v-img>
        </v-card>
      </v-flex>

      <v-flex xs12 sm4 @click="clickMethod(programs)">
        <v-card color="black">
          <h1 class="image-text">SERVICES</h1>

          <v-img class="home-image" :src="require('./../assets/jasongym.png')"></v-img>
        </v-card>
      </v-flex>
      <v-flex xs12 sm4 @click="clickMethod(about)">
        <v-card color="black">
          <h1 class="image-text">ABOUT</h1>
          <v-img class="home-image" :src="require('./../assets/jasonwater.png')"></v-img>
          <!-- <img class="home-image" src="./../assets/jasonwater.png"> -->
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm12 md12>
        <div class="video-container">
          <video autoplay muted loop id="myVideo">
            <source src="./../assets/workout.mp4" type="video/mp4" />
          </video>
        </div>
        <div class="overlay">
          <h1>NO GYM? NO PROBLEM</h1>
        </div>
      </v-flex>
    </v-layout>

    <!-- <div id="left" class="left primaryColor">
      <img src="https://www.essentiallysports.com/wp-content/uploads/2-1.jpg" alt>
    </div>
    <div id="right" class="right primaryColor">
      <h1>WHAT FIT92 OFFERS</h1>
      <v-btn color="#b7a460" to="/programs">BEGIN NOW</v-btn>
    </div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      home: "/",
      programs: "/programs",
      about: "/about"
    };
  },
  methods: {
    clickMethod(route) {
      this.$router.push(route);
    },
    setOpacity() {
      console.log("hovered");
    }
  }
};
</script>
<style scoped>
video#myVideo {
  position: absolute;
  object-fit: scale-down;
  width: 100%;
  height: auto;
}
.overlay {
  position: absolute;
  width: 100%;
  z-index: 1;
}
@media screen and (min-width: 1000px) {
  .overlay h1 {
    margin-top: 500px;
    text-align: center;
    font-size: 6rem;
    z-index: 1;
  }
}
@media screen and (max-width: 999px) {
  .overlay h1 {
    margin-top: 80px;
    text-align: center;
    font-size: 3rem;
    z-index: 1;
  }
}

.a-video {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.viedo-container {
  position: absolute;
  top: 0;
  left: 0;

  min-width: 100%;
}
.image-text {
  position: relative;
  color: white;
  font-weight: bold;
  text-align: center;
  /* margin-top: 180px; */
}
.home-image {
  max-width: 100%;
  height: auto;
  position: relative;
  opacity: 0.4;
}
.v-card:hover > .home-image {
  opacity: 1;
}

.flex-center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

@media screen and (min-width: 1001px) {
  h1 {
    font-size: 48px;
  }
  .left {
    width: 50%;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    float: left;
    height: 100vh;
  }
  .right {
    width: 50%;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    float: left;
    height: 100vh;
  }
}
@media screen and (max-width: 1000px) {
  h1 {
    font-size: 23px;
  }
  .left {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    float: left;
    height: 40vh;
  }
  .right {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    float: left;
    height: 60vh;
  }
}
@media screen and (max-width: 570px) {
  h1 {
    font-size: 20px;
  }
}
h1 {
  color: white;
}
#left > img {
  width: 100%;
  height: auto;
}
.image {
  background-image: url("https://www.essentiallysports.com/wp-content/uploads/2-1.jpg");
  background-size: cover;
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
