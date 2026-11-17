import { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import { ProductContext } from './contexts/ProductsContext'
import HowItWorks from './components/HowItWorks'

function App() {

  const [ products, setProducts ] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        console.log(products);
      });
  }, []);

  return (
    <>
    <ProductContext values = {{products, setProducts}}>
      <NavBar/>
      <Hero/>
      <HowItWorks/>
    </ProductContext>
    

    </>
  )

}

export default App
