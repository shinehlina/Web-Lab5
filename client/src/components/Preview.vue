<template>
  <div class="preview">
    <h1>Preview</h1>
    <br>
    <div v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
import marked from "marked";

export default {
  name: "Preview",
  props: {
    text: {
      type: String,
      default: "#Hello"
    }
  },
  computed: {
    compiledMarkdown() {
      // eslint-disable-next-line
      console.log(marked);
      return marked(this.text, { sanitize: true });
    }
  }
};
</script>