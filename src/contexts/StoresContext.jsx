import { createContext, useState } from "react";

export const StoresContext = createContext()

export function StoresProvider({children}) {

    const [stores, setStores] = useState([])

    return (<>
    <StoresContext.Provider value={{stores, setStores}}>
        {children}
    </StoresContext.Provider>
    </>)
}