import { useContext } from "react"
import { ProductsContext } from "../../contexts/ProductsContext"
import ProductCard from "../productcard/ProductCard"
import { Link } from "react-router"
import "./DiscountProducts.css"

export default function DiscountProducts ({store}) {
    const {allProducts} = useContext(ProductsContext)
    
    const discountProducts = allProducts.filter((product)=> 
        product.retailerId === store.id && product.hasDiscount === true)

     console.log("Store:", store)
        console.log("All products:", allProducts)
        console.log("Discount products:", discountProducts)

    return (
        <>
        <div className="container discount-section" id="price-drop">
            <div className="discount-left">
                <p><big>Price Drops</big></p>
                <p>Featured Price Drops from {store.name}</p>
                <div>
                    <Link className="btn-outline theme-accent" to={`/stores/${store.id}/products`}>Shop all</Link>
                    
                </div>
            </div>
            <div className="discount-right">
                <div id="carouselMultiple" className="carousel slide" data-bs-ends="stop" style={{"--bs-carousel-items": 3, "--bs-carousel-items-gap": "1rem"}}>
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">See more products...</h5>
                        <div>
                            <button className="btn-icon btn-sm" type="button" data-bs-target="#carouselMultiple" data-bs-slide="prev" style={{"--bs-carousel-control-icon-width": "1rem"}}>
                                <span className="carousel-icon-prev" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="btn-icon btn-sm" type="button" data-bs-target="#carouselMultiple" data-bs-slide="next" style={{"--bs-carousel-control-icon-width": "1rem"}}>
                                <span className="carousel-icon-next" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="carousel-inner">
                        {discountProducts.map((product, index)=> (
                            <div className={`carousel-item ${index === 0 ? "active": ""} card-body`}  key = {product.id}>
                                <ProductCard
                                specificProduct={product}
                                />
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}