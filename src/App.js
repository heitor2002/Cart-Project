import { useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import data from "./data";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const closeTab = () => {
    let cart_tab = document.querySelector(".cart_tab");

    cart_tab.classList.remove("active");
  };

  const openTab = () => {
    let cart_tab = document.querySelector(".cart_tab");

    cart_tab.classList.add("active");
  };

  const addProduct = (product) => {
    const haveItems = cartItems.find((item) => item.id === product.id);
    if (haveItems) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...haveItems, qty: haveItems.qty + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const removeProduct = (product) => {
    const haveItems = cartItems.find((item) => item.id === product.id);
    if (haveItems.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...haveItems, qty: haveItems.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <Header openTab={openTab} />
      <Showcase products={products} addProduct={addProduct} />
      <Cart
        cartItems={cartItems}
        closeTab={closeTab}
        addProduct={addProduct}
        removeProduct={removeProduct}
      />
    </>
  );
}

export default App;
