import React from "react";
import "./banner.styles.scss";

const Banner = (props) => (
  <div className="banner-container">
    <p className="banner-message">{props.message}</p>
  </div>
);

export default Banner;
