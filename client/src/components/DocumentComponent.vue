<template>
  <div class="container">
    <Editor/>
    <h1>Documents</h1>
    <div class="document-container">
      <div class="document" v-for="document in documents" v-bind:key="document._id">
        <b>{{document.title}}</b>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from "./Editor";
import DocumentService from "../DocumentService";
import marked from "marked";

export default {
  name: "DocumentComponent",
  data() {
    return {
      input: "#Hello",
      documents: []
    };
  },
  created() {
    DocumentService.getDocuments().then(res => {
      this.documents = res.data;
    });
  },
  components: {
    Editor
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
