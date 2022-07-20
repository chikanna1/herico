import React, { useContext, Fragment } from "react";
import "./product-page.styles.scss";

import ProductPageDetailsAndOptions from "../../components/product-details-and-options/product-details-and-options.component";
import ProductImage from "../../components/product-image/product-image.component";
import ProductMaterialsSection from "../../components/product-materials-section/product-materials-section.component";
import OtherPiecesYouWillLove from "../../components/other-pieces-you-will-love/other-pieces-you-will-love.component";
import { CategoriesContext } from "../../contexts/categories.context";

const ProductPage = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="product-page-container">
      <div className="product-image-and-buy-option-container">
        <div className="product-page-left-side">
          <ProductImage />
        </div>
        <div className="product-page-right-side">
          <Fragment>
            {Object.keys(categoriesMap).map((category) => (
              <div>
                {categoriesMap[category].map((product) => {
                  if (product.id === 1) {
                    return <ProductPageDetailsAndOptions item={product} />;
                  }
                })}
              </div>
            ))}
          </Fragment>
        </div>
      </div>
      <ProductMaterialsSection />
      <OtherPiecesYouWillLove />
    </div>
  );
};

export default ProductPage;
