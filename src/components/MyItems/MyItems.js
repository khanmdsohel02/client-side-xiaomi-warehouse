import React, { useEffect, useState } from 'react';
import MyItem from '../MyItem/MyItem';
import './MyItems.css'
import UseFirebase from '../Hooks/usafirebase/Usefirebase';
import axios from 'axios'

const MyItems = () => {
    const [newItems, setNewItems] = useState([]);
     const { user } = UseFirebase();
    
      useEffect(() => {
               const email = user.email;
          const getMyItems = async () => {
              const url = `http://localhost:5000/myItems?email=${email}`;
              const { data } = await axios.get(url);
              setNewItems(data);
          }
        getMyItems()
       }, [user])

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
            })}}

    // useEffect(() => {
    //          const email = user?.email;
    //     fetch(`http://localhost:5000/myItems?email=${email}`)
    //         .then(res => res.json())
    //     .then(data => setNewItems(data))
    // }, [user])
  
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