import React, { useEffect, useState } from "react";
import { Badge, Button, Media } from "react-bootstrap";

const CartItem = () => {
  let [getState, setGetState] = useState<any>([]);

  useEffect(() => {
    const fetchRoute = async () => {
      try {
        const fetchItem = await fetch("/api/cartitem");
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

  const amount = getState.map((value: any) => {
    return value.price;
  });

  const total = amount.reduce(
    (acc: any, initialValue: any) => (acc += initialValue),
    0
  );

  const deleteProduct = (id:number) => {
    setGetState(getState.filter((product: any)=> product.id !== id))
  }


  if (!getState.length)
    return (
      <h1 style={{ textAlign: "center", fontSize: "1.2rem" }}>
        No Items Yet...
      </h1>
    );

  return (
    <div>
      <h1 className="text-center mt-5 mb-5">
        <Badge variant="primary">Cart</Badge>
      </h1>
      {getState?.map((product: any, index: number) => {
        return (
          <Media className="ml-3 mb-3 mr-3 p-3 border" key={product.id}>
            <Media.Body>
              <h5 style={{ fontSize: "1rem", fontWeight: "bold" }}>
                {product.title}
              </h5>
              <p style={{ fontSize: "0.9rem" }}>Rs. {product.price}</p>
              <p>{product.description}</p>
              <Button onClick={()=>deleteProduct(product.id)}>Delete</Button>
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
      <div
        className="d-flex align-items-end flex-row"
        style={{ padding: "20px 20px" }}
      >
        <p style={{ fontWeight: "bold" }}>Total: Rs. {total}</p>
      </div>
    </div>
  );
};

export default CartItem;
