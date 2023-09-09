import React from 'react'; 


function Post(){

    const handleSubmit = () => {


    }

    return(
        <div> 
        <form onSubmit = {handleSubmit}> 
        
        <input
        id = "title"
        name = "title"
        />

        </form> 

        </div> 

    );
}


export default Post; 