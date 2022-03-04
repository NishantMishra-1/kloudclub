import axios from "axios";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import storage from "../firebase/firebase";
import "./Jobs.css";
import JobCategories from "../Components/JobCategories";

const Jobs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [resume, setResume] = useState(null);
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [job, setJob] = useState("");
  const [resumeUrl, setResumeUrl] = useState("");
  const [category, setCategory] = useState(false);

  const categoryChangeHandler = () => {
    setCategory(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setJob("");
    setDescription("");
    setCountry("");
    setContact("");
    setResume(null);

    const fileRef = ref(storage, resume.name);
    var URL = "";
    uploadBytes(fileRef, resume).then(() => {
      getDownloadURL(fileRef).then((url) => {
        setResumeUrl(url);
        URL = url;
      });
    });

    setTimeout(() => sendDataToSheet(URL), 7000);
  };
  const sendDataToSheet = (URL) => {
    axios
      .post(
        "https://sheet.best/api/sheets/75b4a4d9-7714-4515-ab0b-868862e27678",
        {
          name: name,
          resume: URL,
          job: job,
          description: description,
          email: email,
          contact: contact,
          country: country,
          date: new Date().toISOString().slice(0, 10),
        }
      )
      .then((data) => {
        console.log("uploaded");
      });
  };

  return (
    <>
      <div className="title">
        <p>Apply for the Job</p>
      </div>
      {category && (
        <div className="details">
          <div className="formData">
            <h2>General Information</h2>
            <hr />
            <form className="form" onSubmit={submitHandler}>
              <div className="personal_details">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  required
                  placeholder="Your name"
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  placeholder="Your email"
                />
              </div>
              <div className="area">
                <input
                  minLength={10}
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  type="number"
                  placeholder="Enter you number"
                  required
                />
                <input
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  type="txet"
                  placeholder="Country"
                  required
                />
              </div>
              <div className="resume">
                <input
                  onChange={(e) => setResume(e.target.files[0])}
                  type="file"
                  placeholder="Resume"
                  required
                />
                <select value={job} onChange={(e) => setJob(e.target.value)}>
                  <option defaultValue={"not mentioned"} hidden>
                    select job
                  </option>
                  <option value="web development">web development</option>
                  <option value="cloud">cloud</option>
                  <option value="android">android</option>
                  <option value="ios">ios</option>
                  <option value="ui">ui/ux</option>
                  <option value="devops">devops</option>
                </select>
              </div>
              <div className="description">
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  placeholder="Tell us about Yourself"
                />
              </div>
              <input className="btn" type="submit" placeholder="submit" />
            </form>
          </div>
        </div>
      )}
      {!category && <JobCategories onClick={categoryChangeHandler} />}
    </>
  );
};

export default Jobs;
