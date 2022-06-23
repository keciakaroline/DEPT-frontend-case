import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import ScrollToTop from "./ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [click, setClick] = useState(false);

  return (
    <>
      <Navbar click={click} setClick={setClick} />
      <ScrollToTop>
        <Routes>
          {/* <Route exact path="/" element={<Homepage />}></Route> */}
          {/* <Route exact path="/projects" element={<Homepage />}></Route>
          <Route exact path="/about" element={<Homepage />}></Route>
          <Route exact path="/contact" element={<Homepage />}></Route>
          <Route exact path="/" element={<Homepage />}></Route> */}
        </Routes>
        <Footer />
      </ScrollToTop>
    </>
  );
}

export default App;
