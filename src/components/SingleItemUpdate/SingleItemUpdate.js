import React from 'react';
import { useParams } from 'react-router-dom';
import './SingleItemUpdate.css'

const SingleItemUpdate = () => {
    const { id } = useParams();
    
    return (
        <>
            <h1 className='my-5 '>Update This Item - {id}</h1>
             <div className='update-field'>
            <div className="img">

            </div>
            <div className="info">

            </div>
        </div>
        </>
    );
};

export default SingleItemUpdate;