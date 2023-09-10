const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
  filename: String,
  contentType: String,
  metadata: {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post',
    },
  },
});

const ImageModel = mongoose.model('Image', ImageSchema);
module.exports = ImageModel;
