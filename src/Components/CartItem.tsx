import React, { useEffect, useState } from "react";
import { Badge, Button, Media } from "react-bootstrap";

const CartItem = () => {
  let [getState, setGetState] = useState<any>([]);
  let [totalPrice, setPrice] = useState<number>(0);
  let [qty, setQty] = useState<number>(1);


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

  const amount = getState.map((value:any)=>{
    return value.price
  })
  
  const total = amount.reduce((acc:any, initialValue:any)=> (acc+=initialValue),0)
  
  const addItem = (price:number) => {
    let totalValue = price + total;
    setPrice(totalValue)
    setQty((value)=> value+1)
  } 

  const delItem = (price:number) => {
    let totalValue = total - price;
    setPrice(totalValue)
    setQty((value)=> value-1)
  }

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
              <h5 style={{fontSize: '1rem', fontWeight: 'bold'}}>{product.title}</h5>
              <p style={{fontSize: '0.9rem'}}>Rs. {product.price}</p>
              <div className="d-flex align-items-center  flex-row">
                <Button style={{backgroundColor: '#fff', border: 'none', color: 'black', marginRight: 5}} onClick={()=>delItem(product.price)}>-</Button>
                <span style={{marginRight: 5, }}>{product.id && qty}</span>
                <Button style={{backgroundColor: '#fff', border: 'none', color: 'black'}} onClick={()=>addItem(product.price)}>+</Button>
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
      <div className="d-flex align-items-end flex-row" style={{padding: '20px 20px'}}>
        <p style={{fontWeight: 'bold'}}>Total: Rs. {total + totalPrice}</p>
      </div>
    </div>
  );
};

export default CartItem;
