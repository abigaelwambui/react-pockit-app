import { useContext, useState } from "react"
import ProductsList from "../components/productlist/ProductsList"
import { CompareContext } from "../contexts/CompareContext"
import SideBar from "../components/sidebar/SideBar"
import { ProductsContext } from "../contexts/ProductsContext"
import Pagination from "../components/Pagination"


export default function Products() {

    const {products} = useContext(ProductsContext)

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(12)

    //Get Current Posts
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)
    

    return (
        <>
        <SideBar/>
        <ProductsList products={currentPosts}/>
        <Pagination
        postsPerPage={postsPerPage}
        totalPosts={products.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        />
                     
        </>
    )
}