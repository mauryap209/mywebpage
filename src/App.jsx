import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import "./App.css";
// import reactweb from "../img/reactweb.png";
// import education from "./img/education.png";    
// import nature from "./img/nature.png";
// import kids from "./img/kids.png";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home/>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
