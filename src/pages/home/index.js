import { Carousel } from "react-bootstrap";
import "./index.css";

const HomePage = () => {
  return (
    <Carousel className="banner">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/banner1.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/banner2.jpg"
          alt="second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/banner3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default HomePage;
