import React from 'react';

const InventoryItem = ({inventoryItem, handleDelete}) => {

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
          < button onClick={() =>handleDelete(inventoryItem._id)} className='delete-btn'>DELETE</button>
            </div>
    );
};

export default InventoryItem;