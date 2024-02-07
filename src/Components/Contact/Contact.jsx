import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="Contact" id="contact">
      <div className="Contact-wrapper">
        <div className="contact-content">
          <h1>Get in Touch</h1>
          <p>
            Feel free to get in touch with us by reaching out through email,
            contacting us directly, or visiting our forum. We assure you of a
            prompt response
          </p>
        </div>
        <div className="contact-form">
          <form className="form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea type="Message" placeholder="Your Message" />
            <button className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
