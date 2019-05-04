const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    }
  }
);

schema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Document', schema);