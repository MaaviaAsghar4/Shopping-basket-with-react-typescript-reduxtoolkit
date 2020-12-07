import React, { useEffect, useState } from "react";
import { Badge, Button, Media } from "react-bootstrap";
import { useSelector } from "react-redux";

const CartItem = () => {
  const basket = useSelector((state: any) => state.basket);
  console.log(basket);
  let [getState, setGetState] = useState<any>([]);

  useEffect(() => {
    const fetchRoute = async () => {
      try {
        const fetchItem = await fetch("http://localhost:3000/cartitem");
        const fetchResponse = await fetchItem.json();
        console.log(fetchResponse);
        setGetState((state: any) => {
          return fetchResponse;
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchRoute();
  }, []);
  console.log(getState);
  if (!getState.length) return <h1>No Items Yet</h1>;

  return (
    <div>
      <h1 className="text-center mt-5 mb-5">
        <Badge variant="primary">Cart</Badge>
      </h1>
      {getState?.map((product:any) => {
        return (
          <Media className="ml-3 mb-3 mr-3 p-3 border" key={product.id} >
            <Media.Body>
              <h5>{product.title}</h5>
              <p>{product.price}</p>
              <div className="d-flex align-items-start flex-row">
                <Button>-</Button>
                <span>1</span>
                <Button>+</Button>
              </div>
            </Media.Body>
            <img
              width={100}
              height={100}
              className="ml-3"
              src={product.imgURL}
              alt="Generic placeholder"
            />
          </Media>
        );
      })}
      <div className="d-flex align-items-end flex-row">
        <p>Total: 123</p>
      </div>
    </div>
  );
};

export default CartItem;
