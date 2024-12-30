import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Linkedin from "./components/Linkedin";
import Events from "./components/Events";
import Reports from "./components/Reports";

// Home component to contain all the main page content
const Home = () => (
  <>
    <Hero />
    <Stats />
    <Services />
    <Linkedin />
    <Testimonials />
    <ContactForm />
  </>
);

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/events" element={<Events />} />
       
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;