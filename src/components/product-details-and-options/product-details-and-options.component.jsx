import React from "react";
import "./product-details-and-options.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AccordionApp from "../accordion/accordion.component";

const quantity = 7;

const ProductDetailsAndOptions = ({ item }) => (
  <div className="product-page-details-and-options-container">
    <div className="product-details">
      <h3 className="product-category-title">{item.category}</h3>
      <h1 className="product-name">{item.productName}</h1>
      <h1 className="product-price">${item.productPrice}.00</h1>
    </div>
    <div className="product-options">
      <div className="product-color-options">
        <h3 className="product-color-title">Color:</h3>
        <h3 className="product-color">{item.metals}</h3>
      </div>
      <div className="quantity-and-add-to-cart-container">
        <div className="quantity-picker">
          <FontAwesomeIcon
            className="quantity-picker-sign"
            icon={["fas", "minus"]}
            size="1x"
          />
          <div className="quantity">{quantity}</div>
          <FontAwesomeIcon
            className="quantity-picker-sign"
            icon={["fas", "plus"]}
            size="1x"
          />
        </div>
        <div className="add-to-cart-or-wishlist-buttons">
          <CustomButton>Add To Cart</CustomButton>
          <FontAwesomeIcon
            className="wishlist-button"
            icon={["fas", "heart"]}
            size="2x"
          />
        </div>
      </div>
    </div>
    <AccordionApp className="accordion" />
  </div>
);

export default ProductDetailsAndOptions;
