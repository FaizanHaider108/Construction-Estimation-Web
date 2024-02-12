import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="contact-wrapper">
        <div className="contact-content">
          <h3>Get in Touch</h3>
          <span>You can reach us anytime</span>
          <form action="">
            <label>Your Name</label>
            <input type="text" placeholder="name..." />
            <label>Your Email</label>
            <input type="email" placeholder="email..." />
            <label>Message</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Tell us how can we help you..."
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
