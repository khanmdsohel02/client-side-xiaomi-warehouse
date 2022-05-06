import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "./Navigation.css"
import { Link } from "react-router-dom";
import UseFirebase from '../Hooks/usafirebase/Usefirebase';

const Navigation = () => {
   const { user, handleSignOut } = UseFirebase();
  return (
      
       <Navbar  collapseOnSelect expand = "lg"
       className = 'navigated' sticky='top'>
  <Container>
          <Navbar.Brand as={Link}   to = "/" > < img src = {"https://i.ibb.co/fG4hsZK/logo.png"} alt = "Logo"/> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
     <Nav className="mx-auto me-3 ps-5 menu-items">
      <Nav.Link as={Link} to="/home" className='item  '>HOME</Nav.Link>
      <Nav.Link as={Link} to="/inventory" className='item  '>INVENTORY</Nav.Link>
      <Nav.Link as={Link} to="/blog" className='item'>MY BLOG</Nav.Link>
      
        {
                user?.uid?
                  <NavDropdown  className = 'user-name'
                  title = {
                    user ?.displayName && user.displayName
                  }
                id = "collasible-nav-dropdown" >
        <NavDropdown.Item className='text-center dropdown-item' as={Link} to="/manageInventories">MANAGE ITEMS</NavDropdown.Item>
        <NavDropdown.Item  className='text-center dropdown-item' as={Link} to="/additems">ADD ITEMS</NavDropdown.Item>
        <NavDropdown.Item className='text-center dropdown-item' as={Link} to="/myitems">MY ITEMS</NavDropdown.Item>
        <NavDropdown.Item  className='text-center dropdown-item' as={Link} to="/login" onClick={handleSignOut}>SIGN OUT</NavDropdown.Item>
      </NavDropdown>:
                < Nav.Link as={Link} to="/login"
                    className='item' > LOGIN </Nav.Link>
              }
    </Nav> 
  </Navbar.Collapse>
  </Container>
    </Navbar>
    );
};

export default Navigation;