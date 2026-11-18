import { useContext } from "react"
import { StoresContext } from "../contexts/StoresContext"
import StoreCard from "./StoreCard"

export default function StoreList() {
    const {stores} = useContext(StoresContext)

    return (
        <>
            <div className="stores container my-9">
                <h1>All Stores</h1>
                <div className="row row-cols-1 md:row-cols-3 g-6 my-6">
                    {stores.map((store)=> (
                        <StoreCard
                        key = {store.id}
                        store = {store}
                        />
                    ))}
                </div>

            </div>
        </>
    )
}