<template>
    <div id="addBlog">
        <h2>Add a new program</h2>
        <v-form v-if="!submitted">
            <label>Program Title</label>
            <input type="text" v-model.lazy="blog.title" required/>
            <label>Program Content:</label>
            <textarea v-model.lazy="blog.content"></textarea>
            <label>Price:</label>
            <input type="number" min="0"  
            onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57"
             v-model.lazy="blog.price"
             onKeyUp="if(this.value>100){this.value='100';}else if(this.value<0){this.value='0';}">
            <br>
            <br>
            <v-btn class="success" :disabled="!isComplete" v-on:click.prevent="post">Add Program</v-btn>
            <!-- <button v-on:click.prevent="post">Post Blog</button> -->
        </v-form>

        <div v-if="submitted">
            <h3>Post is now added</h3>
        </div>

        <div id="checkboxes">
            <label>Fat Loss</label>
            <input type="checkbox" value="tech" v-model="blog.category" />
            <label>Bulking</label>
            <input type="checkbox" value="pop culture" v-model="blog.category" />
            <label>Conditioning</label>
            <input type="checkbox" value="sports" v-model="blog.category" />
            <label>Shredding</label>
            <input type="checkbox" value="gaming" v-model="blog.category" />
        </div>

        <!-- <label>Author:</label>
        <select v-model="blog.author">
            <option v-for="author in authors" :key="author.authors">{{author}}</option>
        </select> -->

        <div id='preview'>
            <h3>Program Priview</h3>
            <p>Program Title:{{blog.title}}</p>
            <p>Program Content:<br>{{blog.content}}</p>
            <p>Categories:</p>
            <ul>
                <li v-for="category in blog.category" :key="category.category">{{category}}</li>
            </ul>
            <p>Price: {{blog.price}}</p>
        </div>
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
        price: '',
      },
      authors: ['Robbie Malone'],
      submitted: false,

    };
  },
  methods: {
    post() {
      this.$http.post('https://tournament-website.firebaseio.com/programs.json', this.blog).then(function (data) {
        console.log(data);
        this.submitted = true;
      });
    },
    maxLengthCheck(object){
      if (object.value.length > object.maxLength)
      object.value = object.value.slice(0, object.maxLength)
    }
  },
  computed:{
    isComplete () {
      return this.blog.title && this.blog.content && this.blog.price;
  }
  }
};
</script>
<style>
input, textarea {

  background-color : #eeeeee; 
  border: 1px solid #cacaca;

}
#addBlog *{
 box-sizing: border-box;
}
#addBlog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
display: inline-block;
margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
</style>
