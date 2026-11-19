import { useContext, useState } from "react"
import { CouponsContext } from "../contexts/CouponsContext"

export default function Coupons({store}) {
    const {coupons} = useContext(CouponsContext)

    const [selectedCoupon, setSelectedCoupon] = useState(null)


    const storeCoupons = coupons.filter((coupon)=> coupon.retailerId === store.id)



    return (
        <>
        <div className="couponsitable table-card">
            <div className="header p-3">
                    <h3 className="fs-lg">
                        Available Coupons
                    </h3>
            </div>
            {storeCoupons.length === 0 ? (<p>Sorry! No coupons today</p>): (
                <div className="table-card">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Coupon</th>
                                <th>Code</th>
                            </tr>
                        </thead>
                        <tbody>
                            {storeCoupons.map((coupon)=> (
                                <tr key={coupon.id}>
                                    <td>
                                        <div className="container">
                                            <h4>{coupon.title}</h4>
                                            <p>{coupon.description}</p>
                                            <div className="d-flex">
                                                
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <button className="btn-outline theme-accent" onClick= {()=> setSelectedCoupon(coupon.id)} >{selectedCoupon === coupon.id ? coupon.code : "Get Code"}</button>
                                    </td>
                                </tr>

                            ))}
                        
                        </tbody>
                    </table>
                </div>
            )}
        </div>
        </>
    )
}