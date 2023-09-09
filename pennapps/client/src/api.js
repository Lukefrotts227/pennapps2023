import axios from 'axios'
const API_URL = 'http://localhost:5000';

export const createUser = async(user)=>{
    const response = await axios.post (`${API_URL}/users/createUser`, user);
    return response;
}
export const getUsers = async(email,password)=>{
    const response = await axios.get(`${API_URL}/users/getUsers/${email}/${password}`);
    return response;
}

export const createPost = async(post) => {
    const response =await axios.get(`${API_URL}/users/createPost`, post);
    return response;
}

export const getUser = async(email,password)=>{
    const response = await axios.get(`${API_URL}/users/getUser/${email}/${password}`);
    return response;
}
// Function to fetch all prompts
export const getPrompts = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/prompts`); // Assuming you have an /api/prompts endpoint
      return response;
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error to handle it in your component
    }
  };

  export const getPosts = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/posts`); // Assuming you have an /api/posts endpoint
      return response;
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error to handle it in your component
    }
  };