import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import "./Home.css"
import { Link } from "react-router-dom";
 import HomeInventory from '../HomeInventory/HomeInventory';


const Home = () => {
    const [ products, setProducts ] = useState([]);
  
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    
    return (
        <>
            <Banner />
            <div className='items'>
                <h1><span> Inventory </span> Items</h1 >
                <div className="inventory-items">
                        {
                        products.map(product => < HomeInventory
                            key={product.id}
                            product={product}
                        />)
                        }
            </div>
            </div>
            <div className='count'>
                <div className="total-produect">

                </div>
                <div className="total-dealers">

                </div>
                <div className="total-user">

                </div>
                <div className="active-user">

                </div>
            </div>
            
        </>
    );
};

export default Home;