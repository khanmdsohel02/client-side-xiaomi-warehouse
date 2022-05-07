import React from 'react';
import "./AboutUs.css"
import Footer from '../shered/Footer/Footer'

const AboutUs = () => {
    return (
        <>
              <div className='about'>
            <h1 className='text-center py-5 text-white'>AboutUs</h1>
            <h3 className='text-center mb-5 text-white'>MAKING QUALITY TECHNOLOGY
                ACCESSIBLE TO EVERYONE.</h3>
            <p className='text-white text-capitalize text-center p-5 fs-5'>Xiaomi Corporation was founded in April 2010 and listed on the Main Board of the Hong Kong Stock Exchange on July 9, 2018 (1810.HK).Xiaomi is a consumer electronics and smart manufacturing company with smartphones and smart hardware connected by an IoT platform at its core. <br /> <br /> Embracing our vision of “Make friends with users and be the coolest company in the users’ hearts”, Xiaomi continuously pursues innovations,  <br /> <br /> high-quality user experience and operational efficiency. The company relentlessly builds amazing products with honest prices to let everyone in the world enjoy a better life through innovative technology.  <br /> <br /> Xiaomi is one of the world's leading smartphone companies. The company’s market share in terms of smartphone shipments ranked no. 3 globally in the fourth quarter of 2021.The company has also established the world’s leading consumer AIoT (AI+IoT) platform, more than 434 millionsmart devices connected to its platform (excluding smartphones and laptops) as of December 31, 2021, excluding smartphones and laptops.  <br /> <br /> Xiaomi products are present in more than 100 countries and regions around the world.  <br /> <br /> In August 2021, the company made the Fortune Global 500 list for the third time, ranking 338th, up 84 places compared to 2020. <br /> <br />   Xiaomi is a constituent of the Hang Seng Index, Hang Seng China Enterprises Index, Hang Seng TECH Index and Hang Seng China 50 Index.</p>
        </div>
        <div className='bg-img'>
                <h1 className='text-center text-white py-5'>CAREERS</h1>
                <p className='text-capitalize text-center p-5 fs-5 text-white'>Xiaomi is focused on being the most user-centric mobile internet company, and we aimto constantly exceed expectations through innovations in software, hardware and services.Many of our employees were initially fans of Mi products, before they decided to join us. Our team isnot only passionate about technology, but also relentlessly pursues perfection to break tradition andpush boundaries, all just to ensure that our products remain unique and offer an unparalleled user experience.</p>
            </div>
            <Footer/>
        </>
    );
};

export default AboutUs;