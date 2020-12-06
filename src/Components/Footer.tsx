import React from "react";
import {Jumbotron, Button, Row, Col,Container} from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <Jumbotron >
        <h1>Explore More Products</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
      </Jumbotron>
     <div className='bg-dark p-3 text-light'>
        Created by Maavia Asghar
     </div>
    </div>
  );
};

export default Footer;
