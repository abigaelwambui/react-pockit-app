import { useParams } from "react-router"
import DiscountProducts from "../components/DiscountProducts"
import { useContext, useEffect, useState } from "react"
import { CompareContext } from "../contexts/CompareContext"
import PriceCompare from "../components/PriceCompare"
import SideCard from "../components/sideCard"
import Coupons from "../components/Coupons"

export default function StoreDetails() {

    const {id} = useParams()
    const [store, setStore] = useState({})
    const {isCompareOpen, selectedProduct, setIsCompareOpen, source} = useContext(CompareContext)
    
    useEffect (()=> {
        fetch(`http://localhost:3000/retailers/${id}`)
        .then ((response)=> response.json())
        .then ((data)=> {
            setStore(data)
        })
    }, [id])

    return (
        <div className="d-flex">
        <SideCard store={store}/>
        <div className="store-details-container">
            
            <div className="container store-details">
                <Coupons store={store}/>
                <h3>{store.name}: Exclusive Offers, and Discounts</h3>
                <div>
                    <DiscountProducts store={store}/>
                    {isCompareOpen && source === "storeDetails" && (<PriceCompare specificProduct={selectedProduct} onClose={() => setIsCompareOpen(false)}/>)}
                </div>
            </div>

        </div>
        </div>
        
    )
}