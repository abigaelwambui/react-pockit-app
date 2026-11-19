import { useContext, useMemo } from "react"
import { ProductsContext } from "../contexts/ProductsContext"
import ProductCard from "./productcard/ProductCard"
import SingleProductCard from "./SingleProductCard"
import { CompareContext } from "../contexts/CompareContext"
import PriceCompare from "./PriceCompare"


export default function ProductsList() {

    const {products} = useContext(ProductsContext)

    const {isCompareOpen, selectedProduct, setIsCompareOpen, source} = useContext(CompareContext)



   
    const groupedProducts = useMemo(()=> {
        return Object.groupBy(products, (product)=> product.barcode)
    }, [products])

    const singularProducts = Object.values (groupedProducts).map ((productGroup)=> {
        const availableProducts = productGroup.filter ((product)=> product.inStock)

        const sortedProducts = [...availableProducts].sort((a, b)=> a.price - b.price);
        
        const cheapestProduct = sortedProducts[0]

        const retailerIds = []

        for (const product of productGroup) {
            const retailerId = product.retailerId;

            if (!retailerIds.includes(retailerId)) {
                retailerIds.push(retailerId)
            }
        }

        const storeCount = retailerIds.length

        return {
            ...productGroup[0],
            stores: productGroup,
            cheapestProduct,
            storeCount
        }
    })

    


    return (
        <>
        <div className="container my-9">
            <h3>Browse Through All Products</h3>

            <div className="row g-3">
                {singularProducts.map((product) => {
                    const isSelected =
                        isCompareOpen &&
                        selectedProduct?.barcode === product.barcode &&
                        source === "products";

                    return (
                        <div key={product.barcode} className={isSelected ? "col-9" : "col-3"}>
                            {isSelected ? (
                                <PriceCompare
                                    specificProduct={selectedProduct}
                                    onClose={() => setIsCompareOpen(false)}
                                />
                            ) : (
                                <SingleProductCard product={product} />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>

        </>
    )
}