import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const availableTheme = ["light", "halloween", "dark", "cupcake"]
  const [curTheme, setCurTheme] = useState(availableTheme[1])
  let index = 1

  const changeTheme = () => {
    index = (index + 1) % availableTheme.length
    setCurTheme(availableTheme[index])
  }

  return <div data-theme={curTheme}>
    <Navbar changeTheme={changeTheme}  />
    <Component {...pageProps} />
    <Footer />
  </div>
}
