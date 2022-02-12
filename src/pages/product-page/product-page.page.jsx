import React from "react";
import "./product-page.styles.scss";

import ProductPageDetailsAndOptions from "../../components/product-details-and-options/product-details-and-options.component";
import ProductImage from "../../components/product-image/product-image.component";
import ProductMaterialsSection from "../../components/product-materials-section/product-materials-section.component";
import OtherPiecesYouWillLove from "../../components/other-pieces-you-will-love/other-pieces-you-will-love.component";

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
    <ProductMaterialsSection />
    <OtherPiecesYouWillLove />
  </div>
);

export default ProductPage;
