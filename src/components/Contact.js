import React from "react";

function ContactMe() {

    
    

    return(
        <>
        <div className="container contact-form">
            <form className="m-2">
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">Name:</label>
                    <input className="form-control" type="text" name="name"/>
                </div>
                <div className="mb-3" >
                    <label className="form-label" htmlFor="email">Email address:</label>
                    <input className="form-control" type="text" name="email"/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="message">Enter your Message:</label>
                    <textarea className="form-control" rows="5" name="message"/>
                </div>
                <button type="submit" className="btn btn-dark" >Send Message</button>
            </form>
        </div>
        </>
    )
}

export default ContactMe