import React from "react";
import JobCard from "../Layout/JobCard";
import "./JobCategories.css";

const JobCategories = (props) => {
  return (
    <>
      <h2>Select the job category</h2>
      <div className="job-categories">
        <div class="jobs">
          <JobCard onClick={props.onClick} title="Web Developer" description="a short note about the job profile"/>
          <JobCard onClick={props.onClick} title="Android Developer" description="a short note about the job profile"/>
          <JobCard onClick={props.onClick} title="UI/UX Developer" description="a short note about the job profile"/>
          <JobCard onClick={props.onClick} title="IOS Developer" description="a short note about the job profile"/>
          <JobCard onClick={props.onClick} title="Devops Engineer" description="a short note about the job profile"/>
          <JobCard onClick={props.onClick} title="Cloud Managememnt" description="a short note about the job profile"/>
        </div>
      </div>
    </>
  );
};

export default JobCategories;
