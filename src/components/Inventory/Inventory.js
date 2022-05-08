import React from 'react';
import "./Inventory.css"
import useInventoryItems from '../Hooks/InventoryItems/useInventoryItems';
import Footer from '../shered/Footer/Footer';
import { Link } from 'react-router-dom';
import InventoryItem from '../InventoryItem/InventoryItem';


const Inventory = () => {

    const [inventoryItems, setInventoryItems] = useInventoryItems();
    const handleDelete = id => {
        const proceed = window.confirm('Are you Sure?');
        if (proceed) {
            const url = `https://sleepy-mesa-71847.herokuapp.com/product/${id}`;
            fetch(url, {
                method:'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = inventoryItems.filter(inventoryItem => inventoryItem._id !== id);
                    setInventoryItems(remaining)
            })
        }
    }

    return (
        <>
            <div className='items'>
                <h1> All<span> Inventory </span> Items</h1 >
                <div className="inventory-items">
                        {
                        inventoryItems.map(inventoryItem => < InventoryItem
                            key={inventoryItem._id}
                            inventoryItem={inventoryItem}
                            handleDelete={handleDelete}
                        />)
                        }
                </div>
                 < Link to = "/additem"  className='add-item'>< button >ADD Product</button></Link >
            </div>
            <Footer/>
        </>
    );
};

export default Inventory;