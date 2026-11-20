import { useContext } from "react"
import { ProductsContext } from "../contexts/ProductsContext"
import ProductCard from "./productcard/ProductCard"

export default function StoreProducts({store}) {

    const {allProducts} = useContext(ProductsContext)

    const storeProducts = allProducts.filter((product)=> product.retailerId === store.id)
    return (
        <>
            <div className="container my-9">
                <h1>{store.name}</h1>
                <div className="row g-3">
                    {storeProducts.map((product)=> (
                        <div className="col-3">
                            <ProductCard
                            key = {product.id}
                            specificProduct={product}
                        />
                        </div>
                        
                    ))}
                </div>
            
            </div>

        </>
    )
}