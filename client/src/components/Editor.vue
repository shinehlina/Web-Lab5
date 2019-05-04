<template>
  <div class="editor">
    <h1>
      <input v-model="doc.title">
    </h1>
    <textarea v-model="doc.body"></textarea>
    <br>
    <label></label>
    <button class="remove" @click="remove(doc.id)">Remove</button>
    <button class="save" @click="save(doc.title, doc.body, doc._id)">Save</button>
  </div>
</template>

<script>
import DocumentService from "../DocumentService";

export default {
  name: "Editor",
  props: {
    doc: {
      default: {
        title: "",
        text: "",
        _id: 0
      }
    }
  },
  methods: {
    remove(id) {
      DocumentService.deleteById(id);
    },
    textChanged() {
        this.$emit("change", this.doc);
    },
    save(title, body, id) {
      if (id != 0) {
        DocumentService.deleteById(id);
      }
      // eslint-disable-next-line
      console.log(title + "    " + body);
      DocumentService.insertDocument(title, body);
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

