import { useContext } from "react"
import { StoresContext } from "../contexts/StoresContext"
import StoreCard from "./storecards/StoreCard"

export default function PopularStores() {

    const { stores } = useContext(StoresContext)

    const popularStores = stores.filter((store)=> store.couponStats.performanceLabel === "popular")

    return (
        <>
        <div id="carouselMany" className="carousel slide" data-bs-ends="stop" style={{"--bs-carousel-items": 3, "--bs-carousel-items-gap": "1rem"}}>
            <div className="stores container my-9" id="popular-stores">  
            <h2>Some of Your Favourite Stores</h2>

            <div className="d-flex justify-content-end align-items-center p-3">
                    <h4 className="mx-3 fw-light">See more stores...</h4>   
                <div>
                    <button className="btn-icon btn-sm" type="button" data-bs-target="#carouselMany" data-bs-slide="prev" style={{"--bs-carousel-control-icon-width": "1rem"}}>
                        <span className="carousel-icon-prev" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="btn-icon btn-sm" type="button" data-bs-target="#carouselMany" data-bs-slide="next" style={{"--bs-carousel-control-icon-width": "1rem"}}>
                        <span className="carousel-icon-next" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="carousel-inner">
                {popularStores.map((store, index)=> (
                    <div className={`carousel-item ${index === 0 ? "active": ""} card-body`}  key = {store.id}>
                        <StoreCard
                        key= {store.id}
                        store={store}
                        />
                    </div>
                    
                    )
                )}  
            </div>
        </div>
        </div>


        </>
    )
}