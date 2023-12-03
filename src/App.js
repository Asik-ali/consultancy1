import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Services from "./Pages/Services";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Client from "./Pages/Client";
import Carrer from "./Pages/Carrer";
function App() {
  return (
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Client" element={<Client />} />
        <Route path="/Carrers" element={<Carrer />} />
      </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
