import { useContext } from "react"
import { CompareContext } from "../contexts/CompareContext"

export default function SingleProductCard ({product}) {
    const {setSelectedProduct, setIsCompareOpen, setSource} = useContext(CompareContext)
    
    
        function handleClick () {
            setIsCompareOpen(true)
            setSelectedProduct(product)
            setSource("products")
        }
    const { cheapestProduct, stores, storeCount } = product

    return (
        <>
            <div  className="card h-100 p-0 product-card">
                <img src={product.imageUrl} className="card-img-top" alt={product.name}/>
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    {cheapestProduct ? ( 
                        <>
                        <p className="card-text">Best Price: {cheapestProduct.price}</p>
                        <p className="card-text original-price">Ksh {cheapestProduct.originalPrice}</p>
                        </>                      
                    ) : (<p>Currently out of stock!</p>)}
                    {storeCount > 1 && (<button className="btn btn-small my-3" onClick={handleClick}>Available in {stores.filter(item => item.inStock).length} stores</button>)}
                </div>
            </div>
        </>
    )
}