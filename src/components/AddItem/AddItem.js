import React from 'react';
import './AddItem.css'
import { useForm } from "react-hook-form";

const AddItem = () => {
     const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = 'http://localhost:5000/product';
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
            })
  }
    return (
        <>
            <h1 className='mt-5'> Add Item</h1>
            <form onSubmit={handleSubmit(onSubmit)}  className= 'add-item' >
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