import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import getBattleCount from "../../services/battle/getCount";
import { Navbar, InputGroup, FormControl } from "react-bootstrap";
import "./index.css";

const Layout = ({ children, location }) => {
  useEffect(() => {
    (async () => {
      let res = getBattleCount();
    })();
  }, []);

  return (
    <>
      <header>
        <Navbar
          bg="dark"
          className="d-flex justify-content-between align-items-baseline">
          <p className="brand-logo">GOT BattleZ</p>

          <InputGroup className="nav__item">
            <FormControl
              placeholder="Search battles"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              list="locations"
              //   onChange={(ev) => console.log(ev.target.value)}
            />

            {/* <InputGroup.Append>
              <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
            </InputGroup.Append> */}
          </InputGroup>
          <datalist id="locations">
            <option
              onClick={(ev) => {
                console.log(ev.target);
              }}
              value="U.S."
            />
            <option value="France" />
            <option value="China" />
            <option value="Cambodia" />
            <option value="Chile" />
            <option value="Canada" />
            <option value="Poland" />
          </datalist>

          {/* <NavLink to="/battles">Total 38</NavLink> */}
        </Navbar>
      </header>
      <div>{children}</div>
    </>
  );
};

export default Layout;
