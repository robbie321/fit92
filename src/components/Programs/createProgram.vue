<template>
  <div id="addprogram">
    <v-layout align-center justify-center>
      <v-flex xs11 sm12 md12>
        <v-card>
          <v-card-text>
            <h2>Add a new program</h2>
            <v-form v-if="!submitted" enctype="multipart/form-data">
              <label>Program Title</label>
              <input type="text" v-model.lazy="program.title" required>
              <label>Thumbnail</label>
              <input type="file" id="file" ref="file" @change="onFileChange($event)">
              <label>Program overview:</label>
              <textarea id="input" v-model.lazy="program.overview"></textarea>

              <div class="input_fields_wrap">
                <label>Gym Plan</label>
                <input type="text" name="mytext[]" v-model.lazy="program.content[0]" required>
                <br>
                <input type="text" v-model.lazy="program.content[1]" required>
                <br>
                <input type="text" v-model.lazy="program.content[2]" required>
                <br>
              </div>
              <input type="hidden" value="1" id="total_chq">

              <v-btn class="add_field_button" v-on:click="addLineToList">Add line to list</v-btn>
              <!-- <textarea id="output"disabled></textarea> -->
              <label>Price:</label>
              <input
                type="number"
                min="0"
                onkeypress="return (event.charCode == 8 || event.charCode == 0 || event.charCode == 13) ? null : event.charCode >= 48 && event.charCode <= 57"
                v-model.lazy="program.price"
                onKeyUp="if(this.value>1000){this.value='1000';}else if(this.value<0){this.value='0';}"
              >
              <br>
              <br>
              <!-- :disabled="!isComplete" -->
              <v-btn id="encode" class="success" v-on:click.prevent="post">Add Program</v-btn>
              <!-- <button v-on:click.prevent="post">Post program</button> -->
            </v-form>

            <div v-if="submitted">
              <h3>Post is now added</h3>
            </div>

          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      program: {
        title: "",
        image: "",
        overview: "",
        content: [],
        price: "",
        author: "Jason Quan"
      },
      submitted: false
    };
  },
  methods: {
    post() {
      this.$http
        .post(
          "https://tournament-website.firebaseio.com/programs.json",
          this.program
          // {
          //   headers: {
          //     "content-type": "multipart/form-data"
          //   }
          // }
        )
        .then(function(data) {
          console.log(data);
          this.submitted = true;
        });
    },
    addLineToList() {
      $(document).ready(function() {
        var max_fields = 10; //maximum input boxes allowed
        var wrapper = $(".input_fields_wrap"); //Fields wrapper
        var add_button = $(".add_field_button"); //Add button ID
        var i = 3; //intianl content count
        var x = 1; //initlal text box count
        $(add_button).click(function(e) {
          //on add input button click
          e.preventDefault();
          if (x < max_fields) {
            //max input box allowed
            x++; //text box increment
            i++;
            $(wrapper).append(
              '<div><input type="text" name="mytext[]" ${v-model.lazy="program.content[3]"}/><a href="#" class="remove_field">Remove</a></div>'
            ); //add input box
          }
        });

        $(wrapper).on("click", ".remove_field", function(e) {
          //user click on remove text
          e.preventDefault();
          $(this)
            .parent("div")
            .remove();
          x--;
          i--;
        });
      });
    },
    makeBold() {
      $(document).ready(function() {
        
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
      data.append("file", this.program.image);
    }
  },
  computed: {
    isComplete() {
      return (
        this.program.title &&
        this.program.image &&
        this.program.content &&
        this.program.price
      );
    }
  }
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
