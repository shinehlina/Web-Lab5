<template>
  <div class="editor">
    <h1>
      <input v-model="doc.title" @change="change">
    </h1>
    <textarea v-model="doc.body" @change="change"></textarea>
    <br>
    <label></label>
    <button class="remove" @click="remove(doc.id)">Remove</button>
    <!-- <button class="save" @click="save(doc.title, doc.body, doc._id)">Save</button> -->
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
    async remove(id) {
      await DocumentService.deleteById(id);
      this.$emit("render");
    },
    // async save(title, body, id) {
    //   if (id) {
    //     DocumentService.deleteById(id);
    //   }
    //   await DocumentService.insertDocument(title, body);
    //   this.$emit("render");
    // },
    change() {
      this.$emit("change");
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

