import React from "react";
import { db } from "../firebase/firebase";
import { deleteDoc, doc } from "firebase/firestore";

import "./JobDeleteCard.css";

const JobDeleteCard = (props) => {
  const setDeleteSelectJobHandler = async () => {
    localStorage.setItem("job", props.title);
    console.log("deleted");

    console.log(localStorage.getItem("job"));
    await deleteDoc(doc(db, "jobs", props.title));

    window.location.reload(false);
  };
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
          <button
            className="job_delete_btn"
            onClick={setDeleteSelectJobHandler}
          >
            Delete
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobDeleteCard;
