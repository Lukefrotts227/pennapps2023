require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const PromptModel = require('./models/Prompts');
const PostModel = require('./models/Posts');
const cors = require('cors');

app.use(express.json());
app.use(cors());
const port = process.env.PORT 
const mongodb_url = process.env.MONGO;

const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Images will be stored in the 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Generate a unique filename
  },
});

const upload = multer({ storage: storage });

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

app.get("/api/prompts", async (req, res) => {
    try {
      // Logic to fetch prompts from the database and send the response
      // Example:
      const prompts = await PromptModel.find({}).exec();
      res.status(200).json(prompts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch prompts", error: error });
    }
  });
  
  // Route to fetch all posts
  app.get("/api/posts", async (req, res) => {
    try {
      // Logic to fetch posts from the database and send the response
      // Example:
      const posts = await PostModel.find({}).exec();
      res.status(200).json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch posts", error: error });
    }
  });
  app.post('/users/createPost', upload.single('image'), async (req, res) => {
    try {
      const post = req.body;
      const newPost = new PostModel(post);
  
      // If an image was uploaded, store its filename in the post
      if (req.file) {
        newPost.image = req.file.filename;
      }
  
      await newPost.save();
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: 'Failed to create post', error: error });
    }
  });
  

  

app.listen(port, () => {
    console.log("SERVER RUNS")
});


