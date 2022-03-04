import React, { useState } from "react";

import "./JobDeleteCard.css";

const JobDeleteCard = (props) => {
  const [deleteJob, setDeleteJobs] = useState("");
  const setDeleteSelectJobHandler = () => {
    setDeleteJobs(props.title)
  }
  return (
    <section className="holder_main">
      <div className="holder">
        <div>
          <img
            src="https://www.windaydigital.com/wp-content/uploads/2020/12/39998-web-development.gif"
            alt="Web"
          />
        </div>
        <div>
          <div>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
          </div>
          <button className="job_delete_btn" onClick={setDeleteSelectJobHandler}>
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobDeleteCard;
