import { useContext } from "react"
import { ProductsContext } from "../contexts/ProductsContext"
import { StoresContext } from "../contexts/StoresContext"

export default function PriceCompare({specificProduct, onClose}) {

    const {products} = useContext(ProductsContext)
    const {stores} = useContext(StoresContext)

    const productListings = products.filter((product)=> product.barcode === specificProduct.barcode)

    return (
        <div className="comparison">
            <div className="comparison-container">
                <button className="btn-close comparison-close" onClick={onClose} aria-label="Close comparison"></button>
                <div className="price-comparison">
                    
                    <div className="compared-product">
                        <img src={specificProduct.imageUrl} alt={specificProduct.name}/>
                        <h4>{specificProduct.name} </h4>
                        <p>{specificProduct.brand}</p>
                        <p>{specificProduct.size}</p>
                    </div>

                    <div className="compared-stores">
                        
                        <h3>Compare Prices </h3>
                        <div className="store-grid">
                            {productListings.map((listing)=> {
                                const listingStore = stores.find((store)=> store.id === listing.retailerId)

                                if (!listingStore) return null;

                                return (
                                   
                                        <div className="comparison-card h-100" key={listing.id}>
                                        
                                            <h5>{listingStore.name}</h5>
                                            <p>Ksh{listing.price}</p>
                                            {listing.hasDiscount && (<p className="original-price">Ksh {listing.originalPrice}</p>)}
                                            <p>{listing.inStock ? "In Stock" : "Out of Stock"}</p>

                                        </div>
                                  
                                    
                                )
                            })}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        
    )
}