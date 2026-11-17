import { createContext, useState } from "react";

export const ProductContext = createContext()

export function ProductsProvider({children}) {

    const [products, setProducts] = useState([])

    return(
        <>
        <ProductContext.Provider value={{products, setProducts}}></ProductContext.Provider>
        {children}
        </>
    )
}