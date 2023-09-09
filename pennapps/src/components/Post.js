import React, {useState} from 'react';
import {getUsers} from '../api';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Style.css';


function Post(){

    const [title, setTitle] = useState('');
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);


    const handleTitleChange = (e) => {
        setTitle(e.target.value); 
    }

    const handleCaptionChange = (e) => {
        setCaption(e.target.value); 
    }

    const handleImageChange = (e) => {
        // Get the selected file from the input
        const selectedImage = e.target.files[0];
        setImage(selectedImage);
      };


    const handleSubmit = (e) => {
        setTitle(''); 
        setCaption(''); 
        setImage(null);
    }

    return(<div>

        <form onSubmit = {handleSubmit}> 
        <input 
            type = "text"
            id = "title"
            name = "title"
            value ={title}
            onChange = {handleTitleChange}
            required
        />
        <label htmlFor="content">Content:</label>
        <textarea 
            type = "text"
            id = "catption"
            name = "caption"
            value = {caption}
            onChange = {handleCaptionChange}
            required

        />

        <label htmlFor="image">Image:</label>
        <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />        
        
            
        </form> 
        <button type="submit">Submit</button>
         
         </div> ); 
}; 

export default Post