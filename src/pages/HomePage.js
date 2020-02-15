import React from "react";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Skills from "../components/Skills";

const HomePage = props => {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
      <Carousel />
      <Skills />
    </div>
  );
};

export default HomePage;
