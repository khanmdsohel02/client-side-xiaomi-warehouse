import React from 'react';
import "./Contact.css"
import Footer from '../shered/Footer/Footer';


const Contact = () => {
    return (
        <>
        <div className='contact'>
            <h3>Contact Us</h3>
            <div className="contact-form">
                <form>
                    <input type="text" name="name" placeholder='Your Full Name' required />
                    <input type="number" name="ph Number" placeholder='Your Phone Number' required />
                    <input type="email" name="email" placeholder='Your Email' required />
                    <textarea name="" rows="7" placeholder='Say Somthing' required></textarea>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
            <Footer />
            </>
    );
};

export default Contact;