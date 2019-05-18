<template>
  <div id="addprogram">
    <h2>Add a new program</h2>
    <v-form v-if="!submitted" enctype="multipart/form-data">
      <label>Program Title</label>
      <input type="text" v-model.lazy="program.title" required>
      <label>Thumbnail</label>
      <input type="file" id="file" ref="file" @change="onFileChange($event)">
      <label>Program Content:</label>
      <textarea v-model.lazy="program.content"></textarea>
      <label>Price:</label>
      <input
        type="number"
        min="0"
        onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57"
        v-model.lazy="program.price"
        onKeyUp="if(this.value>100){this.value='100';}else if(this.value<0){this.value='0';}"
      >
      <br>
      <br>
      <!-- :disabled="!isComplete" -->
      <v-btn class="success" v-on:click.prevent="post">Add Program</v-btn>
      <!-- <button v-on:click.prevent="post">Post program</button> -->
    </v-form>

    <div v-if="submitted">
      <h3>Post is now added</h3>
    </div>

    <div id="checkboxes">
      <label>Fat Loss</label>
      <input type="checkbox" value="tech" v-model="program.category">
      <label>Bulking</label>
      <input type="checkbox" value="pop culture" v-model="program.category">
      <label>Conditioning</label>
      <input type="checkbox" value="sports" v-model="program.category">
      <label>Shredding</label>
      <input type="checkbox" value="gaming" v-model="program.category">
    </div>

    <!-- <label>Author:</label>
        <select v-model="program.author">
            <option v-for="author in authors" :key="author.authors">{{author}}</option>
    </select>-->

    <div id="preview">
      <h3>Program Priview</h3>
      <p>Program Title:{{program.title}}</p>
      <!-- <v-img></v-img> -->
      <p>
        Program Content:
        <br>
        {{program.content}}
      </p>
      <p>Categories:</p>
      <ul>
        <li v-for="category in program.category" :key="category.category">{{category}}</li>
      </ul>
      <p>Price: {{program.price}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      program: {
        title: '',
        image: '',
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
      this.$http
        .post(
          'https://tournament-website.firebaseio.com/programs.json',
          this.program,
          // {
          //   headers: {
          //     "content-type": "multipart/form-data"
          //   }
          // }
        )
        .then(function (data) {
          console.log(data);
          this.submitted = true;
        });
    },
    maxLengthCheck(object) {
      if (object.value.length > object.maxLength) {
        object.value = object.value.slice(0, object.maxLength);
      }
    },
    onFileChange(event) {
      let { image } = this.program;
      image = event.target.files[0];
      const data = new FormData();
      data.append('file', this.program.image);
    },
  },
  computed: {
    isComplete() {
      return (
        this.program.title
        && this.program.image
        && this.program.content
        && this.program.price
      );
    },
  },
};
</script>
<style>
input,
textarea {
  background-color: #eeeeee;
  border: 1px solid #cacaca;
}
#addprogram * {
  box-sizing: border-box;
}
#addprogram {
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
