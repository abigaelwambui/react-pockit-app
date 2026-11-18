import { createContext, useEffect, useState } from "react";

export const CouponsContext = createContext()

export function CouponsProvider({children}) {
    const [coupons, setCoupons] = useState([])

    useEffect(()=> {
        fetch("http://localhost:3000/coupons")
        .then((response)=> response.json())
        .then((data)=> setCoupons(data))
    }, [setCoupons])

    return (
        <>
        <CouponsContext.Provider value={{coupons, setCoupons}}>
            {children}
        </CouponsContext.Provider>
        </>
    )
}
