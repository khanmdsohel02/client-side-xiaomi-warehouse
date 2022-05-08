import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../shered/Footer/Footer';
import './SingleItemUpdate.css'

const SingleItemUpdate = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [newQuantity, setNewQuantity] = useState();

console.log(newQuantity);
    
console.log(product);
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data)
                setNewQuantity(data.quantity)
            })
    }, [])
    const handleStock = (event) => {
        event.preventDefault()
        const stockAmount = event.target.stock.value;
        const newStock = parseInt(newQuantity) + parseInt(stockAmount);
        setNewQuantity(newStock)
        event.target.stock.value = " ";
        
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
                    <h5><strong>Quantity: </strong> {product.quantity} Pis</h5>
                    <h5><strong>Supplier: </strong> {product.supplier}</h5>
                    <h5><strong>Sold: </strong>0 Pis</h5>
                    <p>{product.about?.slice(0, 400)}</p>
                       <button>Delivered</button>
                </div>
            </div>
            <div className="stock">
                <form  onSubmit = {handleStock} >
                        < input type = "number"
                           name = 'stock'
                             placeholder = 'Stock Amount Write Here'
                        required
                    className='stock-input'/>
                   <input type="submit" className='stock-btn' value="Restock" />
                </form>
            </div>
            < Link to="/manageinventories" className='manage-btn'> < button > Manage Inventories </button></Link >
            <Footer/>
        </>
    );
};

export default SingleItemUpdate;