import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MostPopular from "../components/MostPopular";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <div className="home__hero">
        <Hero />
      </div>
      <MostPopular />
      <Footer />
    </>
  );
};

export default Home;
