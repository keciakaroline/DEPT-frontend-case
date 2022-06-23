import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import ScrollToTop from "./ScrollToTop";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Homepage />}></Route>
          {/* <Route exact path="/projects" element={<Homepage />}></Route>
          <Route exact path="/about" element={<Homepage />}></Route>
          <Route exact path="/contact" element={<Homepage />}></Route>
          <Route exact path="/" element={<Homepage />}></Route> */}
        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
