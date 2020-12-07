import React from "react";
import { Badge, Container, Row, Col, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const Categories = () => {
  const basket = useSelector((state: any) => state.basket);
  const newBasket = basket.slice(0, 4);

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
                  <Card.Img variant="top" height={200} style={{ backgroundPosition: 'contain'}} src={product.imgURL} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                      {product.description.substring(0,30)}...
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
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
