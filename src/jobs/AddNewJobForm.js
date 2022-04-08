import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

const AddNewJobForm = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("");
  const [companyDescription, setCompanyDescription] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");
  const addJobHandler = async (event) => {
    event.preventDefault();
    setDescription("");
    setTitle("");
    setJobType("");
    setLocation("");
    setName("");
    setUrl("");
    setExperience("");
    setCompanyDescription("")
    
    var today = new Date();
    var date =
      today.getFullYear() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getDate();
    const data = {
      title: title,
      description: description,
      location: location,
      website: url,
      type: jobType,
      name: name,
      time: date,
      experience: experience,
      companyDescription:companyDescription,
    };

    // Add a new document in collection "jobs"
    await setDoc(doc(db, "jobs", title + ""), data);

    window.location.reload(false);
  };
  return (
    <>
      <div className="details">
        <div className="formData">
          <h2>Job Info</h2>
          <hr />
          <form className="form" onSubmit={addJobHandler}>
            <div className="personal_details">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                required
                placeholder="Job Title"
              />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                required
                placeholder="Company Name"
              />
            </div>
            <div className="area">
              <input
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                type="number"
                placeholder="Experience In Years"
                required
              />
              <input
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                type="text"
                placeholder="Company Website Url"
                required
              />
            </div>
            <div className="resume">
              <input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                type="text"
                placeholder="Job Location"
                required
              />
              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
              >
                <option defaultValue={"not mentioned"} hidden>
                  Select Job Type
                  </option>
                  <option value="Part Time">Part Time</option>
                  <option value="Full Time">Full Time</option>
                  <option value="C to C">C to C</option>
                  <option value="Contract">Contract</option>
              </select>
            </div>

            <div className="description">
              <textarea
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
                required
                placeholder="Full Description About the Company"
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                placeholder="Full Job Description"
              />
            </div>
            <input className="btn" type="submit" placeholder="Add Job" />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddNewJobForm;
