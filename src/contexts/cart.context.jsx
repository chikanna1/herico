import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd, productToAddQuantity = 0) => {
  //find if caartItems contains ProductToAdd

  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //If found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + productToAddQuantity }
        : cartItem
    );
  }

  //return new array with modified cartItems/ new cart Item
  return [...cartItems, { ...productToAdd, quantity: productToAddQuantity }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  //Find Cart Item To Remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  // Check if Quantity is equal o 1, if it is, remove that item from the cart
  if (existingCartItem.quantity == 1) {
    return cartItems.filter((cartItem) => cartItem.id != cartItemToRemove.id);
  }

  //Return back cart items with matching cart item with reduced quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => +cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const addItemToCart = (productToAdd, productToAddQuantity) => {
    setCartItems(addCartItem(cartItems, productToAdd, productToAddQuantity));
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };
  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    removeItemFromCart,
    cartCount,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
