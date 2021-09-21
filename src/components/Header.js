import React from "react";
import { NavLink } from "react-router-dom";
import "../scss/Header.scss";

const Header = () => {
  return (
    <header>
      <div>
        <ul>
          <li>
            <NavLink className="nav" to="/" exact>
              {" "}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav" to="/products" exact>
              {" "}
              Products{" "}
            </NavLink>
          </li>
          <li>
            <NavLink className="nav" to="/cart" exact>
              {" "}
              Shoppin cart{" "}
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
