import { useContext } from "react"
import { StoresContext } from "../contexts/StoresContext"
import "./Popularstores.css"
export default function PopularStores(){

    const { stores } = useContext(StoresContext)

    const popularStores = stores.filter((store)=> store.couponStats.performanceLabel === "top_performer")

    return (
        <>
        <div className="popular-stores container my-9">  
            <h2>Stores with the Most Successful</h2>      
            <div className="row row-cols-1 md:row-cols-3 g-4 my-6">
                {popularStores.map((store)=> (
                   <div className="col">
                    <div className="card card-row">
                    <img src={store.imageUrl} className="card-img-top" alt={store.name}/>
                    <div className="card-body">
                        <h4 className="card-title">{store.name}</h4>
                        <p className="card-text">{store.couponStats.successfulCoupons} Coupons</p>
                        <p><small>Very High Coupon Success Rate</small></p>
                    </div>
                    </div>
                </div> 
                )
                )}
                
            </div>
        </div>

        </>
    )
}