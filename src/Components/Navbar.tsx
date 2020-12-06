import React from "react";
import {Navbar, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";

const Navigation: React.FC<{}> = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand className='text-light' >Sell Phone</Navbar.Brand>
        <Navbar.Toggle className='bg-light' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto m-3">
            <Link className='text-light text-center mb-2 mr-3 font-weight-bold' style={{textDecoration: 'none', color: "#f7f7f7"}} to='/'>Home</Link>
            <Link className='text-light text-center mb-2 mr-3 font-weight-bold' style={{textDecoration: 'none', color: "#f7f7f7"}} to='/product'>Product</Link>
            <Link className='text-light text-center mb-2 mr-3 font-weight-bold' style={{textDecoration: 'none', color: "#f7f7f7"}} to='/cart'>Cart</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
