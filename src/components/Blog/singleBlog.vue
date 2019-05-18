<template>
  <v-container>
    <v-layout id="singleBlog" row wrap>
      <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
        <h1>{{Ablog.title}}</h1>
        <article>By {{Ablog.author}}</article>
        <p>{{Ablog.content}}</p>
      </v-flex>
    </v-layout>
  </v-container>
  <!-- <div id="singleBlog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.content}}</article>
    <br>
    <p>Author: {{blog.author}}</p>Categories
    <ul>
      <li v-for="category in blog.category" :key="category.category">{{category}}</li>
    </ul>
  </div>-->
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    };
  },

  computed: {
    Ablog() {
      return this.$store.getters.loadedBlog(this.id);
    },
  },
};
</script>
<style>
#singleBlog {
  max-width: 900px;
  margin: 0 auto;
}
</style>
