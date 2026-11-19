import { Link } from "react-router";
import logo from "../assets/Pockit logo.png"
import "./Nav.css"

export default function NavBar () {
    return (
        <nav className="navbar sm:navbar-expand bg-1 fg-2">
            <div className="container-fluid">
                <div>
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="Pockit logo" width="100px"/>
                    </a>
                </div>
                
              
                    <dialog className="drawer drawer-end" tabindex="-1" id="navbarNav" aria-labelledby="navbarNavLabel" >
                        <div className="drawer-header">
                            <h5 className="drawer-title" id="navbarNavLabel">Menu</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
                        </div>
                        <div className="d-flex align-items-center w-100">
                            <div className="p-2 flex-grow-1">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" aria-current="page" to={"/stores"}>Stores</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/products"}>Products</Link>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                                    </li>
                                </ul>
                            </div>
                            

                            <form className="searchbar hstack gap-2 ms-auto p-2" role="search">
                                <input className="form-control  search-input" type="search" placeholder="Search to compare" aria-label="Search"/>
                                <button className="btn-solid btn-icon theme-secondary search-button" type="submit">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </dialog>
              
            </div>
        </nav>
    );
}