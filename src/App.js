import { Routes, Route } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import ScrollToTop from "./ScrollToTop";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import FormContact from "./components/FormContact";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          <Route exact path="/contact" element={<FormContact />}></Route>
          {/* <Route exact path="/projects" element={<Homepage />}></Route>
          <Route exact path="/about" element={<Homepage />}></Route>
          <Route exact path="/" element={<Homepage />}></Route> */}
        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
