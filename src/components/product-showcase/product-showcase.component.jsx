import React from "react";
import "./product-showcase.styles.scss";

import ProductPreview from "../product-preview/product-preview.component";

const ProductShowcase = () => (
  <div className="product-showcase-container">
    <div className="product-showcase-header">
      <h2>Menala Collection</h2>
      <h3>SHOP MORE OF THIS COLLECTION</h3>
    </div>
    <div className="product-showcase">
      <ProductPreview />
      <ProductPreview />
      <ProductPreview />
      <ProductPreview />
    </div>
  </div>
);

export default ProductShowcase;
