import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import JobDeleteCard from "../Layout/JobDeleteCard";
import "./AllJobs.css";
import AddNewJobForm from "../jobs/AddNewJobForm";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [addNewJob, setAddNewJob] = useState(false);

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
  }, []);

  console.log(jobs);
  console.log(jobs);
  console.log(jobs.length);

  return (
    <>
      <div className="title">
        <p>All Jobs</p>
      </div>
      <button className="add_job_btn" onClick={() => setAddNewJob((prevState) => !prevState)}>
        Post Job
      </button>
      {!addNewJob && (
        <div className="alljobs_holder">
          <div className="all_jobs_main">
            <div className="all_jobs">
              {jobs.map((d) => {
                return (
                  <JobDeleteCard
                    job={d}
                    key={d.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
      {addNewJob && <AddNewJobForm />}
    </>
  );
};

export default AllJobs;
