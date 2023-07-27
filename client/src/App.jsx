import { Heading } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>{/* <Route    / */}</Routes>
      </main>
    </Router>
  );
}
