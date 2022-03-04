import React, { useState, useEffect } from "react";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import JobDeleteCard from "../Layout/JobDeleteCard";
import "./AllJobs.css";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [deleteJob, setDeleteJobs] = useState("");


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

  console.log(jobs);
  console.log(jobs);
  console.log(jobs.length);

  const deleteHandler = async (d) => {
    // await deleteDoc(doc(db, "jobs", d.id));
    console.log(d.target.value)
    window.location.reload(false);
  };
  return (
    <>
      <div className="title">
        <p>All jobs</p>
      </div>
      <div className="all_jobs_main">
        <div className="all_jobs">
          {jobs.map((d) => {
            return (
              <JobDeleteCard
                key={d.id}
                title={d.title}
                description={d.description}
                onClick={deleteHandler}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllJobs;
