import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import "./Home.css"
import { Link } from "react-router-dom";
 import HomeInventory from '../HomeInventory/HomeInventory';
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Footer from '../shered/Footer/Footer';


const Home = () => {
    const [reviews, setReviews] = useState([]);
    const [pages, setPages] = useState(0);
    const [page, setpage] = useState(0);
    const [showProducts, setShowProducts] = useState(6);
    const [inventoryItems, setInventoryItems] = useState([]);

    useEffect(() => {
        fetch(`https://sleepy-mesa-71847.herokuapp.com/products?page=${page}&showProducts=${showProducts}`)
        .then(res =>res.json())
       .then(data => setInventoryItems(data))
    }, [page, showProducts])

    useEffect(() => {
        fetch('https://sleepy-mesa-71847.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    
    useEffect(() => {
        fetch('https://sleepy-mesa-71847.herokuapp.com/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const totalPage = Math.ceil(count / 6);
                setPages(totalPage)
        })
    }, [])

    return (
        <>
            <Banner />
            <div className='items'>
                <h1><span> Inventory </span> Items</h1 >
                <div className="inventory-items">
                        {
                        inventoryItems.map(product => < HomeInventory
                            key={product._id}
                            product={product}
                        />
                        )  
                    }  
                </div>
                    <div className = 'pagination' >
                        {
                        [...Array(pages).keys()].map(number => <button
                            className ={page=== number ? 'btn-select': ' '}
                            onClick={()=>setpage(number)}
                        >{number + 1}</button>)
                    }
                    </div>
             
               < Link to = "/manageinventories"  className='manage-btn'> < button > Manage Inventories </button></Link >
            </div>
            <div className='count'>
                <div className='counter'>
                    <strong>40000+</strong>
                    <h5>Total product's</h5>
                </div>
               <div  className = 'counter' >
                    <strong>450+</strong>
                    <h5>Total Dealer's</h5>
                </div>
               <div  className = 'counter' >
                    <strong>750+</strong>
                    <h5>Register User's</h5>
                </div>
              <div  className = 'counter' >
                    <strong>650+</strong>
                    <h5>Active User's</h5>
                </div>
                
            </div>
            <div className='review'>
               <h1 className='title text-center text-danger'>Dealer Review</h1>
                < Swiper  modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
                    {
                        reviews.map(({ img, name, date, about }) => {
                            return (
                               < SwiperSlide className = 'reviews' >
                               <div className="dealer-img">
                                  <img src={img} alt="client" />
                                </div>
                                 <div className="dealer-review">
                                      <h3>{name}</h3>
                                      <p>{about}</p>
                                      <small>{ date}</small>
                                 </div>
                                </SwiperSlide>
                            ) } ) }
                </Swiper>
            </div>
            <Footer/>
        </>
    );
};

export default Home;