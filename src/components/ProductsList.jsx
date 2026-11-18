import { useContext, useState } from "react"
import { ProductsContext } from "../contexts/ProductsContext"
import { StoresContext } from "../contexts/StoresContext"

export default function Products() {

    const {products} = useContext(ProductsContext)
    const {stores} = useContext(StoresContext)
   
    

    


    return (
        <>
        </>
    )
}