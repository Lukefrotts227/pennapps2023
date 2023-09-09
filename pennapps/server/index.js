require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const PromptModel = require('./models/Prompts'); 
const PostModel = require('./models/Post');
const cors = require('cors');

app.use(express.json());
app.use(cors());
const port = process.env.PORT 
const mongodb_url = process.env.MONGO;

mongoose.connect(
    mongodb_url
);


app.post("/users/createUser", async (req,res) =>{

    try {
        const user = req.body;
        const newUser = new UserModel(user);
        await newUser.save();
        res.status(200).json(user);

    }
    catch(error) {
        res.status(500).json({message:"Failed to create user", error:error});
    }

}
);

app.get("/users/getUser/:email/:password", async (req, res) => {
    const { email, password } = req.params;
    const user = await UserModel.findOne({ email, password }).exec();
    if (!user) {
        return res.status(404).json({message: "User not found or password is incorrect." });
    }
    res.status(200).json({user});
});

app.get("/users/getUsers", (req, res) => {
    UserModel.find({}, (err,result) => {
        if (err){
            res.status(404).json(err);
        }
        else{
            res.statusCode(200).json(result);
        }
    });
}
);


app.listen(port, () => {
    console.log("SERVER RUNS")
});


