<template>
  <div>
    <div id="left" class="left primaryColor">
      <img src="https://www.stevecookhealth.com/img/stevebottomsquare.jpg" alt>
    </div>
    <div id="right" class="right primaryColor">
      <h1>WHAT FIT92 OFFERS</h1>
      <v-btn color="#b7a460" to="/programs">BEGIN NOW</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {}
};
</script>
<style scoped>
@media screen and (min-width: 701px) {
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
@media screen and (max-width: 700px) {
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

/* .left {
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
} */
#left > img {
  width: 100%;
  height: auto;
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
