import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPrompts, getPosts } from '../api'; // Assuming you have API functions to fetch prompts and posts.
import Minibar from './Minibar';
function Home() {
  const [prompts, setPrompts] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch Prompts
        const promptsResponse = await getPrompts();
        const promptsData = promptsResponse.data; // Assuming your API returns an array of prompts.

        // Fetch Posts
        const postsResponse = await getPosts();
        const postsData = postsResponse.data; // Assuming your API returns an array of posts.

        // Set state
        setPrompts(promptsData);
        setPosts(postsData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {/* Display Prompts */}
      <div>
      <Minibar />
        <h2>Prompts</h2>
        <ul>
          {prompts.map((prompt) => (
            <li key={prompt._id}>
              <h3>{prompt.title}</h3>
              <p>{prompt.content}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Display Posts */}
      <div>
        
        <h2>Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post._id}>
              <h3>{post.name}</h3>
              <p>{post.description}</p>
              {/* You can render other post details here */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
