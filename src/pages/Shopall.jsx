import { useEffect, useState } from "react"
import { useParams } from "react-router"
import StoreProducts from "../components/StoreProducts"

export default function Shopall() {

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
            <StoreProducts store={store}/>
        </div>
        </>
    )
}