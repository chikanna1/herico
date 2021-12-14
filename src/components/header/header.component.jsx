import React from "react";
import "./header.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mainLogo from "./assets/logo.png";
import SearchBox from "../search/search.component";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
    };
  }

  handleChange = (event) => {
    const searchTerm = event.target;
    this.setState({ searchText: searchTerm });
  };
  render() {
    return (
      <div className="header-container">
        <div className="header-menu left">
          <Link className="header-link" to="shop">
            SHOP
          </Link>
          <Link className="header-link" to="seasons-deals">
            HOLIDAY GIFT SHOP
          </Link>
          <Link className="header-link" to="article-of-month">
            HERICO X MORACHI
          </Link>
        </div>

        <div className="logo">
          <img className="mainLogo" src={mainLogo} alt="HERICO" />
        </div>

        <div className="right-menu">
          <div className="header-menu right">
            <SearchBox />
            <Link className="header-link" to="about">
              ABOUT
            </Link>
            <Link className="header-link" to="seasons-deals">
              ACCOUNT
            </Link>
            <Link className="header-link" to="article-of-month">
              REFER A FRIEND
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
