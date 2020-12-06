import React from "react";
import { Badge, Button, Media } from "react-bootstrap";

const CartItem = () => {
  return (
    <div>
      <h1 className="text-center mt-5 mb-5">
        <Badge variant="primary">Cart</Badge>
      </h1>
      <Media className='ml-3 mr-3 pr-3'>
        <Media.Body>
          <h5>Media Heading</h5>
          <p>Price</p>
          <div className='d-flex align-items-start flex-row'>
            <Button>-</Button>
            <span>1</span>
            <Button>+</Button>
          </div>
        </Media.Body>
        <img
          width={64}
          height={64}
          className="ml-3"
          src="holder.js/64x64"
          alt="Generic placeholder"
        />
      </Media>
      <div className='d-flex align-items-end flex-row'>
        <p>Total: 123</p>
      </div>
    </div>
  );
};

export default CartItem;
