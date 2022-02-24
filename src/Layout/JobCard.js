import React from "react";
import Image from "../assets/Devops.png";
import "./JobCard.css";

const JobCard = (props) => {
  return (
    <section>
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
          <button onClick={props.onClick}>Apply</button>
        </div>
      </div>
    </section>
  );
};

export default JobCard;
