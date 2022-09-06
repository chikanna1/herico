import React from "react";
import { Route, Routes, Navigate, useParams, Router } from "react-router-dom";
import "@stripe/stripe-js";
import "./App.scss";

import HomePage from "./pages/homepage/homepage.page";
import ShopPage from "./pages/shop/shop.page";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.page";
import AccountPage from "./pages/account-page/account-page.page";

import Header from "./components/header/header.component";
import Banner from "./components/banner/banner.component";
import Footer from "./components/footer/footer.component";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import SHOP_DATA from "./assets/shop_data";
import ProductPage from "./pages/product-page/product-page.page";
import CheckoutPage from "./pages/checkout/checkout.page";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top";
library.add(fas, fab, far);

const App = () => {
  return (
    <div>
      <Banner message="Lifetime Guarantee | Free Shipping in U.S and Canada | Holiday Order Deadlines" />
      <Header />
      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/shop" element={<ShopPage />} />
          <Route exact path="/sign-in" element={<SignInAndSignUpPage />} />
          <Route exact path="/my-account" element={<AccountPage />} />
          <Route exact path="/checkout" element={<CheckoutPage />} />
          <Route exact path="/product-details/:id" element={<ProductPage />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </div>
  );
};

export default App;
