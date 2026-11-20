export default function ShopCard ({store, handleClick}) {
    return <>
                <div className="card" style={{"max-width": "320px"}}>
                <div className="card-body">
                    <div className="heading my-5">
                        <h3 className="card-title">{store.name}</h3>
                        <p className="card-subtitle fg-3">{store.type} </p>                       
                    </div>
 
                    <a href={store.website}>Visit official site</a>
                    
                    <hr/>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                        <p className="d-grid gap-1">
                        <button className="btn-outline theme-accent" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Shop
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
                            </svg>
                        </button>
                        <button onClick={handleClick} className="btn-outline theme-accent" type="button">Review Store</button>
                    </p>
                    <div className="collapse" id="collapseExample">
                        <div className="container p-5">
                           <a className="nav-link" href="#price-drop">Featured Price Drops</a>
                        </div>
                    </div>
                    
                </div>
            </div> 
    </>
}