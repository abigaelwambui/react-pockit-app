import { useContext, useState } from "react"
import { ReviewsContext } from "../contexts/ReviewsContext"

export default function ReviewsForm ({store}) {

    const {reviews, setReviews} = useContext(ReviewsContext)

    const [formData, setFormData] = useState({
        customerName: "",
        rating: 5,
        title: "",
        comment: "",
    })


    const [error, setError] = useState("")
    const [submitting, setSubmitting] = useState(false)

    function addReview (event) {

        event.preventDefault()

        if (!formData.customerName.trim() || !formData.title.trim() || !formData.comment.trim()) {
            setError("Please in the required fields")
            return;
        } 
        
        if(submitting) return;
        setError("")
        setSubmitting(true)
             

       
        fetch("http://localhost:4000/reviews", {
            method: "POST",
            headers: {
                "accept" : "application/json",
                "content-type" : "application/json"
            },
            body: JSON.stringify({...formData, 
                retailerId: store.id,
                date: new Date().toISOString().split("T")[0],
            })
        }
               
            )
            .then ((response)=> {
                if(!response.ok) {
                    throw new Error ("Failed to submit review")
                }
                return response.json()
            })
            .then ((data)=> {
                console.log("Review data:", (data))


                setReviews((prevReviews)=> [
                    ...prevReviews,
                    data
                ])

                setFormData({
                    customerName: "",
                    rating: 5,
                    title: "",
                    comment: ""
                })
                
                             
            }) 
            .catch (error => {
                console.error("Error adding review:", error)
                setError("Something went wrong , please try again later")
            })
            .finally(()=>{
                setSubmitting(false)
            })

    }

    function handleFormChange (event) {

        const { name, value } = event.target

        setFormData((prevForm)=> ({
            ...prevForm,
            [name] : name === "rating" ? Number(value) : value
        }))
    }


    

    return (
        <>
        <div className="card" id="contact-form">
            <div id="review-store" className="content mt-5 rounded-top bg-1 p-5 " >
                <h3>Share Your Reviews</h3>
                <div className="d-flex justify-content-center gap-5">
                    <div>
                        </div>
                            <form onSubmit={addReview} className="contact p-3" id="contact-form">
                                <div className="row g-2">
                                    <div className="col-md-6">
                                        <label htmlFor="firstName" className="form-label">Your Name</label>
                                        <input onChange={handleFormChange} name="customerName" type="text" className="form-control" placeholder="John Doe" id="first-name" value={formData.customerName} required/>
                                    </div>
                                    <div className="mb-3">
                                        <label>Rating</label>
                                        <select name="rating" value={formData.rating} onChange={handleFormChange} className="form-select rating-select">
                                            <option value="5">5 Stars</option>
                                            <option value="4">4 Stars</option>
                                            <option value="3">3 Stars</option>
                                            <option value="2">2 Stars</option>
                                            <option value="1">1 Star</option>
                                        </select>
                                    </div>

                                    <div className="col-md-8">
                                        <label htmlFor="emailInfo" className="form-label">Email</label>
                                        <input name="email" type="email" className="form-control" placeholder="example@email.com" id="email-info"/>
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="title" className="form-label">Review Title</label>
                                        <input onChange={handleFormChange} name="title" type="text" className="form-control" id="title" value={formData.title} required></input>
                                    </div>                                    

                                    <div className="col-md-12">
                                        <label htmlFor="reviews" className="form-label">Reviews</label>
                                        <textarea onChange={handleFormChange} name="comment" className="form-control" id="reviews" rows="3" value={formData.comment} required></textarea>
                                    </div>

                                    <div className="col-12 mt-3">
                                        <button type="submit" className="btn-outline btn-sm theme-secondary" disabled={submitting}>
                                            {submitting? "Submitting..." : "Submit your review"}
                                        </button>
                                    </div>
                                    <p><small>{error}</small></p>
                                </div>
                                
                                <p id="form-message" className="mt-3" role="status"></p>
                            </form>
                        
                        </div>
                    <div>

                </div>           
            </div>
        </div>
        </>
    )
}