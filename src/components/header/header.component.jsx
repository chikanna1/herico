import React from "react";
import "./header.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mainLogo from "./assets/logo.png";
import SearchBox from "../search/search.component";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

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
          <Link className="header-link" to="/">
            <img className="mainLogo" src={mainLogo} alt="HERICO" />
          </Link>
        </div>

        <div className="right-menu">
          <div className="header-menu right">
            <SearchBox />
            <Link className="header-link" to="about">
              ABOUT
            </Link>
            {this.props.currentUser ? (
              <Link className="header-link" to="my-account">
                ACCOUNT
              </Link>
            ) : (
              <Link className="header-link" to="sign-in">
                SIGN IN
              </Link>
            )}
            <Link className="header-link" to="article-of-month">
              REFER A FRIEND
            </Link>

            <CartIcon />
          </div>
          {this.props.hidden ? null : <CartDropdown />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden,
});
export default connect(mapStateToProps)(Header);
