import { useContext, useState } from "react"
import { ProductsContext } from "../contexts/ProductsContext"
import "./ProductCard.css"
import { CompareContext } from "../contexts/CompareContext"

export default function ProductCard ({specificProduct}) {

    const {products} = useContext(ProductsContext)

    const productStore = products.filter((product)=> product.name === specificProduct.name)

    const {setSelectedProduct, setIsCompareOpen} = useContext(CompareContext)

    function handleClick () {
        setIsCompareOpen(true)
        setSelectedProduct(specificProduct)
    }


    return (
        <>
        <div key={specificProduct.id} className="card h-100 p-0 product-card">
            <img src={specificProduct.imageUrl} className="card-img-top" alt={specificProduct.name}/>
            <div className="card-body">
                <h5 className="card-title">{specificProduct.name}</h5>
                <p className="card-text">Price: {specificProduct.price}</p>
                <p className="card-text original-price">Ksh {specificProduct.originalPrice}</p>
                {productStore.length > 1 && (<button className="btn btn-small my-3" onClick={handleClick}>Available in {productStore.length} stores</button>)}

            </div>
        </div>
        </>
    )
}