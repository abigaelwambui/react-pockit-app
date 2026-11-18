import { useContext } from "react"
import { ProductsContext } from "../contexts/ProductsContext"
import ProductCard from "./ProductCard"

export default function StoreProducts({store}) {

    const {products} = useContext(ProductsContext)

    const storeProducts = products.filter((product)=> product.retailerId === store.id)
    return (
        <>
            <div className="stores container my-9">
                <h1>{store.name}</h1>
                <div className="row row-cols-1 md:row-cols-3 g-6 my-6">
                    {storeProducts.map((product)=> (
                        <ProductCard
                            key = {product.id}
                            specificProduct={product}
                        />
                    ))}
                </div>
            
            </div>

        </>
    )
}