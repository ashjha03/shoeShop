import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState([]);
  const availableTheme = ["light", "halloween", "dark", "cupcake"]
  const [curTheme, setCurTheme] = useState(availableTheme[1])
  let index = 1;

  const addToCart = async ({data}) => {
    setCartItems([...cartItems, data])
    console.log(cartItems);
  }

  const changeTheme = () => {
    index = (index + 1) % availableTheme.length
    setCurTheme(availableTheme[index])
  }

  return <div data-theme={curTheme}>
    <Navbar cartItems={cartItems} changeTheme={changeTheme}  />
    <Component addToCart={addToCart} {...pageProps} />
    <Footer />
  </div>
}
