import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import Default from "./components/Default";
import Cart from "./components/Cart";
import Details from "./components/Details";

function App() {
  return (
    <React.Fragment>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<ProductList />} />
        <Route exact path="/details" element={<Details />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
