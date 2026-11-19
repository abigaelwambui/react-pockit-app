export default function Pagination ({postsPerPage, totalPosts, setCurrentPage, currentPage}) {

    let pages = [];
    
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }
    
    console.log(pages)


    return (
        <>
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end mx-5">

                {pages.map((page, index) => {
                    return (
                        <li key={index} className= {`page-item ${page === currentPage ? "active" : ""}`} >
                            <a onClick={()=> setCurrentPage(page)} className="page-link" href="#" aria-current="page">{page}</a>
                        </li>
                    )
                })}


            </ul>
        </nav>
        </>
    )
}