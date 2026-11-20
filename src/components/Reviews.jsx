import { useContext } from "react"
import { ReviewsContext } from "../contexts/ReviewsContext"

export default function Reviews({store}) {

    const {reviews} = useContext(ReviewsContext)
    
    const storeReviews = reviews.filter((review)=> review.retailerId === store.id)
    
    return(
        <>
        <div className="container my-9">
            <h3>{store.name} Reviews</h3>
            <div className="row row-cols-1 md:row-cols-3 g-6 my-6">
                {storeReviews.map((review)=> {
                    return(
                        <div className="col">
                            <div className="card card-row">
                                <div className="card-body">
                                    <h5 className="card-title">{review.customerName}</h5>
                                    <p className="card-title">{review.title}</p>
                                    <p className="card-text">{review.comment}</p>
                                    <p><small>{review.date}</small></p>

                                </div>

                            </div>
                        </div>
                    )


                })}
            </div>
        </div>

        </>
    )
}