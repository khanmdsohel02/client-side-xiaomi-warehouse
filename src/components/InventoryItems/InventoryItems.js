import React from 'react';
import { Link } from 'react-router-dom';
import './InventoryItems.css'

const InventoryItems = ({inventoryItem}) => {
  
    const { img, name, price, quantity, supplier, about } = inventoryItem;

    return (
       <div className='single-item '>
            <img src={img} alt="" />
            <div className="info">
                <h3>{name}</h3>
               <h5><strong>Price :</strong> {price} Taka</h5>
                <h5><strong>Quantity :</strong> {quantity} pis</h5>
                <h5><strong>Supplier : </strong>{supplier}</h5>
                <p>{about}</p> 
            </div>
            < Link to = "/" >< button className='delete-btn'>DELETE</button></Link >
        </div>
    );
};

export default InventoryItems;