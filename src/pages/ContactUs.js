import React from "react";
import image from "../assets/Vector.png";
import Form from "../Components/Form";
import ContactCard from "../Layout/ContactCard";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <section className="main">
        <h1>Contact Us</h1>
        <img className="image" src={image} alt="wave" />
      </section>
      <section className="contact">
        <ContactCard />
        <Form />
      </section>
    </>
  );
};

export default ContactUs;
