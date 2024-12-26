import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Linkedin from "./components/Linkedin";

const App = () => (
  <div>
    <Navbar />
    <Hero />
    <Stats />
    <Services />
    <Linkedin/>
    <Testimonials />
    <ContactForm />
    <Footer />
  </div>
);

export default App;
