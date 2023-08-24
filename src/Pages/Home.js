
import React from "react";
import Hero from "../Components/Hero/Hero"
import Nav from "../Components/Nav/Nav"
import Footer from "../Components/Footer/Footer"
import SimpleSlider from "../Components/Products/Products"

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <SimpleSlider />
      <Footer />
    </>
  );
}

export default Home;
