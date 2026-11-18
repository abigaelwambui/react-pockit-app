import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext()

export function ProductsProvider({children}) {
    const [products, setProducts] = useState([])

    useEffect(()=> {
        fetch("http://localhost:3000/products")
        .then((response)=> response.json)
        .then((data)=> setProducts(data))
    }, [setProducts])

    return (
        <>
        <ProductsContext.Provider value={{products, setProducts}}>
            {children}
        </ProductsContext.Provider>
        </>
    )
}
