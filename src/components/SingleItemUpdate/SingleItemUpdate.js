import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleItemUpdate.css'

const SingleItemUpdate = () => {
    const { id } = useParams();

    const [product, setProduct] = useState([]);
console.log(product);
    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <>
            <h1 className='my-5 '>Update This Item</h1>
             <div className='update-section'>
                <div>
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
                <form>
                        < input type = "number"
                           name = 'stock'
                             placeholder = 'Stock Amount Write Here'
                             required />
                        <button>Delivered</button>
                </form>
            </div>
        </>
    );
};

export default SingleItemUpdate;