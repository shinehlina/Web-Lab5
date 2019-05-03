<template>
  <div class="container">
    <h1> Documents</h1>
    <div class="document-container">
      <div class="document" 
      v-for="document in documents"
      v-bind:key="document._id"
      >
          <b>{{document.title}}</b>
          <p>
          {{document.body}}
          </p>
      </div>
    </div>
  </div>
</template>

<script>
import DocumentService from '../DocumentService'

export default {
  name: 'DocumentComponent',
  data() {
    return {
      documents: [],
    }
  },
  created() {
    DocumentService.getDocuments().then(res => {this.documents = res.data;});
  } 
}
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
