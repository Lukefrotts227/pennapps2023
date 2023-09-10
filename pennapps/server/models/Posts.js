const mongoose = require('mongoose'); 

const PostSchema = mongoose.Schema({

    name : {
        type : String,
        required : true
    },

    description: String,
    image: String,
    // userPicturePath: String,

    // likes: {
    //     type: Map,
    //     of: Boolean,
    //   },
}); 

const PostModel = mongoose.model("posts", PostSchema); 
module.exports = PostModel