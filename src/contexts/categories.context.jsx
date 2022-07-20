import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../firebase/firebase.utils";

import SHOP_DATA from "../assets/shop_data.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
  getProductFromDatabase: () => {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  const getProductFromDatabase = (id) => {
    const documents = categoriesMap;
    Object.keys(documents).map((category) =>
      categoriesMap[category].find((product) => {
        return product.id === 1;
      })
    );
  };
  const value = { categoriesMap, getProductFromDatabase };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
