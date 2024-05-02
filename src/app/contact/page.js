"use client";
import React from "react";

import styles from "./Contact.module.css";

import ToastShelf from "@/components/ToastShelf";
import ToastProvider from "@/components/ToastProvider";
import ContactForm from "@/components/ContactForm";

function Contact() {
  return (
    <div className={styles.contact_form_container}>
      <ToastProvider>
        <ToastShelf />
        <ContactForm />
      </ToastProvider>
    </div>
  );
}

export default Contact;
