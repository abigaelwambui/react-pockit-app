import { useContext } from "react"
import { ProductsContext } from "../contexts/ProductsContext"

export default function ProductCard ({specificProduct}) {

    const {products} = useContext(ProductsContext)

    const productStore = products.filter((product)=> product.name === specificProduct.name)

   

    return (
        <>
        <div key={specificProduct.id} className="card col h-100 m-1 p-0">
            <img src={specificProduct.imageUrl} className="card-img-top" alt={specificProduct.name}/>
            <div className="card-body">
                <h5 className="card-title">{specificProduct.name}</h5>
                <p className="card-text">Price: {specificProduct.price}</p>
                <p className="card-text">Original Price: {specificProduct.originalPrice}</p>
                <button className="btn btn-small my-3">Available in {productStore.length} stores</button>

            </div>
        </div>
        </>
    )
}