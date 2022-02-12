import React from "react";
import "./product-materials-section.styles.scss";

import leftSideImage from "./assets/jess-harper-sunday-I89WziXZdVc-unsplash.jpg";

const ProductMaterialsSection = () => (
  <div className="product-materials-section-container">
    <div className="left-side">
      <div
        className="left-side-image"
        style={{ backgroundImage: `url(${leftSideImage})` }}
      />
    </div>
    <div className="right-side">
      <h1>OUR MATERIALS</h1>
      <h4>GOLD</h4>
      <p>
        We exclusively use real, solid 18-karat gold in our collections. Jade
        Trau is conscious of the environmental impact of metal sourcing and
        makes a conscious effort to use recycled gold for the majority of our
        pieces.
      </p>
      <h4>DIAMONDS</h4>
      <p>
        All of our diamonds are carefully and ethically sourced to ensure that
        you receive the highest quality stone while feeling good about where it
        came from. We exclusively use 100% genuine, natural diamonds graded F/G
        in color and VS2 clarity; our philosophy is to honor the integrity and
        story of each diamond we work with and pay homage to the billions of
        years it takes for them to form under the earth's surface.{" "}
      </p>
    </div>
  </div>
);

export default ProductMaterialsSection;
