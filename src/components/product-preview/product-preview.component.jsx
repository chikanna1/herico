import React from "react";
import "./product-preview.styles.scss";
import HoverImage from "react-hover-image";

const testProps = {
  coverImage1Url:
    "https://media.tiffany.com/is/image/Tiffany/EcomItemL2/elsa-peretticolor-by-the-yard-pendant-62632755_989745_ED.jpg?&op_usm=1.0,1.0,6.0&$cropN=0.1,0.1,0.8,0.8&defaultImage=NoImageAvailableInternal&&wid=1250&hei=1250",
  secondaryImageUrl:
    "https://ktcollection.com/wp-content/uploads/2019/09/14K-Gold-Drop-Ruby-Necklace-.jpg",
  productName: "Menala Gold Necklace",
  productMaterial: "14K Gold",
  productPrice: 320,
};
class ProductPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coverImage1Url: testProps.coverImage1Url,
      secondaryImageUrl: testProps.secondaryImageUrl,
      displayImage: testProps.coverImage1Url,
    };
  }
  render() {
    return (
      <div className="product-preview-container">
        <div className="product-image-container">
          <HoverImage
            src={testProps.coverImage1Url}
            hoverSrc={testProps.secondaryImageUrl}
            className="image-side"
          />
        </div>
        <div className="product-details-container">
          <div className="product-details-top">
            <p className="product-name">{testProps.productName}</p>
            <p className="product-price">${testProps.productPrice}</p>
          </div>
          <div className="product-details-bottom">
            <p className="product-material">{testProps.productMaterial}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductPreview;
