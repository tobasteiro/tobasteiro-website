import React from "react";

import ReCAPTCHA from "react-google-recaptcha";

import styles from "./ContactForm.module.css";

import { ToastContext } from "@/components/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ContactForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
    captchaValue: "",
  });

  const { createToast } = React.useContext(ToastContext);

  const recaptcha = React.useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const captchaValue = recaptcha.current.getValue();

    if (!captchaValue) {
      createToast("error", "Please verify the reCAPTCHA!");

      return;
    }
    setSubmitted(true);

    const res = await fetch("/api/verify-captcha", {
      method: "POST",
      body: JSON.stringify({ captchaValue }),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data.success) {
      fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => res.json())
        .then((response) => {
          createToast("success", response.message);
        })
        .catch((err) => {
          createToast("error", err);
        });
    } else {
      createToast("error", "Captcha verification failed");
    }
  };

  return (
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

      {!submitted && process.env.NEXT_PUBLIC_SITE_KEY && (
        <>
          <div className={styles.form_group}>
            <button type="submit" className={styles.submit_btn}>
              Submit
            </button>
          </div>
          <div className={styles.form_group}>
            <ReCAPTCHA
              ref={recaptcha}
              sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
              render="explicit"
            />
          </div>
        </>
      )}
    </form>
  );
}

export default ContactForm;
