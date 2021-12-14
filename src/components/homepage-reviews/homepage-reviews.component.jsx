import React from "react";
import "./homepage-reviews.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactStars from "react-stars";

const test_props = [
  {
    name: "Jon",
    review: "My daughter loved the necklace!",
    rating: 5,
    active: false,
  },
  {
    name: "Jane",
    review:
      "These earrings did not disappoint. The size and shape of the pearls are truly distinctive. They are everything I had hoped they would be",
    rating: 5,
    active: false,
  },
  {
    name: "Fulanito",
    review: "Esa joya es buena!",
    rating: 4,
    active: false,
  },
  {
    name: "Jane",
    review:
      "I had a great experience exchanging for a different size. I was able to receive the exchange within two weeks. Their customer care service was exceptional.",
    rating: 5,
    active: false,
  },
  {
    name: "Fulanito",
    review: "Esa joya es buena!",
    rating: 4,
    active: false,
  },
];

class HomepageReviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: 0,
      rating: test_props[0].rating,
      reviewer: test_props[0].name,
      review: test_props[0].review,
    };
  }

  handleClick = (id) => {
    this.setState({
      activeId: id,
      rating: test_props[id].rating,
      reviewer: test_props[id].name,
      review: test_props[id].review,
    });
  };

  render() {
    return (
      <div className="homepage-reviews-container">
        <p className="title-text">You Said It Not Us</p>
        <div className="review-container">
          <p className="review-text">"{this.state.review}"</p>
          <div className="stars">
            <ReactStars
              count={5}
              value={this.state.rating}
              size={24}
              color1={"#ffd000"}
              color2={"#00000"}
              edit={false}
              half={true}
            />
          </div>
          <p className="reviewer-text">{this.state.reviewer}, Verified Buyer</p>
        </div>
        <div className="buttons">
          {[0, 1, 2, 3, 4].map((number) => {
            return (
              <FontAwesomeIcon
                className={
                  this.state.activeId === number
                    ? `fontawesome-icon is-active`
                    : `fontawesome-icon`
                }
                id={number}
                icon={["fas", "circle"]}
                size="1x"
                onClick={() => this.handleClick(number)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default HomepageReviews;
