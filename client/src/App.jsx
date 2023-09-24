import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Faq from "./components/FAQ/Faq";
import Appointment from "./components/Appointment/Appointment";
import ScrollToTop from "./utils/ScrollToTop";
import { Toaster } from "react-hot-toast";
import Donation from "./components/Donation/Donation";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/donation" element={<Donation />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <Toaster />
    </Router>
  );
};

export default App;
