import React from "react";
import "./preview-collection.styles.scss";

import ProductPreview from "../product-preview/product-preview.component";

const CollectionPreview = ({ category, items }) => (
  <div className="collection-preview">
    <div className="preview">
      <h1>{category.toUpperCase()}</h1>
    </div>
  </div>
);

export default CollectionPreview;
