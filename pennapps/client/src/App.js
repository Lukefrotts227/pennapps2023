import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Post from './components/Post';
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path = "/Signup" element = {<Signup />} />
      <Route path="/Login" element={<Login />} />
      <Route path = "/Home" element={<Home />} />
      <Route path = "/Post" element={<Post />} />

    </Routes>
    </BrowserRouter>

  );
}

export default App;
