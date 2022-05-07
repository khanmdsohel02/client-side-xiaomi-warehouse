import React, { useEffect, useState } from 'react';
import './AddItem.css'
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import UseFirebase from '../Hooks/usafirebase/Usefirebase';

const AddItem = () => {
      const  { user}  = UseFirebase();
    const { register, handleSubmit } = useForm();

    console.log(user.email);
    console.log(user);

    const onSubmit = data => {
        console.log(data)
        const url = 'http://localhost:5000/product' && 'http://localhost:5000/myItems';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                const data = result;
                if (data) {
                    toast.success("Successfully Added ", { id: "success" });
                }})}
  

    return (
        <>
            <h1 className='mt-5 text-center text-danger'> Add Item</h1>
            <form onSubmit={handleSubmit(onSubmit)}  className= 'add-item' >
                 <input value={user.email}    {...register("email")} disabled/>
                 <input placeholder='Product Name' {...register("name")} />
                <input placeholder='Price' type="number" {...register("price")} />
                <input placeholder='Quantity' type="number" {...register("quantity")} />
                 <input placeholder='Supplier Name' {...register("supplier")} />
                 <input placeholder='Image URL' {...register("img")} />
                 <textarea placeholder='About Product' {...register("about")} />
                    <button>Add Product</button>
                </form>
        </>
    );
};

export default AddItem;