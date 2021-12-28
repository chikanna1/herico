import React from "react";
import "./jewelry-showcase.styles.scss";

// const JewelryPictureUrl =
// "https://pixabay.com/get/gaa6621021222cba7f7d6cc241c893ce562d00b764e838f11befcce61814a67328122f4c96392b563290c31a94c653ce9fae422ed12bb9f3e0f949d9e06c942838aaa2bae56cc3b1a2e322e82007779fd_1920.jpg";

import JewelryPictureUrl from "./assets/jewelry-showcase.jpg";
// const JewelryPictureUrl =
// "https://pixabay.com/get/gde7168cb330e95d1eebac1cca5ad0fadb23e42f4122e180346d5d3fb53d45da9cb2078f806349cbde9a2ed228c976401.jpg";
const JewelryShowcase = () => (
  <div
    className="jewelry-showcase"
    style={{ backgroundImage: `url(${JewelryPictureUrl})` }}
  />
);

export default JewelryShowcase;
