import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Stores from "../pages/Stores";
import StoreDetails from "../pages/StoreDetails";
import Shopall from "../pages/Shopall";
import Products from "../pages/Products";

export default function AppRoutes () {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/stores" element={<Stores/>}/>
            <Route path="/stores/:id" element={<StoreDetails/>} />
            <Route path="/stores/:id/products" element={<Shopall/>}/>
            <Route path="/products" element ={<Products/>}/>
        </Routes>
    )
}