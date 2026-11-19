import { useContext } from "react"
import { StoresContext } from "../contexts/StoresContext"

import StoreCard from "./storecards/StoreCard"
export default function SuccessfulStores(){

    const { stores } = useContext(StoresContext)

    const successfulStores = stores.filter((store)=> store.couponStats.performanceLabel === "top_performer")

    return (
        <>
        <div className="stores container my-9">  
            <h2>Stores with the Most Successful Coupons</h2>      
            <div className="row row-cols-1 md:row-cols-3 g-4 my-6">
                {successfulStores.map((store)=> (
                    <StoreCard
                    key= {store.id}
                    store={store}
                    />
                    )
                )}
                
            </div>
        </div>

        </>
    )
}