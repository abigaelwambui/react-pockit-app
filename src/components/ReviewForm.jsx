export default function ReviewsForm () {
    return (
        <>
        <div className="card" id="contact-form">
            <div id="review-store" className="content mt-5 rounded-top bg-1 p-5 " >
                <h3>Share Your Reviews</h3>
                <div className="d-flex justify-content-center gap-5">
                    <div>
                        <img src="" className="rounded" width="100%"/>
                        </div>
                            <form className="contact p-3" id="contact-form">
                                <div className="row g-2">
                                    <div className="col-md-6">
                                        <label htmlFor="firstName" className="form-label">First Name</label>
                                        <input name="firstname" type="text" className="form-control" id="first-name"/>
                                    </div>
                                    <div className="col-md-8">
                                        <label htmlFor="emailInfo" className="form-label">Email</label>
                                        <input name="email" type="email" className="form-control" id="email-info"/>
                                    </div>

                                    <div className="col-md-12">
                                        <label htmlFor="reviews" className="form-label">Reviews</label>
                                        <textarea name="reviews" className="form-control" id="reviews" rows="3"></textarea>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <button type="submit" className="btn btn-primary">
                                            Submit
                                        </button>
                                    </div>
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