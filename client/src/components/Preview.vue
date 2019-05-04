<template>
  <div class="preview">
    <h1>Preview</h1>
    <br>
    <div class = "preview-md" v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
import marked from "marked";

export default {
  name: "Preview",
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  computed: {
    compiledMarkdown() {
      return marked(this.text, { sanitize: true });
    }
  }
};
</script>

<style>
.preview-md {
  width: 49%;
  border: none;
  border-right: 1px solid #ccc;
  /* resize: none; */
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}
</style>