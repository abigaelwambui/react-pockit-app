import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'

import HowItWorks from './components/HowItWorks'
import { StoresProvider } from './contexts/StoresContext'
import { ProductsProvider } from './contexts/ProductsContext'
import PopularStores from './components/PopularStores'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <StoresProvider>
      <ProductsProvider>
        <NavBar/>
        <Hero/>
        <HowItWorks/>
        <br/>
        <PopularStores/>
        <br/>
        <hr/>
        <br/>
        <Footer/>
      </ProductsProvider>  
    </StoresProvider>
      
   
    

    </>
  )

}

export default App
