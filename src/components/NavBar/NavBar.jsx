import { Link } from "react-router";
import logo from "../../assets/Pockit logo.png"
import "./Nav.css"
import { useContext, useState } from "react";
import { StoresContext } from "../../contexts/StoresContext";
import { ProductsContext } from "../../contexts/ProductsContext";

export default function NavBar () {


    return (
        <nav className="navbar fixed-top sm:navbar-expand bg-1 fg-2">
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
                            

                            
                        </div>
                    </dialog>
              
            </div>
        </nav>
    );
}