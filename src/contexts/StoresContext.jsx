import { useEffect } from "react";
import { createContext, useState } from "react";

export const StoresContext = createContext()

export function StoresProvider({children}) {

    const [stores, setStores] = useState([])

    useEffect(()=> {
        fetch("http://localhost:3000/retailers")
        .then ((response)=> response.json())
        .then ((data)=> setStores(data))
    }, [setStores])

    return (<>
    <StoresContext.Provider value={{stores, setStores}}>
        {children}
    </StoresContext.Provider>
    </>)
}