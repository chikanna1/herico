import React from "react";
import "./other-pieces-you-will-love.styles.scss";
import { Link } from "react-router-dom";

import ProductPreview from "../product-preview/product-preview.component";
import SHOP_DATA from "../../assets/shop_data";

const sampleProducts = SHOP_DATA[0].products.slice(0, 4);
console.log(sampleProducts);

const OtherPiecesYouWillLove = () => (
  <div className="other-pieces-you-will-love-container">
    <h1>Other Pieces You'll Love</h1>
    <div className="product-preview-section">
      {sampleProducts.map((product) => (
        <Link to={`/product-details/${product.id}`}>
          <div className="product-preview-item">
            <ProductPreview item={product} size="small" />
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default OtherPiecesYouWillLove;
