
import "./Howitworks.css"

export default function HowItWorks (){
    return (
        <div className="pockit-show">
            <div className="container ">
                <h1 className="text-center">A Smarter Way to Shop</h1>
                <div className=" row row-cols-1 md:row-cols-3 g-4 my-4">
                    <div className="col">
                        <div className="how-card">
                            <img src="https://images.pexels.com/photos/11348150/pexels-photo-11348150.jpeg?auto=compress&cs=tinysrgb&w=1260" className="card-img-top card-image" alt="saving money"/>
                            <div className="my-3">
                                <h4 className="card-title text-center">Easy on Your Pocket</h4>
                                <p className="card-text text-center">You don't need to break the bank to live good. With pockit you can compare prices and choose what best suites you, all at the press of a button.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="how-card">
                            <img src="https://images.pexels.com/photos/5585793/pexels-photo-5585793.jpeg?auto=compress&dpr=1&h=750&w=1260" className="card-img-top card-image" alt="online shopping"/>
                            <div className="my-3">
                                <h4 className="card-title text-center">Live Good and Large</h4>
                                <p className="card-text text-center">You don't have to go browsing from one shop to another. Here you can check out different stores, best deals, new offers all at the comfort of your home</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="how-card">
                            <img src="https://images.openai.com/static-rsc-4/cYDSV5zdvm1K4BDFwKSrZJlIFDBM3MMGYw_yWHvOPxUTO1_PydRPd-fbuY7z5HhD9oFpgOPDhKbkU_GvN-Y5CcdPnXna4fVjfQz5xldgQ6Ht3SrYuIzF0KQx0j4jpnITBn3muH5W3uNxxcpmq2NcZKJX5EjmH8pJJM3BwjYEdx5nzMSOmxfUkk3ADsidL9CV?purpose=fullsize" className="card-img-top card-image" alt="discounts"/>
                            <div className="my-3">
                                <h4 className="card-title text-center">Get the Best Deals</h4>
                                <p className="card-text text-center">Get the latest discounts and vouchers from your favourite stores. Stay up to speed with the latest discounts and vouchers from you favourite shops. </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    

        
        </div>
        
    )
}