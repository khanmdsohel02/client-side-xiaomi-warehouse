import React from 'react';
import "./HomeInventory.css";

const HomeInventory = ({ product }) => {
    const { img, name, price, quantity, supplier, about } = product;

    return (
        <div className='single-item'>
            <img src={img} alt="" />
            <div className="info">
                <h3>{name}</h3>
               <h5><strong>Price :</strong> {price} Taka</h5>
                <h5><strong>Quantity :</strong> {quantity} pis</h5>
                <h5><strong>Supplier : </strong>{supplier}</h5>
                <p>{about.slice(0,200)}  ......</p> 
            </div>
        <button className="update-btn" > UPDATE  INFO</button>
        </div>
    );
};

export default HomeInventory;