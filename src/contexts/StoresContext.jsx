import { useEffect } from "react";
import { createContext, useState } from "react";

export const StoresContext = createContext()

export function StoresProvider({children}) {

    const [stores, setStores] = useState([])
    const [allStores, setAllStores] = useState([])

    useEffect(()=> {
        fetch("http://localhost:3000/retailers")
        .then ((response)=> response.json())
        .then ((data)=> {
            setStores(data)
            setAllStores(data)
        })
    }, [setStores])

    return (<>
    <StoresContext.Provider value={{stores, setStores, allStores}}>
        {children}
    </StoresContext.Provider>
    </>)
}