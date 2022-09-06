import React, { useContext, Fragment, useState } from "react";
import "./shop.styles.scss";
import CollectionPreview from "../../components/preview-collection/preview-collection.component";
import shop_hero from "./assets/shop-hero.jpg";
import ProductPreview from "../../components/product-preview/product-preview.component";
import { Link } from "react-router-dom";
import { CategoriesContext } from "../../contexts/categories.context";
import { Route, Routes, Navigate } from "react-router-dom";
import ProductPage from "../../pages/product-page/product-page.page";
import Menu, { SubMenu, Item as MenuItem } from "rc-menu";
import "rc-menu/assets/index.css";

let stripeProducts = [];

const ShopPage = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  console.log(categoriesMap);

  const [category, setCategory] = useState("All");
  const [filter, setFilter] = useState("All");

  const getAllProducts = () => {
    let products = [];

    Object.keys(categoriesMap).map((category) => {
      categoriesMap[category].map((product) => {
        products.push(product);
      });
    });

    return products;
  };

  const [displayedProducts, setDisplayedProducts] = useState(getAllProducts());

  const filterFunction = (params) => {
    let products = getAllProducts();
    let sortedProducts = [];

    if (params === "LowToHigh") {
      sortedProducts = products.sort((a, b) => {
        console.log("LowToHigh");
        return a.productPrice - b.productPrice;
      });
    } else if (params === "HighToLow") {
      sortedProducts = products.sort((a, b) => {
        return b.productPrice - a.productPrice;
      });
    } else if (params === "Under100") {
      sortedProducts = products.filter((product) => {
        return product.productPrice < 100;
      });
    } else if (params === "100To150") {
      sortedProducts = products.filter((product) => {
        return product.productPrice >= 100 && product.productPrice <= 150;
      });
    } else if (params === "150To200") {
      sortedProducts = products.filter((product) => {
        return product.productPrice >= 150 && product.productPrice <= 200;
      });
    } else if (params === "pearl") {
      sortedProducts = products.filter((product) => {
        return product.category === "pearl";
      });
    } else if (params === "gold-metal") {
      sortedProducts = products.filter((product) => {
        return product.category === "gold-metal";
      });
    } else if (params === "cowrie") {
      sortedProducts = products.filter((product) => {
        return product.category === "cowrie";
      });
    } else if (params === "beads") {
      sortedProducts = products.filter((product) => {
        return product.category === "beads";
      });
    } else if (params === "crystal") {
      sortedProducts = products.filter((product) => {
        return product.category === "crystal";
      });
    } else if (params === "fashion") {
      sortedProducts = products.filter((product) => {
        return product.category === "fashion";
      });
    } else if (params === "rope") {
      sortedProducts = products.filter((product) => {
        return product.category === "rope";
      });
    } else if (params === "wedding-wear") {
      sortedProducts = products.filter((product) => {
        return product.occasionType === "wedding-wear";
      });
    } else if (params === "party-wear") {
      sortedProducts = products.filter((product) => {
        return product.occasionType === "party-wear";
      });
    } else if (params === "african-formal") {
      sortedProducts = products.filter((product) => {
        return product.category === "african-formal";
      });
    }
    setDisplayedProducts(sortedProducts);
  };

  return (
    <Fragment>
      <div className="shop-page">
        <div className="shop-page-filters">
          <div className="filters-title-text">
            <h4 className="filters-title">Collections</h4>
            <h1 className="filters-subtitle">Shop {category}</h1>
          </div>
          <div className="filters">
            <Menu className="filter-menu" mode="inline">
              <SubMenu className="submenu" key="1" title="Sort By">
                <MenuItem
                  className="menu-item"
                  key="new-arrivals"
                  onClick={() => filterFunction("HighToLow")}
                >
                  New Arrivals
                </MenuItem>
                <MenuItem
                  className="menu-item"
                  key="best-seller"
                  onClick={() => filterFunction("HighToLow")}
                >
                  Best Seller
                </MenuItem>
                <MenuItem
                  className="menu-item"
                  key="low-to-high"
                  onClick={() => filterFunction("LowToHigh")}
                >
                  Low to High
                </MenuItem>
                <MenuItem
                  className="menu-item"
                  key="high-to-low"
                  onClick={() => filterFunction("HighToLow")}
                >
                  High to Low
                </MenuItem>
              </SubMenu>
            </Menu>
            <Menu className="filter-menu" mode="inline">
              <SubMenu className="submenu" key="2" title="Prices">
                <MenuItem
                  className="menu-item"
                  key="under-150"
                  onClick={() => filterFunction("Under100")}
                >
                  Under $100
                </MenuItem>
                <MenuItem
                  className="menu-item"
                  key="100-150"
                  onClick={() => filterFunction("100To150")}
                >
                  $100 - $150
                </MenuItem>
                <MenuItem
                  className="menu-item"
                  key="150-200"
                  onClick={() => filterFunction("150To200")}
                >
                  $150 - $200
                </MenuItem>
              </SubMenu>
            </Menu>
            <Menu className="filter-menu" mode="inline">
              <SubMenu className="submenu" key="3" title="Category">
                <MenuItem
                  className="menu-item"
                  key="pearl"
                  onClick={() => filterFunction("pearl")}
                >
                  Pearl
                </MenuItem>
                <MenuItem
                  className="menu-item"
                  key="gold-metal"
                  onClick={() => filterFunction("gold-metal")}
                >
                  Gold Metal
                </MenuItem>
                <MenuItem
                  className="menu-item"
                  key="cowrie"
                  onClick={() => filterFunction("cowrie")}
                >
                  Cowrie
                </MenuItem>
                <MenuItem
                  className="menu-item"
                  key="beads"
                  onClick={() => filterFunction("beads")}
                >
                  Beads
                </MenuItem>
                <MenuItem
                  className="menu-item"
                  key="crystal"
                  onClick={() => filterFunction("crystal")}
                >
                  Crystal
                </MenuItem>
                <MenuItem
                  className="menu-item"
                  key="fashion"
                  onClick={() => filterFunction("fashion")}
                >
                  Fashion
                </MenuItem>
                <MenuItem
                  className="menu-item"
                  key="rope"
                  onClick={() => filterFunction("rope")}
                >
                  Rope
                </MenuItem>
              </SubMenu>
            </Menu>
            <Menu className="filter-menu" mode="inline">
              <SubMenu className="submenu" key="4" title="Favorites">
                <MenuItem className="menu-item" key="wedding-wear">
                  Wedding Wear
                </MenuItem>
                <MenuItem className="menu-item" key="party-wear">
                  Party Wear
                </MenuItem>
                <MenuItem className="menu-item" key="african-formal">
                  Formal Wear
                </MenuItem>
              </SubMenu>
            </Menu>
          </div>
        </div>
        <div className="shop-section">
          <Fragment>
            <div className="product-preview-section">
              {displayedProducts.map((product) => (
                <div className="product-preview-item">
                  <Link to={`/product-details/${product.id}`}>
                    <ProductPreview item={product} size="large" />
                  </Link>
                </div>
              ))}
            </div>
            ))
          </Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default ShopPage;
