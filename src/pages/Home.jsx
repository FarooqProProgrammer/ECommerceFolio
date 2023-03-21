import React from 'react'
import Header from '../Layout/Header'
import ProductSection from '../Layout/ProductSection'
import ProductSlider from '../Layout/Slider/Slider'
import Services from '../Layout/Services'
import Contact from '../Layout/Contact'
import Footer from '../Layout/Footer'


export default function Home() {
  return (
    <div>
    <ProductSection />
    <ProductSlider />
    <Services />
    <Contact />
   
  </div>
  )
}
