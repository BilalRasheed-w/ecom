import { Heading } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductsScreen from "./screens/ProductsScreen";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/products" element={<ProductsScreen />} />
        </Routes>
      </main>
    </Router>
  );
}
