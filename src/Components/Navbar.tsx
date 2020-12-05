import React from "react";
import {Navbar, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand className='text-light' href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle className='bg-light' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className='text-light'><Link style={{textDecoration: 'none', color: "#f7f7f7"}} to='/'>Home</Link></Nav.Link>
            <Nav.Link className='text-light'><Link style={{textDecoration: 'none', color: "#f7f7f7"}} to='/product'>Product</Link></Nav.Link>
            <Nav.Link className='text-light'><Link style={{textDecoration: 'none', color: "#f7f7f7"}} to='/cart'>Cart</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
