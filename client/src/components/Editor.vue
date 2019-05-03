<template>
  <div class="editor">
    <h1>Editor</h1>
    <textarea></textarea>
    <br>
    <label></label>
    <button class="remove">Remove</button>
    <button class="save">Save</button>
  </div>
</template>

<script>
export default {
  name: "Editor"
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

