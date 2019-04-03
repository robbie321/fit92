<template>
    <div id = "singleBlog">
        <h1>{{blog.title}}</h1>
        <article>{{blog.content}}</article>
        <br>
        <p>Author: {{blog.author}}</p>
        Categories
        <ul>
            <li v-for="category in blog.category" :key="category.category">{{category}}</li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    };
  },
  created() {
    this.$http.get(`https://portfolio-blog-7a93b.firebaseio.com/posts/${this.id}.json`).then(data => data.json()).then(function (data) {
      this.blog = data;
    });
  },
};
</script>
<style>
#singleBlog{
    max-width: 900px;
    margin: 0 auto;
}
</style>
