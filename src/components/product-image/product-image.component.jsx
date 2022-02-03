import React, { Component } from "react";
import ReactImageMagnify from "react-image-magnify";
import ReactSlick from "react-slick";

import "./product-image.styles.scss";
import "./styles/react-slick.css";

import front_500 from "./images/versace-blue/front-500.jpg";
import front_1426 from "./images/versace-blue/front-1426.jpg";

import back_500 from "./images/versace-blue/back-500.jpg";
import back_779 from "./images/versace-blue/back-779.jpg";
import back_1020 from "./images/versace-blue/back-1020.jpg";
import back_1200 from "./images/versace-blue/back-1200.jpg";
import back_1426 from "./images/versace-blue/back-1426.jpg";
import ProductPage from "../../pages/product-page/product-page.page";

const smallImage =
  "https://images.shaneco.com/is/image/ShaneCo/necklace/570/Ruby-and-Diamond-Necklace-in-14k-Yellow-Gold-18-in._41080081_M.jpg";
class ProductImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="product-image-container">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: false,
              width: 700,
              height: 600,
              src: smallImage,
            },
            largeImage: {
              src: front_1426,
              width: 1200,
              height: 1800,
            },
            enlargedImageContainerDimensions: {
              width: "190%",
              height: "100%",
            },
          }}
        />
      </div>
    );
  }
}

export default ProductImage;
