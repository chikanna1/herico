import React from "react";
import "./product-showcase.styles.scss";

import ProductPreview from "../product-preview/product-preview.component";
import SHOP_DATA from "../../assets/shop_data";

const item1 = SHOP_DATA[0].products[0];
const item2 = SHOP_DATA[0].products[1];
const item3 = SHOP_DATA[0].products[2];
const item4 = SHOP_DATA[0].products[3];

const ProductShowcase = () => (
  <div className="product-showcase-container">
    <div className="product-showcase-header">
      <h2>Menala Collection</h2>
      <h3>SHOP MORE OF THIS COLLECTION</h3>
    </div>
    <div className="product-showcase">
      <ProductPreview item={item1} />
      <ProductPreview item={item2} />
      <ProductPreview item={item3} />
      <ProductPreview item={item4} />
    </div>
  </div>
);

export default ProductShowcase;
