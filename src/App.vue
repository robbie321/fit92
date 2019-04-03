<template>
  <v-app class ="grey lighten-4">
    <v-navigation-drawer fixed temporary app v-model="sideNav" style="width: 250px">
        <v-list>
          <v-list-tile
            v-for="item in menuItems"
             :key="item.title"
             router
            :to="item.link"
             >
            <v-list-tile-action>
              <v-icon>{{item.icon}}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>{{item.title}}</v-list-tile-content>
          </v-list-tile>
          <v-list-tile v-if="userIsAuthenticated" @click="onLogout" >
            <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>Logout</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    <v-toolbar  class="justify-center" flat app>
      <v-toolbar-side-icon @click.native.stop = "sideNav = !sideNav"
      class="hidden-sm-and-up"></v-toolbar-side-icon>
        <v-toolbar-title class="text-uppercase grey--text"><router-link to="/" tag="span" style="cursor: pointer">
        <span class="font-weight-light">FIT</span>
        <span class="font-weight-dark"></span>92</router-link> </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
          <v-btn class="text-uppercase grey--text" flat
          v-for="item in menuItems"
          :key="item.title"
          router
          :to="item.link"
          >
            <v-icon left>{{item.icon}}</v-icon>{{item.title}}</v-btn>
            <v-btn class="text-uppercase grey--text" flat v-if="userIsAuthenticated"
            @click="onLogout">
            <v-icon left>exit_to_app</v-icon>Logout</v-btn>
        </v-toolbar-items>
      </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>


  </v-app>


</template>

<script>


export default {
  // name: 'App',

  data() {
    return {
      sideNav: false,
    };
  },
  computed:{
    menuItems(){
      let menuItems = [
          { icon: 'home', title: 'blog', link: '/blog' },
        // { icon: 'lock', title: 'sign up', link: '/signup' },
        { icon: 'lock', title: 'classes', link: '/classes' },
        { icon: 'lock', title: 'meals & plans', link: '/programs' },
        { icon: 'lock', title: 'sign in', link: '/signin' }

      ]
      if(this.userIsAuthenticated){
        menuItems = [
          { icon: 'home', title: 'blog', link: '/blog' },
          { icon: 'shop', title: 'classes', link: '/classes' },
          { icon: 'shop', title: 'meals & plans', link: '/programs' },
        ]
      }
      return menuItems
    },
    userIsAuthenticated(){
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  methods:{
    onLogout(){
      this.$store.dispatch('logout')
    }
  }
};
</script>
<style>

@import url('https://fonts.googleapis.com/css?family=Wire+One');
body{
  font-family: 'Courier New', Courier, monospace;
  background: #dfdfdd;
}
/*stops page shifting to left when scroll bar appears*/
html {
  overflow-y: scroll;
}
a{
  color: black;
}
a:hover{
  color: white;
}
nav li:hover,
 nav li.router-link-active,
 nav li.router-link-exact-active {
   color:black;
   /* cursor: pointer; */
 }
.headings{
  padding-top: 10px;
  text-align: center;
}
h1,h2,h3,h4,h5,h6{
  font-family: 'Courier New', Courier, monospace;
    /* text-align: center; */
}
.paragraphs{
  text-align: left;
}
.navbar-light .navbar-nav .nav-link {
    color: black;
}
.navbar-light .navbar-nav .nav-link:hover {
    color: rgba(255, 255, 255, 0.7);
}
.btn-right{
  text-align: right;
}
.left{
  margin-left: 25px;
}
.right{
  margin-right: 20px;
}
section{
    padding: 30px 0;
}
.details-card {
	background: #fff;;
}
.iframe{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.card-content {
  background:#eaeef1;
	border: 4px;
	box-shadow: 0 2px 5px 0 #babdbd, 0 2px 10px 0 #babdbd;
}
.icon{
  text-align: center;
  display:block;
  text-decoration: none !important;
  margin: 0 auto;
}
.card-img {
	position: relative;
	overflow: hidden;
	border-radius: 0;
	z-index: 1;
}

.card-img img {
	width: 100%;
	height: auto;
	display: block;
}

.card-img span {
	position: absolute;
    top: 15%;
    left: 12%;
    background: #ffe400;
    padding: 6px;
    color: #fff;
    font-family: 'Courier New', Courier, monospace;
    font-size: 12px;
    border-radius: 4px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    -ms-border-radius: 4px;
    -o-border-radius: 4px;
    transform: translate(-50%,-50%);
}
.card-desc {
	padding: 1.25rem;
}

.card-desc h3 {
  color: #000000;
  font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
    font-size: 1.5em;
    line-height: 1.3em;
    margin-top: 0;
    margin-bottom: 5px;
    padding: 0;
}

.card-desc p {
  font-family: 'Courier New', Courier, monospace;
	color: #000000;
    font-size: 14px;
	font-weight: 400;
	font-size: 1em;
	line-height: 1.5;
	margin: 0px;
	margin-bottom: 20px;
	padding: 0;
	/* font-family: 'Raleway', sans-serif; */
}
.btn-card{
	background-color: #1c3334;
  color: #fff;
  font-family: 'Courier New', Courier, monospace;
	box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
    padding: .84rem 2.14rem;
    font-size: .81rem;
    -webkit-transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    -o-transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    margin: 0;
    border: 0;
    -webkit-border-radius: .125rem;
    border-radius: .125rem;
    cursor: pointer;
    text-transform: uppercase;
    white-space: normal;
    word-wrap: break-word;
    color: #fff;
}
.btn-card:hover {
    background: #86c232;
}
a.btn-card {
    text-decoration: none;
    color: #fff;
}
/* End card section */

/*
form
*/

div.form
{
    display: block;
    text-align: center;
}
form
{
    /* display: inline; */
    margin-left: auto;
    margin-right: auto;
    text-align: left;
}
.form-control{
  line-height: 1.25em;
}
/*jumbotron*/
.jumbotron{
   /* background: url(/images/unity2.png) no-repeat; */
border: 4px;
box-shadow: 0 2px 5px 0 #babdbd, 0 2px 10px 0 #babdbd;
}
/**************************************************/
/*                   Cards Website                */
/**************************************************/
.hovereffect {
  width: 100%;
  height: 100%;
  float: left;
  overflow: hidden;
  position: relative;
  text-align: center;
  cursor: default;
}

.hovereffect .overlay {
  position: absolute;
  overflow: hidden;
  width: 80%;
  height: 80%;
  left: 10%;
  top: 10%;
  border-bottom: 1px solid #FFF;
  border-top: 1px solid #FFF;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: scale(0,1);
  -ms-transform: scale(0,1);
  transform: scale(0,1);
}

.hovereffect:hover .overlay {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

.hovereffect img {
  display: block;
  position: relative;
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
}

.hovereffect:hover img {
  filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.6" /><feFuncG type="linear" slope="0.6" /><feFuncB type="linear" slope="0.6" /></feComponentTransfer></filter></svg>#filter');
  filter: brightness(0.6);
  -webkit-filter: brightness(0.6);
}

.hovereffect h2 {
  text-transform: uppercase;
  text-align: center;
  position: relative;
  font-size: 17px;
  background-color: transparent;
  color: #FFF;
  padding: 1em 0;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(0,-100%,0);
  transform: translate3d(0,-100%,0);
}

.hovereffect a, .hovereffect p {
  color: #FFF;
  padding: 1em 0;
  opacity: 0;
  filter: alpha(opacity=0);
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(0,100%,0);
  transform: translate3d(0,100%,0);
}

.hovereffect:hover a, .hovereffect:hover p, .hovereffect:hover h2 {
  opacity: 1;
  filter: alpha(opacity=100);
  -webkit-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
}

#figure{
  display: block;
  margin: 0 auto 0.55em;
}

</style>
