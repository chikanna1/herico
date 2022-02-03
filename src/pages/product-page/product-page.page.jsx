import React from "react";
import "./product-page.styles.scss";

import ProductPageDetailsAndOptions from "../../components/product-details-and-options/product-details-and-options.component";
import ProductImage from "../../components/product-image/product-image.component";
const ProductPage = ({ item }) => (
  <div className="product-page-container">
    <div className="product-image-and-buy-option-container">
      <div className="product-page-left-side">
        <ProductImage />
      </div>
      <div className="product-page-right-side">
        <ProductPageDetailsAndOptions item={item} />
      </div>
    </div>
  </div>
);

export default ProductPage;
