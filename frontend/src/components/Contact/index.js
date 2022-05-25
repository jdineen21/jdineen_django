import React from 'react';
import ContactForm from './ContactForm';
import "./Contact.css";

export default function Contact() {
    return (
        <section id="contact_section">
            <div className="container">
                <h1 className="contact_header">Contact</h1>
                <div className="contact_header_underline"></div>
                <ContactForm />
            </div>
        </section>
    );
}