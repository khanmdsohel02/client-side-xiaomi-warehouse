import React, { useEffect, useState } from 'react';
import MyItem from '../MyItem/MyItem';
import './MyItems.css'

const MyItems = () => {
  const [newItems, setNewItems] = useState([]);

   const handleDelete = id => {
        const proceed = window.confirm('Are you Sure?');
        if (proceed) {
            const url = `http://localhost:5000/myItem/${id}`;
            fetch(url, {
                method:'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = newItems.filter(item => item._id !== id);
                    setNewItems(remaining)
            })
        }
    }

    useEffect(() => {
        fetch('http://localhost:5000/myItems')
            .then(res => res.json())
        .then(data => setNewItems(data))
    }, [])

    return (
        <div  className = "my-items" >
            <h1>My Items</h1>
            <div  className = "inventory-items" >
          {
            newItems.map(item => <MyItem
              key={item._id}
              item={item}
              handleDelete= {handleDelete}
            />)
           }
            </div>
        </div>
    );
};

export default MyItems;