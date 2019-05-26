<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-btn v-if="userIsAuthenticated" class="primary" :to="{name: 'post'}">New Blog</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap v-for="blog in filteredBlogs" :key="blog.id" class="singleBlog">
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <v-card class="card-image" color="white" hover>
          <v-img :src="blog.image"></v-img>
          <v-card-title primary-title class="justify-center heading">
            <b>{{blog.title | toUppercase}}</b>
          </v-card-title>
          <v-container fluid>
            <v-layout row>
              <v-flex xs12 sm12 md12>
                <p>{{blog.content | snippet}}</p>
                <v-card-actions class="align">
                  <v-btn class="primary" v-bind:to="'/blog/'+blog.id">READ POST</v-btn>
                  <v-btn
                    v-if="userIsAuthenticated"
                    @click="removeBlog(blog.id)"
                    class="error"
                  >DELETE</v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      // blogs: [],
      // id: "",
      search: ""
    };
  },
  methods: {
    removeBlog(id) {
      return this.$store.dispatch("removeBlog", { id });
      console.log(`${id} Blog Removed`);
    }
  },

  computed: {
    blogs() {
      return this.$store.getters.loadedBlogs;
    },
    filteredBlogs() {
      return this.blogs.filter(blog => blog.title.match(this.search));
    },
    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    }
  }
};
</script>
<style scoped>
#showBlogs {
  max-width: 800px;
  margin: 0 auto;
  text-decoration: none;
}
.singleBlog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
}
.card-image {
  /* background-image: url("https://cdn2.hubspot.net/hubfs/658892/Blog%20Title%20%20%283%29.png"); */
}
.deleteButton {
  margin: 0 auto;
  margin-left: 120px;
}
@media screen and (min-width: 480px) {
  .deleteButton {
    margin-left: 650px;
  }
}
h3 {
  color: black;
  text-decoration: none;
}
h3:hover {
  color: azure;
}
a:-webkit-any-link {
  text-decoration: none;
}
.heading {
  font-size: 20px;
  color: black;
}
</style>
