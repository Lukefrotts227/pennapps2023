// import React, { useState } from 'react';
// import Minibar from './Minibar';
// import { createPost } from '../api';
// import { useNavigate } from 'react-router-dom';

// function Post() {
//   const [imageFile, setImageFile] = useState(null);
//   const [title, setTitle] = useState('');
//   const [caption, setCaption] = useState('');

//   const nav = useNavigate();

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setImageFile(selectedFile);
//   }

//   const handleTitleChange = (e) => {
//     setTitle(e.target.value);
//   }

//   const handleCaptionChange = (e) => {
//     setCaption(e.target.value);
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (imageFile) {
//       try {
//         const formData = new FormData();
//         formData.append('title', title);
//         formData.append('caption', caption);
//         formData.append('image', imageFile);

//         const response = await createPost(formData);
//         if (response.status === 200) {
//           nav('/Home');
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     } else {
//       alert("DID NOT PROVIDE IMAGE!!!");
//     }
//   }

//   return (
//     <div>
//       <Minibar />
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="title">Title:</label>
//         <input
//           id="title"
//           name="title"
//           value={title}
//           onChange={handleTitleChange}
//         />
//         <label htmlFor="caption">Caption:</label>
//         <textarea
//           id="caption"
//           name="caption"
//           value={caption}
//           onChange={handleCaptionChange}
//         />
//         <label htmlFor="imageFile">Upload Image:</label>
//         <input
//           type="file"
//           id="image"
//           name="image"
//           accept="image/*"
//           onChange={handleFileChange}
//           required
//         />
//         {imageFile && (
//           <div>
//             <img
//               src={URL.createObjectURL(imageFile)}
//               alt="Selected"
//               style={{ maxWidth: '100%', maxHeight: '300px' }}
//             />
//           </div>
//         )}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default Post;


import React, { useState } from 'react';
import Minibar from './Minibar';
import { createPost } from '../api';
import { useNavigate } from 'react-router-dom';

function Post() {
  const [imageFile, setImageFile] = useState(null);
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');

  const nav = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setImageFile(selectedFile);
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (imageFile) {
      try {
        const post = new FormData();
        post.append('title', title);
        post.append('caption', caption);
        post.append('image', imageFile);

        const response = await createPost(post);
        if (response.status === 200) {
          nav('/Home');
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("DID NOT PROVIDE IMAGE!!!");
    }
  }

  return (
    <div>
      <Minibar />
      <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          value={title}
          onChange={handleTitleChange}
        />
        <label htmlFor="caption">Caption:</label>
        <textarea
          id="caption"
          name="caption"
          value={caption}
          onChange={handleCaptionChange}
        />
        <label htmlFor="imageFile">Upload Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
          required
        />
        {imageFile && (
          <div>
            <img
              src={URL.createObjectURL(imageFile)}
              alt="Selected"
              style={{ maxWidth: '100%', maxHeight: '300px' }}
            />
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Post;
