import { createContext, useState } from "react";

export const CompareContext = createContext()

export function CompareProvider({children}) {
    const [isCompareOpen, setIsCompareOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)

    return (
        <CompareContext.Provider value={{isCompareOpen, setIsCompareOpen, selectedProduct, setSelectedProduct}}>
            {children}
        </CompareContext.Provider>
    )
}