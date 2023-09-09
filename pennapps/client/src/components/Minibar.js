import React from 'react'; 
import {Link} from 'react-router-dom'; 

const Minibar = () => {


    return (
        <nav>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Post">About</Link></li>
          </ul>
        </nav>
      );
}

export default Minibar; 
