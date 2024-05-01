"use client";
import React from "react";

import styles from "./Contact.module.css";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = React.useState(false);

  const recaptcha = React.useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const captchaValue = recaptcha.current.getValue();

    if (!captchaValue) {
      alert("Please verify the reCAPTCHA!");
      return;
    }

    fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className={styles.contact_form_container}>
      {submitted ? (
        <p className={styles.success_message}>Thank you for your message!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className={styles.form_group}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.form_control}
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.form_control}
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.form_control}
            />
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
          {process.env.NEXT_PUBLIC_SITE_KEY && (
            <ReCAPTCHA
              ref={recaptcha}
              sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
              render="explicit"
            />
          )}
        </form>
      )}
    </div>
  );
}

export default Contact;
