import { useContext } from "react";
import { Button, Carousel, Jumbotron } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import BattleCountContext from "../../context/battleCount";
import "./index.css";

const HomePage = () => {
  let {
    totalBattles: [value, updateTotal],
  } = useContext(BattleCountContext);

  return (
    <>
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
      {console.log(value)}
      {value && (
        <div style={{ padding: "20px" }}>
          <Jumbotron>
            <h1>Total battles: {value}</h1>
            <br />
            <p>
              <NavLink to="/battles">
                <Button variant="primary">View all battles</Button>
              </NavLink>
            </p>
          </Jumbotron>
        </div>
      )}
    </>
  );
};

export default HomePage;
