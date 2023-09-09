const mongoose = require('mongoose'); 

const PostSchema = mongoose.Schema({
    user : {
        type : String, 
        required : true
    },

    name : {
        type : String,
        required : true
    },

    description: String,
    picturePath: String,
    userPicturePath: String,

    likes: {
        type: Map,
        of: Boolean,
      },
}); 

const Post = mongoose.model("Post", PostSchema); 
export default Post;