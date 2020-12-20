import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import getLocationList from "../../services/battle/getLocationList";
import Search from "../search";
import "./index.css";

const Layout = ({ children, location }) => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    (async () => {
      let { status, value } = await getLocationList();

      if (status === "success") setLocations(value.data);
    })();
  }, []);

  return (
    <>
      <header>
        <Navbar
          bg="dark"
          className="nav-bar d-flex justify-content-between align-items-center">
          <NavLink to="/">
            <p className="brand-logo">GOT BattleZ</p>
          </NavLink>

          <Search options={locations} />
        </Navbar>
      </header>
      <div>{children}</div>
    </>
  );
};

export default Layout;
