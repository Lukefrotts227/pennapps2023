const mongoose = require('mongoose'); 

const PromptSchema = new mongoose.Schema({
    title: {
        type : string, 
        required : string, 
        minLength : 1, 
        maxLenght : 40
    }


}); 