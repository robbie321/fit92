<template>
  <div id="addBlog">
    <h2>Add a new Blog post</h2>
    <form v-if="!submitted">
      <label>Blog Title</label>
      <input type="text" v-model.lazy="blog.title" required>
      <label>Thumbnail</label>
      <input type="file" @change="onFileSelected">
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>

      <v-btn class="success" v-on:click.prevent="post">Post Blog</v-btn>
    </form>

    <div v-if="submitted">
      <h3>Post is now added</h3>
    </div>

    <div id="checkboxes">
      <label>Tech</label>
      <input type="checkbox" value="tech" v-model="blog.category">
      <label>Pop Culture</label>
      <input type="checkbox" value="pop culture" v-model="blog.category">
      <label>Sports</label>
      <input type="checkbox" value="sports" v-model="blog.category">
      <label>Gaming</label>
      <input type="checkbox" value="gaming" v-model="blog.category">
    </div>
    <!--
    <div id="preview">
      <h3>Blog Priview</h3>
      <p>Blog Title:{{blog.title}}</p>
      <p>
        Blog Content:
        <br>
        {{blog.content}}
      </p>
      <p>Categories:</p>
      <ul>
        <li v-for="category in blog.category" :key="category.category">{{category}}</li>
      </ul>
      <p>Author: {{blog.author}}</p>
    </div>-->
  </div>
</template>
<script>
export default {
  data() {
    return {
      blog: {
        title: '',
        content: '',
        category: [],
        author: '',
        image: '',
      },
      authors: ['Robbie Malone'],
      submitted: false,
    };
  },
  methods: {
    post() {
      this.$http
        .post('https://tournament-website.firebaseio.com/posts.json', this.blog)
        .then(function (data) {
          console.log(data);
          this.submitted = true;
        });
    },
    onFileSelected(event) {
      this.blog.image = event.target.files[0];
    },
  },
};
</script>
<style>
#addBlog * {
  box-sizing: border-box;
}
#addBlog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}

#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
