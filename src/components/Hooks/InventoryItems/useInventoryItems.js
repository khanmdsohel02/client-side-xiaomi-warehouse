import React, { useEffect, useState } from 'react';

const useInventoryItems = () => {

    const [inventoryItems, setInventoryItems] = useState([]);
    useEffect(() => {
        fetch('https://sleepy-mesa-71847.herokuapp.com/products')
        .then(res =>res.json())
       .then(data => setInventoryItems(data))
    },[])

    return [inventoryItems, setInventoryItems]
};

export default useInventoryItems;