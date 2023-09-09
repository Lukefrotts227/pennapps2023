const mongoose = require('mongoose'); 

const PromptSchema = new mongoose.Schema({
    title: {
        type : String, 
        required : true, 
        minLength : 1, 
        maxLenght : 40
    }, 
    content : {
        type : String, 
        required : true
    },
    level : {
        type : Number, 
        required :  false
    }


}); 