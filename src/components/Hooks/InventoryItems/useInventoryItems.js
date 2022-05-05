import React, { useEffect, useState } from 'react';

const useInventoryItems = () => {

    const [inventoryItems, setInventoryItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
        .then(res =>res.json())
       .then(data => setInventoryItems(data))
    },[])

    return [inventoryItems, setInventoryItems]
};

export default useInventoryItems;