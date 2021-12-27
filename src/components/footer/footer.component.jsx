import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FormInput from "../form-input/form-input.component";

import "./footer.styles.scss";

class Footer extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email } = this.state;
    alert("Thank you for Subscribing!");
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="footer-container">
        <div className="left-side">
          <div className="menu-section">
            <h4 className="menu-title">Shop</h4>
            <Link className="footer-link" to="shop">
              Bracelets
            </Link>
            <Link className="footer-link" to="shop">
              Necklaces
            </Link>
            <Link className="footer-link" to="shop">
              Earrings
            </Link>
            <Link className="footer-link" to="shop">
              Rings
            </Link>
          </div>
          <div className="menu-section">
            <h4 className="menu-title">About</h4>
            <Link className="footer-link" to="shop">
              Glossary
            </Link>
            <Link className="footer-link" to="shop">
              Faqs
            </Link>
            <Link className="footer-link" to="shop">
              Privacy & Accessibility
            </Link>
            <Link className="footer-link" to="shop">
              Stockist
            </Link>
          </div>
          <div className="menu-section">
            <h4 className="menu-title">Services</h4>
            <Link className="footer-link" to="shop">
              Affirm
            </Link>
            <Link className="footer-link" to="shop">
              Appointment
            </Link>
            <Link className="footer-link" to="shop">
              Care Guide
            </Link>
            <Link className="footer-link" to="shop">
              Size Guide
            </Link>
          </div>
        </div>
        <div className="right-side">
          <div className="email-input">
            <h3>Keep up with our Antics</h3>
            <form className="sign-up-form" onSubmit={this.handleSubmit}>
              <FormInput
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                required
              />
              <FontAwesomeIcon
                className="submit"
                icon={["fas", "chevron-right"]}
                size="1x"
                type="submit"
                onClick={this.handleSubmit}
              />
            </form>
          </div>
          <div className="social-media-links">
            <Link className="social-media-icon-link" to="shop">
              <FontAwesomeIcon
                className="social-media-icon"
                icon={["fab", "facebook"]}
                size="1x"
              />
            </Link>
            <Link className="social-media-icon-link" to="shop">
              <FontAwesomeIcon
                className="social-media-icon"
                icon={["fab", "instagram"]}
                size="1x"
              />
            </Link>
            <Link className="social-media-icon-link" to="shop">
              <FontAwesomeIcon
                className="social-media-icon"
                icon={["fab", "twitter"]}
                size="1x"
              />
            </Link>
            <Link className="social-media-icon-link" to="shop">
              <FontAwesomeIcon
                className="social-media-icon"
                icon={["fab", "pinterest"]}
                size="1x"
              />{" "}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
