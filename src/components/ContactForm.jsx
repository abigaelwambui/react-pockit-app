export default function ContactForm () {
    return (
        <>
        <div className="container" id="contact-form">
            <div id="contact-us" className="content mt-5 rounded-top bg-1 p-5 " >
                <h3>Contact Us!</h3>
                <div className="d-flex justify-content-center gap-5">
                    <div>
                        <img src="" className="rounded" width="100%"/>
                        </div>
                            <form className="contact p-3" id="contact-form">
                                <div className="row g-2">
                                    <div className="col-md-6">
                                        <label htmlFor="firstName" className="form-label">First Name</label>
                                        <input name="firstname" type="text" className="form-control" id="first-name" required/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="lastName" className="form-label">Last Name</label>
                                        <input name="lastname" type="text" className="form-control" id="last-name" required/>
                                    </div>
                                    <div className="col-md-8">
                                        <label htmlFor="emailInfo" className="form-label">Email</label>
                                        <input name="email" type="email" className="form-control" id="email-info" required/>
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                                        <input name="phonenumber" type="text" className="form-control" id="phone-number" placeholder="+25412345689"/>
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="comments" className="form-label">Comments</label>
                                        <textarea name="comments" className="form-control" id="comments" rows="3"></textarea>
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