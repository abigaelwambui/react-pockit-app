import "./Storecards.css"

export default function StoreCard({store}) {

    return (
        <>
            <div className="col">
                <div className="card card-row">
                    <img src={store.imageUrl} className="card-img-start" alt={store.name}/>
                    <div className="card-body">
                        <h4 className="card-title">{store.name}</h4>
                        <p className="card-text">{store.couponStats.successfulCoupons} Coupons</p>
                        <p><small>Very High Coupon Success Rate</small></p>
                        <button className="btn-outline btn-small theme-accent">View store</button>
                    </div>
                </div>
            </div> 
        </>
    )
}