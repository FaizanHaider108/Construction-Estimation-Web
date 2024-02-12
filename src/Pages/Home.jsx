import React from "react";
import Navbar from "../Compoonents/Navbar/navbar";
import Hero from "../Compoonents/Hero/hero";
import About from "../Compoonents/About/About";
import Service from "../Compoonents/Service/Service";
import WhychooseSection from "../Compoonents/ChooseUsSection/WhychooseSection";
import Contact from "../Compoonents/Contact/Contact";
import Footer from "../Compoonents/Footer/footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <WhychooseSection />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
