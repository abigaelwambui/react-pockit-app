import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import { ProductsProvider } from './contexts/ProductsContext'
import HowItWorks from './components/HowItWorks'
import { StoresProvider } from './contexts/StoresContext'

function App() {

  return (
    <>
      <StoresProvider>
        <ProductsProvider>
          <NavBar/>
          <Hero/>
          <HowItWorks/>
        </ProductsProvider>  
      </StoresProvider>

    </>
  )

}

export default App
