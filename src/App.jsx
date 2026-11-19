
import './App.css'

import { StoresProvider } from './contexts/StoresContext'
import { ProductsProvider } from './contexts/ProductsContext'
import Footer from './components/footer/Footer'
import AppRoutes from './routes/routes'
import { CompareProvider } from './contexts/CompareContext'
import { CouponsProvider } from './contexts/CouponsContext'
import NavBar from './components/NavBar/NavBar'

function App() {


  return (
    <>
    <StoresProvider>
      <ProductsProvider>
        <CompareProvider>
          <CouponsProvider>
            <NavBar/>
            <AppRoutes/>
            <br/>
            <hr/>
            <br/>
            <Footer/>
          </CouponsProvider>
        </CompareProvider> 
      </ProductsProvider>  
    </StoresProvider>
      
   
    

    </>
  )

}

export default App
