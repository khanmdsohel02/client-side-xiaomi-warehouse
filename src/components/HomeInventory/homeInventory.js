import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./HomeInventory.css";

const HomeInventory = ({ product }) => {
    const {_id, img, name, price, quantity, supplier, about } = product;
    const navigate = useNavigate()

    const navigateToItemDetails = id => {
        navigate(`/detailupdate/${id}`);
}

    return (
        <div className='single-item'>
            <img src={img} alt="" />
            <div className="info">
                <h3>{name}</h3>
               <h5><strong>Price :</strong> {price} Taka</h5>
                <h5><strong>Quantity :</strong> {quantity} pis</h5>
                <h5><strong>Supplier : </strong>{supplier}</h5>
                <p>{about.slice(0, 150)}  ......</p> 
            </div>
   <button onClick={()=>navigateToItemDetails(_id)} className="update-btn" > UPDATE  INFO</button>
        </div>
    );
};

export default HomeInventory;