import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    return (
        <>
              <Carousel>
              <Carousel.Item>
                    <img className="d-block w-100" src={"https://i.ibb.co/qs9Bz0L/banner1.png"} alt="banner1" />
                </Carousel.Item>
                
              <Carousel.Item>
                    <img className="d-block w-100" src={"https://i.ibb.co/dtnX1P2/banner2.png"} alt="banner2" />
                </Carousel.Item>
                
              <Carousel.Item>
                    <img className="d-block w-100" src={"https://i.ibb.co/pwj9D9b/banner3.png"} alt="banner3" />
                </Carousel.Item>
                
              <Carousel.Item>
                    <img className="d-block w-100" src={"https://i.ibb.co/W6k0Pff/banner4.png"} alt="banner4" />
                </Carousel.Item>
                
              <Carousel.Item>
                    <img className="d-block w-100" src={"https://i.ibb.co/vLfs4qZ/banner5.png"} alt="banner5" />
                </Carousel.Item>
                
              <Carousel.Item>
                    <img className="d-block w-100" src={"https://i.ibb.co/w4pxwhY/banner6.png"} alt="banner6" />
                </Carousel.Item>
                
              <Carousel.Item>
                    <img className="d-block w-100" src={"https://i.ibb.co/ByKZsjG/banner7.png"} alt="banner7" />
                </Carousel.Item>
                
                <Carousel.Item>
                    <img className="d-block w-100" src={"https://i.ibb.co/jZCb253/banner8.png"} alt="banner8" />
                </Carousel.Item>
            </Carousel>
           
        </>
    );
};

export default Banner;