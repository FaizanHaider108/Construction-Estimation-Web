import React from "react";
import "./Home.css";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import About from "../Components/About/About";
import HaveAnyQuestion from "../Components/HaveAnyQuestion/HaveAnyQuestion";
import Services from "../Components/Services/Services";
import Benefits from "../Components/Benefits/Benefits";
import Projects from "../Components/Projects/Projects";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <HaveAnyQuestion />
      <Services />
      <Benefits />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
