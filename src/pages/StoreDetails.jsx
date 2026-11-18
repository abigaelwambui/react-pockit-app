import { useParams } from "react-router"
import DiscountProducts from "../components/DiscountProducts"
import { useEffect, useState } from "react"

export default function StoreDetails() {

    const {id} = useParams()
    const [store, setStore] = useState({})
    
    useEffect (()=> {
        fetch(`http://localhost:3000/retailers/${id}`)
        .then ((response)=> response.json())
        .then ((data)=> {
            setStore(data)
        })
    }, [])

    return (
        <>
        <div className="container">
            <DiscountProducts store={store}/>
        </div>
        </>
    )
}