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
    const [ products, setProducts ] = useState([]);
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    
    return (
        <>
            <Banner />
            <div className='items'>
                <h1><span> Inventory </span> Items</h1 >
                <div className="inventory-items">
                        {
                        products.map(product => < HomeInventory
                            key={product.id}
                            product={product}
                        />)
                        }
                </div>
               < Link to = "/manageinventories"  className='manage-inventories'> < button > Manage Inventories </button></Link >
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
            <div className='review-bg'>
               <h1 className='title'>Dealer Review</h1>
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
                            )
                        }
                        )
                    }
                </Swiper>
            </div>
            <Footer/>
        </>
    );
};

export default Home;