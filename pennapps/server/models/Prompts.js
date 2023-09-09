const mongoose = require('mongoose'); 

const PromptSchema = mongoose.Schema(
    {
        title : {
            type : String, 
            required : true
        },

        content : {
            type : String, 
            required : true
        }, 

        level : {
            type : Number
        }
    }
); 

const PromptModel = mongoose.model("prompts", PromptSchema); 
module.exports = PromptModel