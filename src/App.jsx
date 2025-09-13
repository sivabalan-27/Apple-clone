import { useState } from "react"
import Navbar from "./components/Navbar"
import Offer from "./components/Offer"
import Hero from "./components/Hero"
import Header from "./components/Header"
import Product from "./components/product"
import ProductsSection from "./components/ProductsSection"
import Slider from "./components/Slider"
import Footer from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Offer/>
      <Hero/>
      <Header/>
      <Product/>
      <ProductsSection/>
      <Slider/>
      <Footer/>
    </>
  )
}

export default App
