import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NewArrivals from "./components/NewArrivals";
import ProductList from "./components/ProductList";
import Admin from "./components/Admin";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><NewArrivals /><ProductList /></>} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/home-improvements" element={<ProductList />} />
        <Route path="/gifts" element={<ProductList />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;