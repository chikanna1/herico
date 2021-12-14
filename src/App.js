import React from "react";
import "./App.css";

import HomePage from "./pages/homepage/homepage.page";

import Header from "./components/header/header.component";
import Banner from "./components/banner/banner.component";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, fab, far);

class App extends React.Component {
  render() {
    return (
      <div>
        <Banner message="Lifetime Guarantee | Free Shipping in U.S and Canada | Holiday Order Deadlines" />
        <Header />
        <HomePage />
      </div>
    );
  }
}

export default App;
