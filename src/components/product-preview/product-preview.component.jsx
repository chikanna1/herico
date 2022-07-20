import React from "react";
import "./product-preview.styles.scss";
import HoverImage from "react-hover-image";
import { Link } from "react-router-dom";

const ProductPreview = ({ item, size }) => (
  <div className={`product-preview-container ${size}`}>
    <div className="product-image-container">
      <HoverImage
        src={item.coverImage1Url}
        hoverSrc={item.secondaryImageUrl}
        className="image-side"
      />
    </div>
    <div className="product-details-container">
      <div className="product-details-top">
        <p className="product-name">{item.productName}</p>
        <p className="product-price">${item.productPrice}</p>
      </div>
      <div className="product-details-bottom">
        <p className="product-material">{item.productMaterial}</p>
      </div>
    </div>
  </div>
);

export default ProductPreview;
