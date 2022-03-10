import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    axios
      .post(
        "https://sheet.best/api/sheets/06e9fc34-f560-4e31-89fa-5ec102afc653",
        {
          Name: name,
          Email: email,
          Subject: subject,
          Message: message,
        }
      )
      .then((data) => {
        console.log(data);
      });

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-9 col-md-15 mx-auto shadow border bg-white p-4 rounded">
          <h2 className="text-center fw-bold mb-3">Get in touch with us</h2>
          <p className="text-center">
            Feel free to use the contact form below to contact us directly.
          </p>
          <form onSubmit={submitHandler}>
            <div id="form_alerts"></div>
            <div className="form-group mb-3">
              <input
                type="text"
                name="Name"
                className="form-control"
                placeholder="Enter your name"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
                autoComplete="off"
              />
              <input
                type="text"
                name="Email"
                className="form-control"
                style={{ marginLeft: "5px" }}
                placeholder="Enter your email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                autoComplete="off"
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                name="Subject"
                className="form-control"
                placeholder="Subject."
                required
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                autoComplete="off"
              />
            </div>
            <div className="form-group mb-3">
              <textarea
                name="Message"
                className="form-control"
                placeholder="Enter your message"
                rows="8"
                required
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                autoComplete="off"
              ></textarea>
            </div>
            <div className="submit_msg">
              <button
                className="btn me-2 msg_btn"
                type="submit"
                style={{ background: "green", color: "white" }}
              >
                Send message!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
