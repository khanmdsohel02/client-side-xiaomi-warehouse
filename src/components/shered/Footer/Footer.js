import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer1">
                <div >
                    <img src={'https://i.ibb.co/fG4hsZK/logo.png'} alt="" />
                    <h4 className='ps-4'>Payment Methods</h4>
                    <img src={"https://i.ibb.co/cwypqRg/methods.png"} alt=""/>
                </div>
                <div>
               <Link to="/about" > <li>About Us</li></Link>
                   <Link to="/contact"><li>Contact Us</li></Link>
                    <h6> Follow Us On Social Media </h6>
              <a  href = {"https://www.facebook.com/"} target="_blank" rel="noopener noreferrer"><li>FaceBook</li></a>
                <a href={"https://twitter.com/"} target="_blank" rel="noopener noreferrer"><li>Twitter</li></a>
                   <a href={"https://www.youtube.com/"} target="_blank" rel="noopener noreferrer"> <li>YouTube</li></a>
                    <a href={"https://www.instagram.com/"} target="_blank" rel="noopener noreferrer"><li>Instagram</li></a>
                </div>
                <div className='time'>
                    <h4>Opening Hours</h4>
                    <p className='text-white'><strong className='text-white'>Sunday - Thursday :</strong>   24 Hour</p>
                    <p className='text-white'><strong className='text-white'>Friday :</strong> close</p>
                    < p className='text-white' > <strong className='text-white'>Saturday :</strong>  10.00 am to 05.00 pm</p >
                </div>
            </div>
            <p className='copy-right'>Copyright © 2022 xiaomi-warehouse.com</p>
        </div>
    );
};

export default Footer;