import React from 'react';
import "./Inventory.css"
import useInventoryItems from '../Hooks/InventoryItems/useInventoryItems';
import InventoryItems from '../InventoryItems/InventoryItems';
import Footer from '../shered/Footer/Footer';
import { Link } from 'react-router-dom';

const Inventory = () => {

    const [inventoryItems, setInventoryItems] = useInventoryItems();
    
    return (
        <>
            <div className='items'>
                <h1> All<span> Inventory </span> Items</h1 >
                <div className="inventory-items">
                        {
                        inventoryItems.map(inventoryItem => < InventoryItems
                            key={inventoryItem._id}
                            inventoryItem={inventoryItem}
                        />)
                        }
                </div>
                 < Link to = "/additem"  className='add-item'>< button >ADD NEW</button></Link >
            </div>
            <Footer/>
        </>
    );
};

export default Inventory;