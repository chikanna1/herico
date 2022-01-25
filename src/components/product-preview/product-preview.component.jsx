import React from "react";
import "./product-preview.styles.scss";
import HoverImage from "react-hover-image";

class ProductPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coverImage1Url: props.coverImage1Url,
      secondaryImageUrl: props.secondaryImageUrl,
      displayImage: props.coverImage1Url,
      productPrice: props.productPrice,
      productName: props.productName,
    };
  }
  render() {
    return (
      <div className="product-preview-container">
        <div className="product-image-container">
          <HoverImage
            src={this.state.coverImage1Url}
            hoverSrc={this.state.secondaryImageUrl}
            className="image-side"
          />
        </div>
        <div className="product-details-container">
          <div className="product-details-top">
            <p className="product-name">{this.state.productName}</p>
            <p className="product-price">${this.state.productPrice}</p>
          </div>
          <div className="product-details-bottom">
            <p className="product-material">{this.state.productMaterial}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductPreview;
