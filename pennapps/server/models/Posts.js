const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
  },
  // other fields
});

const PostModel = mongoose.model('posts', PostSchema);
module.exports = PostModel;
