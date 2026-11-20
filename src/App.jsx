
import './App.css'

import { StoresProvider } from './contexts/StoresContext'
import { ProductsProvider } from './contexts/ProductsContext'
import Footer from './components/footer/Footer'
import AppRoutes from './routes/routes'
import { CompareProvider } from './contexts/CompareContext'
import { CouponsProvider } from './contexts/CouponsContext'
import NavBar from './components/NavBar/NavBar'
import { ReviewsProvider } from './contexts/ReviewsContext'

function App() {


  return (
    <main>
    <StoresProvider>
      <ProductsProvider>
        <CompareProvider>
          <CouponsProvider>
            <ReviewsProvider>
              <NavBar/>
              <AppRoutes/>
              <br/>
              <hr/>
              <br/>
              <Footer/>
            </ReviewsProvider>
          </CouponsProvider>
        </CompareProvider> 
      </ProductsProvider>  
    </StoresProvider>
    </main>
  )

}

export default App
