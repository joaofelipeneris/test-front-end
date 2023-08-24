
import React from "react";
import Hero from "../Components/Hero/Hero"
import Nav from "../Components/Nav/Nav"
import Footer from "../Components/Footer/Footer"
import SimpleSlider from "../Components/Products/Products"
import Card from "../Components/Card/Card";
import Title from "../Components/Title/Title";

const Home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <SimpleSlider />
      <Card title="Parceiros" description="Lorem ipsum dolor sit amet, consectetur" />
      <Title />
      <Card title="Produtos" description="Lorem ipsum dolor sit amet, consectetur" />
      <Footer />
    </>
  );
}

export default Home;
