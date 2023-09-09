const mongoose = require('mongoose'); 

const PostSchema = new mongoose.Schema({
    title : {
        type : String
    }, 
    capiton : {
        type : String
    }, 
    image : {
        data: Buffer, // Store the image data as binary
        contentType: String, 
    }, 
    user : {
        type : String

    }

}); 