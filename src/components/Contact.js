import React, { useState } from "react";
import { validateEmail } from "../assets/helpers";

function ContactMe() {

    const [formState, setFormState] = useState({ name: '', email: '', message: ''})
    
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
          console.log('Submit Form', formState);
        }
      };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
          const isValid = validateEmail(e.target.value);
          if (!isValid) {
            setErrorMessage('Your email is invalid.');
          } else {
            setErrorMessage('');
          }
        } else {
          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage('');
          }
        }
        if (!errorMessage) {
          setFormState({ ...formState, [e.target.name]: e.target.value });
        }
      }; 
    

    return(
        <>
        <div className="container contact-form">
            <form className="m-2" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label" htmlFor="name">Name:</label>
                    <input className="form-control" type="text" name="name" default={name} onBlur={handleChange}/>
                </div>
                <div className="mb-3" >
                    <label className="form-label" htmlFor="email">Email address:</label>
                    <input className="form-control" type="text" name="email" default={email} onBlur={handleChange}/>
                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor="message">Enter your Message:</label>
                    <textarea className="form-control" rows="5" name="message" default={message} onBlur={handleChange}/>
                </div>
                {errorMessage && (
                    <div>
                        <p className="text-danger">{errorMessage}</p>
                    </div>
                )}
                <button type="submit" className="btn btn-dark" >Send Message</button>
            </form>
        </div>
        </>
    )
}

export default ContactMe