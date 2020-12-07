import React from "react";
import {Jumbotron, Button} from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <Jumbotron >
        <h1>Explore More Products</h1>
        <p>
          Visit the store to explore more products and get amazing discount on each one.
        </p>
        <p>
          <Button variant="primary">Visit store</Button>
        </p>
      </Jumbotron>
     <div className='bg-dark p-3 text-light'>
        Created by Maavia Asghar
     </div>
    </div>
  );
};

export default Footer;
