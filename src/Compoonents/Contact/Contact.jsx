import React, { useRef, useState } from "react";
import emailjs from "emailjs-com"; // Make sure to import emailjs
import { toast, Toaster } from "react-hot-toast"; // Assuming you're using a toast library
import { motion } from "framer-motion";

import { fadeIn } from "../../../Varients.js";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        "service_eems4tf",
        "template_dg89qrl",
        formRef.current,
        "9fXt5OsMnxib8dybY"
      );

      setSubmitting(false);
      formRef.current.reset(); // Reset the form
      setSuccess(true);
      setError(false);
      toast.success("Form received. Will contact you soon 😊");
    } catch (error) {
      console.error(error.text);
      setSubmitting(false);
      setError(true);
      setSuccess(false);
      toast.error("An error occurred while submitting the form 😣");
    }
  };

  return (
    <div className="contact">
      <Toaster />
      <div className="contact-wrapper">
        <div className="left-content-section">
          <h3>Get in touch</h3>
          <p>
            Get precise construction estimates that empower you to plan and
            execute your projects flawlessly. With DigitalEstimator, you can
            rely on data-driven insights to keep your construction endeavors on
            track and within budget.
          </p>
        </div>
        <div className="right-content-section">
          <div className="form-content">
            <h4>Say Something!</h4>
          </div>
          <motion.form
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            ref={formRef}
            onSubmit={sendEmail}
          >
            <input type="text" placeholder="Name..." name="from_name" />

            <input type="text" placeholder="Email..." name="email_id" />

            <textarea
              cols="30"
              rows="10"
              placeholder="Tell us about your project"
              name="message"
            ></textarea>
            <input
              type="submit"
              value={submitting ? "Sending..." : "Send Message"}
              className="submit"
              disabled={submitting}
            />

            {error && <div>Error</div>}
            {success && <div>Success</div>}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
