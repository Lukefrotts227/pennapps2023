import React, {useState} from 'react'; 


function Post(){    
    const [imageFile, setImageFile] = useState(null); 
    const [title, setTitle] = useState('')
    const [caption, setCaption] = useState('')

    const handleFileChange = () => {
        const selectedFile  = e.target.files[0]; 
        setImageFile(selectedFile); 
    }

    const handleTitleChange = (e) => { 

        setTitle(e.target.value); 

    }
    const handleCaptionChange = () => {
        setCaption(e.target.value); 

    }

    const handleSubmit = () => {
        e.preventDefault(); 

        if(imageFile){
            setImageFile(null); 
            setTitle(''); 
            setCaption(''); 
        }else{
            alert("DID NOT PROVIDE IMAGE!!!"); 
        }
    }


    return(
        <div> 
            <form onSubmit = {handleSubmit}>   
           
           
                <label htmlFor="title">Title:</label>

                <input
                    id = "title"
                    name = "title"
                    content = "text"     
                />
                <label htmlFor="caption">Caption:</label>
                <textarea 
                    id = "caption"
                    name = "caption"
                    content = "text"
                />

                <label htmlFor="imageFile">Upload Image:</label>   
                <input 
                    type = "file"
                    id = "image"
                    name = "image"
                    accept = "image/*"
                    onChange = {handleFileChange}
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
                <button type="submit"> Submit </button> 
                </form> 


        </div> 

    );
}

export default Post; 