import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import "./Navigation.css"
import { Link } from "react-router-dom";
import UseFirebase from '../Hooks/usafirebase/Usefirebase';

const Navigation = () => {
   const { user, handleSignOut } = UseFirebase();
  return (
      
       <Navbar collapseOnSelect expand = "lg" className='navigated'>
  <Container>
          <Navbar.Brand as={Link}   to = "/" > < img src = {"https://i.ibb.co/fG4hsZK/logo.png"} alt = "Logo"/> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="mx-auto me-3 ps-5 menu-items">
      <Nav.Link as={Link} to="/home" className='item  '>HOME</Nav.Link>
      <Nav.Link as={Link} to="/inventory" className='item  '>INVENTORY</Nav.Link>
      <Nav.Link as={Link} to="/blog" className='item   '>MY BLOG</Nav.Link>
      
        {
                user?.uid?
                <b className='sign-out' onClick={handleSignOut}>Sign Out</b>:
                < Nav.Link as={Link} to="/login"
                    className='item' > LOGIN </Nav.Link>
              }
                <span className='user-name'>{ user?.displayName && user.displayName} </span>
    </Nav> 
  </Navbar.Collapse>
  </Container>
    </Navbar>
    );
};

export default Navigation;