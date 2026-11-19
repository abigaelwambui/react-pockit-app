import { useContext, useState } from "react"
import { ProductsContext } from "../../contexts/ProductsContext"
import "./SideBar.css"

export default function SideBar() {

    const {products, setProducts, allProducts} = useContext(ProductsContext)

    const [category, setCategory] = useState("")

    function handleChange(event) {
    const selectedCategory = event.target.value;

    setCategory(selectedCategory);

    if (selectedCategory === "all") {
        setProducts(allProducts);
    } else {
        const filteredProducts = allProducts.filter(
            (product) => product.category === selectedCategory
        );

        setProducts(filteredProducts);
    }
}

    return (
        <aside className="sidebar bg-1 p-3">
            <nav className="sidebar-nav border-bottom py-3">
                <div  className="sidebar-item flex justify-content-between align-items-center" >
                    <ul className="list-unstyled">
                        <li className="sidebar-header">
                            <h5>Categories</h5>
                        </li>
                        <li className="navbar-item">
                            <div className="form-field">
                            <input onChange={handleChange} className="radio" name="category" type="radio" id="all" checked={category === "all"} value="all"/>
                            <label htmlFor="radioLabel">View all</label>
                            </div>                           
                        </li>
                        <li className="navbar-item">
                            <div className="form-field">
                            <input onChange={handleChange} className="radio" name="category" type="radio" id="groceries" checked={category === "Groceries"} value="Groceries"/>
                            <label htmlFor="radioLabel">Groceries</label>
                            </div>                           
                        </li>
                        <li className="navbar-item">
                            <div className="form-field">
                            <input onChange={handleChange} className="radio" name="category" type="radio" id="electronics" checked={category === "Electronics"} value="Electronics"/>
                            <label htmlFor="radioLabel">Electronics</label>
                            </div>                           
                        </li>
                        <li className="navbar-item">
                            <div className="form-field">
                            <input onChange={handleChange} className="radio" name="category" type="radio" id="household" checked={category === "Household"} value="Household"/>
                            <label htmlFor="radioLabel">Household</label>
                            </div>                           
                        </li>
                        <li className="navbar-item">
                            <div className="form-field">
                            <input onChange={handleChange} className="radio" name="category" type="radio" id="fashion" checked={category === "Fashion"} value="Fashion"/>
                            <label htmlFor="radioLabel">Fashion</label>
                            </div>                           
                        </li>
                        <li className="navbar-item">
                            <div className="form-field">
                            <input onChange={handleChange} className="radio" name="category" type="radio" id="personal-care" checked={category === "Personal Care"} value="Personal Care"/>
                            <label htmlFor="radioLabel">Personal Care</label>
                            </div>                           
                        </li>
                    </ul>
                </div>
                <br/>
            </nav>  
            <br/>
            <div className="sidebar-footer mt-auto p-3">
                <ul className="list-unstyled">
                    <li className="sidebar-header">
                            <h5>Sort by</h5>
                        </li>
                    <li className="sidebar-item">
                        <input type="radio" name="sort" id="radioLabel" className="radio theme-secondary" />
                        <label htmlFor="radioLabel" className="p-2 hover-lift"> Featured </label>
                    </li>
                    <li className="sidebar-item">
                        <input type="radio" name="sort" id="radioLabel2" className="radio theme-secondary" />
                        <label htmlFor="radioLabel2" className="p-2 hover-lift">Price: Low to High</label>
                    </li>
                    <li className="sidebar-item">
                        <input type="radio" name="sort" id="radioLabel3" className="radio theme-secondary" />
                        <label htmlFor="radioLabel3" className="p-2 hover-lift">Price: High to Low</label> 
                    </li>
                    <li className="sidebar-item">
                        <input type="radio" name="sort" id="radioLabel4" className="radio theme-secondary" />
                        <label htmlFor="radioLabel4" className="p-2 hover-lift">Newest</label>
                    </li>
                </ul>
                
                  
                
            </div>
            
        </aside>
    )
}