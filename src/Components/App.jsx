import React from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Shop from "./Shop";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/*" element={<Home />} />

          
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
