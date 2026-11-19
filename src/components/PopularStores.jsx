import { useContext } from "react"
import { StoresContext } from "../contexts/StoresContext"
import StoreCard from "./storecards/StoreCard"

export default function PopularStores() {

    const { stores } = useContext(StoresContext)

    const popularStores = stores.filter((store)=> store.couponStats.performanceLabel === "popular")

    return (
        <>
        <div className="stores container my-9">  
            <h2>Some of Your Favourite Stores</h2>      
            <div className="row row-cols-1 md:row-cols-3 g-4 my-6">
                {popularStores.map((store)=> (
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