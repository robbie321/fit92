<template>
<v-container>
  <v-layout row wrap v-for="program in programs" :key="program.id" class="singleBlog">
    <v-flex  xs12 sm10 md8 offset-sm1 offset-md2>
      <v-card color="grey lighten-2" hover >
        <v-container fluid>
          <v-layout row>
            <v-flex xs5 sm4 md3>
              <v-card-title primary-title>
                <div>
                  <h4 class="black--text" mb-0>{{program.title}}</h4>
                </div>
              </v-card-title>
              
              <v-card-actions>
                  <form action="https://www.paypal.com/cgi-bin/webscr" method="post">

                  <!-- Identify your business so that you can collect the payments. -->
                  <input type="hidden" name="business" value="darran.blacky@gmail.com">
                
                  <!-- Specify a Buy Now button. -->
                  <input type="hidden" name="cmd" value="_xclick">
                
                  <!-- Specify details about the item that buyers will purchase. -->
                  <input type="hidden" name="item_name" value="4 Week Nutrtion Plan">
                  <input type="hidden" name="amount" v-bind:value="program.price">
                  <input type="hidden" name="currency_code" value="EUR">
                
                  <!-- Display the payment button. -->
                  <input type="image" name="submit" border="0"
                  src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/buy-logo-medium.png"
                  alt="Buy Now">
                  <img alt="" border="0" width="1" height="1"
                  src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" >
                
                </form>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
  <v-layout row wrap>
    <v-flex  xs12 sm10 md8 offset-sm1 offset-md2>
         <v-btn left v-if="userIsAuthenticated" class="primary" :to="{name: 'programpost'}">New Program</v-btn>
    </v-flex>
  </v-layout>
</v-container>
    <!-- <div>
        <h3 class="headings">Programs</h3>


        <div id=showBlogs>
          <h3>All Blog Articles</h3>
          <input type="text" v-model="search" placeholder="search Blogs"/>
          <div v-for="program in programs" :key="program.id" class="singleBlog">
              <router-link v-bind:to ="'/programs/'+programs.id"><h3><b>{{program.title | toUppercase}}</b></h3></router-link>
              <article>{{program.content | snippet}}</article>
              <v-btn v-if="userIsAuthenticated" v-on:click="removeBlog(blog.id)" class="deleteButton error">Delete</v-btn>
              
          </div>
             <v-btn v-if="userIsAuthenticated" class="primary" :to="{name: 'programpost'}">New Program</v-btn>
         
        </div>
    </div> -->
</template>
<script>


export default {
  data() {
    return {
      // blogs: [],
      id: '',
      search: '',
    };
  },
  methods: {
    // removeBlog(id){
      
    //   return this.$store.dispatch('deleteBlog', {id:this.id})
    //   console.log(id + " Blog Removed");
    // }
  },
  // created() {
  //   this.$http.get('https://tournament-website.firebaseio.com/posts.json').then(data => data.json()).then(function (data) {
  //     const tempArray = [];
  //     for (const key in data) {
  //       data[key].id = key;
  //       tempArray.push(data[key]);
  //       // console.log(data[key]);
  //     }
  //     console.log(tempArray);
  //     this.blogs = tempArray;
  //   });
  // },
  computed: {
    programs(){
      return this.$store.getters.loadedPrograms
    },
    userIsAuthenticated(){
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
};
</script>
<style>
#showBlogs{
    max-width: 800px;
    margin: 0 auto;
    text-decoration: none;
}
.singleBlog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    /* background: #eee; */
}
.deleteButton{
  margin: 0 auto;
  margin-left: 250px;
  /* text-align: right; */
}
@media screen and (min-width: 480px) {
  .deleteButton{
    margin-left: 650px;
  }
}
h4{
  color: black;
  text-decoration: none;
}
a:-webkit-any-link{
  text-decoration: none;
} 



</style>
