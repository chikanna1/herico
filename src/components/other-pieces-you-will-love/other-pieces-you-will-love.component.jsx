import React from "react";
import "./other-pieces-you-will-love.styles.scss";

import ProductPreview from "../product-preview/product-preview.component";
import SHOP_DATA from "../../assets/shop_data";

const sampleProducts = SHOP_DATA.slice(0, 4);

const OtherPiecesYouWillLove = () => (
  <div className="other-pieces-you-will-love-container">
    <h1>Other Pieces You'll Love</h1>
    <div className="product-preview-section">
      {sampleProducts.map((product) => (
        <div className="product-preview-item">
          <ProductPreview item={product} size="small" />
        </div>
      ))}
    </div>
  </div>
);

export default OtherPiecesYouWillLove;
