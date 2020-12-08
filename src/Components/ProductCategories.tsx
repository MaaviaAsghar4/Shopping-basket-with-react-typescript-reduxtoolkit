import React from "react";
import { Badge, Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../Store/Reducer/cartReducer";
import {productType} from '../types/type'

const ProductCategories = () => {
  const dispatch = useDispatch()
  const basket: productType[] = useSelector((state: any) => state.basket);
  const getProduct = (product:productType):void => {
    alert(`${product.title} added to the cart`)
    dispatch(addItem(product))
    // fetch('/api/cartitem', {
    //   method: 'POST',
    //   body: JSON.stringify(product)
    // })
  }
  return (
    <div>
      <h1 className="text-center mt-5 mb-5">
        <Badge variant="primary">Products</Badge>
      </h1>
      <Container>
        <Row>
          {basket.map((product: productType) => {
            return (
              <Col sm={6} md={4} className="mb-3" key={product.id}>
                <Card>
                  <Card.Img
                    variant="top"
                    height={140}
                    style={{
                      padding: "5px 5px",
                      width: "140px",
                      margin: "0 auto",
                    }}
                    src={product.imgURL}
                  />
                  <Card.Body>
                    <Card.Title style={{fontSize: '1rem', fontWeight: 'bold'}}>{product.title}</Card.Title>
                    <Card.Text style={{fontSize: '0.8rem'}}>
                      {product.description.substring(0, 30)}...
                    </Card.Text>
                    <Button variant="primary" onClick={()=>getProduct(product)}>Add to Cart</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ProductCategories;
