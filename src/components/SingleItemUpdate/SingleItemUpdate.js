import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import Footer from '../shered/Footer/Footer';
import './SingleItemUpdate.css'

const SingleItemUpdate = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [newStock, setNewStock] = useState([product.quantity])
    

        
    useEffect(() => {
        const url = `https://sleepy-mesa-71847.herokuapp.com/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
            })
    }, [])

   const handleStock = event => {
        event.preventDefault()
       const quantity = event.target.stock.value
       const newQuantity = parseInt(quantity) + parseInt(product.quantity)
      setNewStock(newQuantity);
      console.log(newQuantity);
        
       const newAddedQuantity = { quantity }
           const url = `https://sleepy-mesa-71847.herokuapp.com/product/${id}`
 fetch(url, {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newAddedQuantity)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                const data = result;
                if (data) {
                    toast.success("Successfully Update ", { id: "success" });
                    event.target.reset()
                }
            })
   }

    return (
        <>
            <h1 className='my-5 text-center text-danger'>Update This Item</h1>
             <div className='update-section'>
                <div className='img'>
                    <img src={product.img} alt=""/>
            </div>
                <div className="product-info">
                    <h2>{product.name}</h2>
                    <h5><strong>Price: </strong> {product.price} Taka</h5>
                    <h5><strong>Quantity: </strong> {newStock} Pis</h5>
                    <h5><strong>Supplier: </strong> {product.supplier}</h5>
                    <h5><strong>Sold: </strong>0 Pis</h5>
                    <p>{product.about?.slice(0, 400)}</p>
                       <button>Delivered</button>
                </div>
            </div>
            <div className="stock">
                <form  onSubmit = {handleStock}>
                        < input type = "number"
                           name = 'stock'
                             placeholder = 'Stock Amount Write Here'
                        required
                    className='stock-input'/>
                   <input type="submit" className='stock-btn' value="ReStock" />
                </form>
            </div>
            < Link to="/manageinventories" className='manage-btn'> < button > Manage Inventories </button></Link >
            <Footer/>
        </>
    );
};

export default SingleItemUpdate;