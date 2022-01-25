import React from "react";
import "./preview-collection.styles.scss";

import ProductPreview from "../product-preview/product-preview.component";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ ...productProps }) => (
          <ProductPreview {...productProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
