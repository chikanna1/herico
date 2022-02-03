import React from "react";
import "./search.styles.scss";
import searchglass from "./assets/searchpng.png";

class SearchBox extends React.Component {
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
      <div className="search-container">
        <button type="submit" className="search-button">
          <img src={searchglass} alt="Search" />
        </button>
      </div>
    );
  }
}

export default SearchBox;
