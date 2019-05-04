<template>
  <div class="container">
    <Editor
      :doc="currentDoc"
      v-on:change="onChange"
    />
    <Preview :text="currentDoc.body"/>
    <h1>Documents</h1>
    <div class="document-container">
      <div
        class="document"
        v-for="document in documents"
        v-bind:key="document._id"
        @click="select(document)"
      >{{document.title}}</div>
    </div>
    <div class="option" @click="add">Add</div>
  </div>
</template>

<script>
import Editor from "./Editor";
import Preview from "./Preview";
import DocumentService from "../DocumentService";

export default {
  name: "DocumentComponent",
  data() {
    return {
      currentDoc: {
        id: 0,
        body: "",
        title: ""
      },
      documents: []
    };
  },
  async created() {
    var res = await DocumentService.getDocuments();
    this.documents = res.data;
    if (res.data.length > 0) {
      this.currentDoc = res.data[0];
    }
    // // eslint-disable-next-line
    // console.log(res.data[0].body);
  },
  methods: {
    select(document) {
      this.currentDoc = document;
    },
    onChange(title, text) {
      this.currentDoc.body = text;
      this.currentDoc.title = title;
    },
    add() {
      var newDoc = {
        id: 0,
        body: "",
        title: ""
      };
      this.currentDoc = newDoc;
    }
  },
  components: {
    Editor,
    Preview
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
