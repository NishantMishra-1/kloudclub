import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import JobCard from "../Layout/JobCard";
import "./JobCategories.css";
import ViewJobModal from "../jobs/ViewJobModal";

const JobCategories = (props) => {
  const [jobs, setJobs] = useState([]);
  const [show, setShow] = useState({})

  useEffect(() => {
    const getData = async () => {
      const snap = await getDocs(collection(db, "jobs"));

      let data = [];
      snap.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data().title}`);
        data.push(doc.data());
      });

      // return snap
      setJobs(data);
    };
    getData();
  }, []);
  return (
    <div style={{height: "100%"}}>
      <div className="job-categories">
        <div className="jobs">
          {jobs.map((d) => {
            return (
              <JobCard
                onClick={() => setShow(d)}
                job={d}
                key={Math.random()}
              />
            );
          })}
        </div>
      </div>
      {console.log(show)}
      <ViewJobModal job={show} closeModal={() => setShow({})} />
    </div>
  );
};

export default JobCategories;
