import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "../scss/Header.scss";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  let count = 0;

  cart.map((item) => {
    count += item.quantity;
    return count;
  });

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
              Shoppin cart ({count})
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
