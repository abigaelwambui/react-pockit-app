import { Route, Routes } from "react-router";
import Home from "../pages/Home";
import Stores from "../pages/Stores";
import StoreDetails from "../pages/StoreDetails";

export default function AppRoutes () {
    return (
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/stores" element={<Stores/>}/>
            <Route path="/stores/:id" element={<StoreDetails/>} />
        </Routes>
    )
}