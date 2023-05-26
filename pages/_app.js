import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState([]);
  const availableTheme = ["light", "halloween", "dark", "cupcake"];
  const [curTheme, setCurTheme] = useState(availableTheme[1]);
  let index = 1;
  const [selectedSize, setSelectedSize] = useState([]);

  const addToCart = async ({ data }) => {
    const cartItem = cartItems.find((item) => item[0].id === data[0].id);
    if (cartItem) {
      cartItem.quantity = cartItem.quantity + 1;
      setCartItems([...cartItems]);
    } else {
      data.quantity = 1;
      data.size = selectedSize
      setCartItems([...cartItems, data]);
    }
  };

  const changeTheme = () => {
    index = (index + 1) % availableTheme.length;
    setCurTheme(availableTheme[index]);
  };

  return (
    <div data-theme={curTheme}>
      <Navbar
        cartItems={cartItems}
        setCartItems={setCartItems}
        changeTheme={changeTheme}
      />
      <Component
        addToCart={addToCart}
        setSelectedSize={setSelectedSize}
        {...pageProps}
      />
      <Footer />
    </div>
  );
}
