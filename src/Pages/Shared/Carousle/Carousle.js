import React from "react";
import Carousel from "react-bootstrap/Carousel";
import n1 from "../../../Assets/Images/n1.jpg";
import n2 from "../../../Assets/Images/n2.jpg";

const Carousle = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={n1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={n2} alt="Second slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousle;
