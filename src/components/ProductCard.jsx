import { useContext } from "react"
import { ProductsContext } from "../contexts/ProductsContext"

export default function ProductCard ({product, productName}) {

    const {products} = useContext(ProductsContext)

    const productsInStore = products.filter((product)=> product.name === productName)

   

    return (
        <>
        <div key={product.id} className="card col-3 m-1 p-0">
            <img src={product.imageUrl} className="card-img-top" alt={productName}/>
            <div className="card-body">
                <h5 className="card-title">{productName}</h5>
                <p className="card-text">Price: {product.price}</p>
                <p className="card-text">Original Price: {product.originalPrice}</p>
                <button className="btn btn-small my-3">Available in {productsInStore.length} stores</button>

            </div>
        </div>
        </>
    )
}