import React, {useState} from 'react';
import {getUser} from './src/api';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Style.css';


function Home(){


    return(<div>
        <h1> This is the Home Screen </h1>
    </div>);
}

export default Home; 