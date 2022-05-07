import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.css"


const NotFound = () => {
    return (
           <div className='not-found'>
            <img src={'https://i.ibb.co/w4BTTVJ/404.jpg'} alt="" />
< p >
                <button>
                    <Link Link className = 'text-decoration-none text-white' to='/'
                > GO TO HOME PAGE </Link>
                </button>
           </p>
        </div>
    );
};

export default NotFound;