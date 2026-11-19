import { useContext, useState } from "react"
import ProductsList from "../components/productlist/ProductsList"
import { CompareContext } from "../contexts/CompareContext"
import SideBar from "../components/sidebar/SideBar"


export default function Products() {
    
    

    return (
        <>
        <SideBar/>
        <ProductsList/>
                     
        </>
    )
}