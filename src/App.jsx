import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'


import { StoresProvider } from './contexts/StoresContext'
import { ProductsProvider } from './contexts/ProductsContext'

import Footer from './components/Footer'
import AppRoutes from './routes/routes'
import LandingPage from './components/LandingPage'

function App() {


  return (
    <>
    <StoresProvider>
      <ProductsProvider>
        <NavBar/>
        <AppRoutes/>
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
