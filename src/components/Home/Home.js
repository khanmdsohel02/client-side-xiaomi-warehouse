import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import "./Home.css"
import {
    Link
} from "react-router-dom";
import useHomeInventory from '../Hooks/useHomeInventory';

const Home = () => {
    const [ products, setProducts ] = useState([]);
  
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
       
    const [products] = useHomeInventory();
    return (
        <>
            <Banner />
            <div className='items'>
                <h1>Inventory Items</h1>
                <div className="inventory-items">
                        {
                            products.map()
                        }
            </div>
            </div>
            
        </>
    );
};

export default Home;