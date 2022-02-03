import React from "react";
import "./accordion.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AccordionApp extends React.Component {
  render() {
    const hiddenTexts = [
      {
        label: "Description",
        value: (
          <p>
            A new take on a classic tennis bracelet, the Vanguard Diamond Line
            Bracelet combines our signature Alchemy setting with the classic
            feel of a vintage silhouette. Handcrafted in 18-karat gold, the
            Vanguard Diamond Line Bracelet features 3 emerald-cut diamonds
            accompanied by 22 round, brilliant cut diamonds. The delicate chain
            design allows the bracelet to hand sophisticatedly on the wrist.
            <br />
            Easy to dress up or down, the Vanguard Diamond Line Bracelet can be
            paired with more casual gold pieces like the Lola Bracelet and
            Sophisticate Bangle or heavier diamond pieces like the Phoebe
            Bracelet or the Penelope Bracelet for a show stopping going out
            look.
          </p>
        ),
      },
      {
        label: "Details",
        value: (
          <div>
            <ul>
              <li>
                <span>
                  <FontAwesomeIcon
                    className="quantity-picker-sign"
                    icon={["fas", "circle"]}
                    size="1x"
                  />
                </span>
                Handcrafted in 18-karat gold
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    className="quantity-picker-sign"
                    icon={["fas", "circle"]}
                    size="1x"
                  />
                </span>
                Diamonds: 1.26 total carat weight
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    className="quantity-picker-sign"
                    icon={["fas", "circle"]}
                    size="1x"
                  />
                </span>
                Made in New York
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    className="quantity-picker-sign"
                    icon={["fas", "circle"]}
                    size="1x"
                  />
                </span>
                STYLE JX1055BR/EM
              </li>
            </ul>
          </div>
        ),
      },
      {
        label: "Shipping & Returns",
        value: (
          <div>
            <ul>
              <li>
                <span>
                  <FontAwesomeIcon
                    className="quantity-picker-sign"
                    icon={["fas", "circle"]}
                    size="1x"
                  />
                </span>
                Many of our styles are custom made and may take up to 14 days
                for production.{" "}
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    className="quantity-picker-sign"
                    icon={["fas", "circle"]}
                    size="1x"
                  />
                </span>
                Select styles are available in stock and ready to ship out
                within 1 to 3 business days. Contact us to inquire about our in
                stock collection.{" "}
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    className="quantity-picker-sign"
                    icon={["fas", "circle"]}
                    size="1x"
                  />
                </span>
                Purchases are delivered in a branded black box tied with a
                ribbon and a certificate of authenticity.{" "}
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    className="quantity-picker-sign"
                    icon={["fas", "circle"]}
                    size="1x"
                  />
                </span>
                We offer complimentary shipping to domestic orders over $5000.
                All other domestic orders are subject to a $40 shipping flat
                rate fee.{" "}
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    className="quantity-picker-sign"
                    icon={["fas", "circle"]}
                    size="1x"
                  />
                </span>
                All orders are insured and shipped out with a trusted carrier
                within our network. An adult signature is required for all
                deliveries.
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    className="quantity-picker-sign"
                    icon={["fas", "circle"]}
                    size="1x"
                  />
                </span>
                International orders may be subject to import taxes, custom
                duties and/or fees imposed by the destination country, collected
                when the shipment arrives.
              </li>
              <li>
                <span>
                  <FontAwesomeIcon
                    className="quantity-picker-sign"
                    icon={["fas", "circle"]}
                    size="1x"
                  />
                </span>
                Visit our shipping and delivery page here for more details on
                shipping, international taxes & duties, and delivery time.
              </li>
            </ul>
          </div>
        ),
      },
    ];
    return (
      <div>
        <Accordion hiddenTexts={hiddenTexts} />
      </div>
    );
  }
}

class Accordion extends React.Component {
  render() {
    return (
      <div className="accordion">
        {this.props.hiddenTexts.map((hiddenText) => (
          <AccordionItem key={hiddenText.label} hiddenText={hiddenText} />
        ))}
      </div>
    );
  }
}

class AccordionItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }
  render() {
    const activeStatus = this.state.visibility ? "active" : "";

    var display = "minus";
    return (
      <div>
        <button
          className="accordion__button"
          onClick={this.handleToggleVisibility}
        >
          {this.props.hiddenText.label}
          <span
            className={
              this.state.visibility ? (display = "minus") : (display = "plus")
            }
          >
            <FontAwesomeIcon
              className="quantity-picker-sign"
              icon={["fas", `${display}`]}
              size="1x"
            />
          </span>
        </button>
        <div className={`accordion__content ${activeStatus}`}>
          {this.props.hiddenText.value}
        </div>
      </div>
    );
  }
}

export default AccordionApp;
