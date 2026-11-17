import { useContext } from "react"
import { StoresContext } from "../contexts/StoresContext"

export default function PopularStores(){

    const { stores } = useContext(StoresContext)

    const popularStores = stores.filter((store)=> store.couponStats.performanceLabel === "top-performer")

    return (
        <>
        </>
    )
}