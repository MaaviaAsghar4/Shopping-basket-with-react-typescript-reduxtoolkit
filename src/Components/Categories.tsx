import React from "react";
import { Badge, Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const Categories = () => {
  const basket = useSelector((state: any) => state.basket);
  const newBasket = basket.slice(0, 4);

  const getProduct = (product:any):any => {
    console.log(product)
    fetch('/cartitem', {
      method: 'POST',
      body: JSON.stringify(product)
    })
  }

  return (
    <div>
      <h1 className="text-center mt-5 mb-5">
        <Badge variant="primary">Products</Badge>
      </h1>
      <Container>
        <Row>
          {newBasket.map((product: any) => {
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

export default Categories;
