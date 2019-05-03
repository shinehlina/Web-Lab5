<template>
  <div class="editor">
    <h1>
      <input v-model="title">
    </h1>
    <textarea v-model="text"></textarea>
    <br>
    <label></label>
    <button class="remove" @click="remove(id)">Remove</button>
    <button class="save">Save</button>
  </div>
</template>

<script>
import DocumentService from "../DocumentService";

export default {
  name: "Editor",
  props: {
    title: {
      default: ""
    },
    text: {
      default: ""
    },
    id: {
      default: ""
    }
  },
  methods: {
    remove(id) {
      DocumentService.deleteById(id);
    },
    textChanged() {
      // eslint-disable-next-line
      console.log(this.text);
      this.$emit("change", this.title, this.text);
    }
  }
};
</script>

<style scoped>
textarea {
  width: 49%;
  border: none;
  border-right: 1px solid #ccc;
  /* resize: none; */
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
}
label {
  width: 49%;
}
</style>

