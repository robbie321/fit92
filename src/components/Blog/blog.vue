<template>
<v-container>
    <v-layout row wrap v-for="blog in filteredBlogs" :key="blog.id" class="singleBlog">
    <v-flex  xs12 sm10 md8 offset-sm1 offset-md2>
      <v-card color="grey lighten-2" hover  >
        <v-container fluid>
          <v-layout row>
            <v-flex xs5 sm4 md3>
              <v-card-title primary-title>
                  <router-link v-bind:to ="'/blog/'+blog.id"><h3><b>{{blog.title | toUppercase}}</b></h3></router-link>
              </v-card-title>
              <v-flex>
                <article>{{blog.content | snippet}}</article>
                  <!-- <v-btn v-if="userIsAuthenticated" v-on:click="removeBlog(blog.id)" class="deleteButton error">Delete</v-btn> -->
              </v-flex>
              <v-card-actions>

              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
     <v-layout row wrap>
    <v-flex  xs12 sm10 md8 offset-sm1 offset-md2>
         <v-btn v-if="userIsAuthenticated" class="primary" :to="{name: 'post'}">New Blog</v-btn>
    </v-flex>
  </v-layout>
</v-container>
    <!-- <div>
        <h3 class="headings">Blogger Malone</h3>
        <div class="row">
            <div class="col-6 col-md-2"></div>
            <div class="col-12 col-md-8"><p class="headings">Here I will share the things that make me go hmmmmm</p> </div>
            <div class="col-6 col-md-2">
            </div>
          </div>

        <div id=showBlogs>
          <h3>All Blog Articles</h3>
          <input type="text" v-model="search" placeholder="search Blogs"/>
          <div v-for="blog in filteredBlogs" :key="blog.id" class="singleBlog">
              <router-link v-bind:to ="'/blog/'+blog.id"><h3><b>{{blog.title | toUppercase}}</b></h3></router-link>
              <article>{{blog.content | snippet}}</article>
              <v-btn v-if="userIsAuthenticated" v-on:click="removeBlog(blog.id)" class="deleteButton error">Delete</v-btn>
              
          </div>
             <v-btn v-if="userIsAuthenticated" class="primary" :to="{name: 'post'}">New Post</v-btn>
         
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
    removeBlog(id){
      
      return this.$store.dispatch('deleteBlog', {id:this.id})
      console.log(id + " Blog Removed");
    }
  },

  computed: {
    blogs(){
      return this.$store.getters.loadedBlogs
    },
    filteredBlogs() {
      return this.blogs.filter(blog => blog.title.match(this.search));
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
}
.deleteButton{
  margin: 0 auto;
  margin-left: 120px;
}
@media screen and (min-width: 480px) {
  .deleteButton{
    margin-left: 650px;
  }
}
h3{
  color: black;
  text-decoration: none;
}
h3:hover{
  color:azure;
}
a:-webkit-any-link{
  text-decoration: none;
} 
</style>
