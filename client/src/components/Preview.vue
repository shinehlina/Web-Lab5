<template>
  <div class="preview">
    <h1>Preview</h1>
    <br>
    <!-- <div class="output" v-html="compiledMarkdown"></div> -->
  </div>
</template>

<script>
//   import marked from 'marked';

  export default {
    name: 'Preview',
    props: {
        text: {
            type: String,
            default: "#Hello"
        }
    },
    computed: {
    //   compiledMarkdown() {
    //     return marked(this.markdown, {sanitize: true});
    //   }
    }
  }
</script>