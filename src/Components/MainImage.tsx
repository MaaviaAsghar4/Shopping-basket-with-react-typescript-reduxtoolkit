import React from "react";
import {Carousel} from 'react-bootstrap'
import banner1 from '../Assets/banner1.jpg'
import banner2 from '../Assets/banner2.jpg'

const MainImage: React.FC<{}> = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            height={300}
            src={banner1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            height={300}
            src={banner2}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MainImage;
