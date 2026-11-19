import { useContext, useState } from "react";
import StoreList from "../components/StoreList";
import { StoresContext } from "../contexts/StoresContext";
import Pagination from "../components/Pagination";

export default function Stores () {

    const {stores} = useContext(StoresContext)
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(9)

    //Get Current Posts
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    
    const currentPosts = stores.slice(indexOfFirstPost, indexOfLastPost)


    return (
        <>
        <StoreList stores={currentPosts}/>
        <Pagination
        postsPerPage={postsPerPage}
        totalPosts={stores.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        />
        </>
    )
}

