import React from "react";
import "./hero.styles.scss";
import heroImage from "./assets/african-women-jewelry.jpg";
import leftsideImage from "./assets/igboman.jpg";
import rightsideImage from "./assets/igbowoman.jpg";

const Hero = () => (
  <div className="hero-container">
    <div className="overlay">
      <div className="hero-text">
        <h2 className="hero-title-text">New In: Lux Traditional Necklace</h2>
        <p className="hero-subtitle-text">
          Have you seen one of these before at an event? Probably Not. It's new,
          It's one of a kind, and it's calling your name
        </p>
      </div>
      <div
        className="image-side"
        style={{ backgroundImage: `url(${rightsideImage})` }}
      />
    </div>
  </div>
);

export default Hero;
