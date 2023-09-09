import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Post from './components/Post'; 
import Prompt from './components/Prompt'; 
import OtherPosts from './components/OtherPosts'; 
import Home from './components/Home'; 

//import './PixelArtBackground.css';

function App() {
  return (

    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path = "/Signup" element = {<Signup />} />
      <Route path="/Login" element={<Login />} />

      <Route path="/Post" element={<Post />} />
      <Route path="/Prompt" element={<Prompt />} />
      <Route path="/OtherPosts" element={<OtherPosts />} />
      <Route path="/Home" element ={<Home/>} />


    </Routes>
    </BrowserRouter>

  );
  
  
}

export default App;