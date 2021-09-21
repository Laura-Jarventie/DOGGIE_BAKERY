import React from "react";
import { Switch, Route } from "react-router-dom";
import home from "../pages/home";
import products from "../pages/products";
import cart from "../pages/Cart";
import "../scss/App.scss";

const Main = () => {
  return (
    <main className="App-header">
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/products" exact component={products} />
        <Route path="/cart" exact component={cart} />
      </Switch>
    </main>
  );
};

export default Main;
