
import './App.css'
import NavBar from './components/NavBar'
import { StoresProvider } from './contexts/StoresContext'
import { ProductsProvider } from './contexts/ProductsContext'
import Footer from './components/Footer'
import AppRoutes from './routes/routes'
import { CompareProvider } from './contexts/CompareContext'
import { CouponsProvider } from './contexts/CouponsContext'

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
