import { useNavigate } from "react-router"

export default function Search({handleInputChange, searchInput}) {


    return(
        <>
            <form className="searchbar hstack gap-2 ms-auto p-2" role="search">
                <input onChange={handleInputChange} className="form-control  search-input" name="searchInput" type="search" value={searchInput} placeholder="Search..." aria-label="Search"/>

            </form>
        </>
    )
}