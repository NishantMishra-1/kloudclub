import React, { useState, useEffect } from "react";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import JobDeleteCard from "../Layout/JobDeleteCard";
import "./AllJobs.css";

let c= 0;
const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [jobTitle, setJobTitle] = useState();
  const [jobDescription, setJobDescription] = useState();

  useEffect(() => {
    const getData = async () => {
      const snap = await getDocs(collection(db, "jobs"));

      let data = [];
      snap.forEach((doc) => {
        data.push(doc.data());
      });

      setJobs(data);
    };
    getData();
  }, [c]);

  console.log(jobs);
  console.log(jobs);
  console.log(jobs.length);

  const deleteJobHandler = async () => {
    window.location.reload(false);
    c --;
  };

  const addJobHandler = async (event) => {
    event.preventDefault();
    setJobDescription("");
    setJobTitle("");
    const data = {
      title: jobTitle,
      description: jobDescription,
    };

    // Add a new document in collection "jobs"
    await setDoc(doc(db, "jobs", jobTitle + ""), data);
    c++;

    window.location.reload(false);
  };

  return (
    <div className="alljobs_holder">
      <div className="title">
        <p>All jobs</p>
      </div>
      <div className="add_job_holder">
        <form>
          <div className="add_job_inputs_holder">
            <input
              onChange={(e) => setJobTitle(e.target.value)}
              value={jobTitle}
              type="text"
              placeholder="Job Title"
            />
            <input
              onChange={(e) => setJobDescription(e.target.value)}
              value={jobDescription}
              type="text"
              placeholder="Job Description"
            />
          </div>
          <button type="submit" onClick={addJobHandler} className="add_job_btn">
            Add a job
          </button>
        </form>
      </div>
      <div className="all_jobs_main">
        <div className="all_jobs">
          {jobs.map((d) => {
            return (
              <JobDeleteCard
                title={d.title}
                description={d.description}
                onClick={deleteJobHandler}
                key={d.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
