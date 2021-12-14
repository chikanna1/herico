import React from "react";
import "./homepage.styles.scss";
import Hero from "../../components/hero/hero.component";
import ProductShowcase from "../../components/product-showcase/product-showcase.component";
import VideoShowcase from "../../components/video-showcase/video-showcase.component";
import HomepageReviews from "../../components/homepage-reviews/homepage-reviews.component";

const HomePage = () => (
  <div className="homepage-container">
    <Hero />
    <ProductShowcase />
    <VideoShowcase />
    <HomepageReviews />
  </div>
);

export default HomePage;
