import React from "react";
import { db } from "../firebase/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { ImLocation } from "react-icons/im";
import { MdTimeline } from "react-icons/md";
import { GiDuration } from "react-icons/gi";
import { MdOutlineAttachMoney } from "react-icons/md";

const JobDeleteCard = (props) => {
  const setDeleteSelectJobHandler = async () => {
    localStorage.setItem("job", props.job.title);
    console.log("deleted");

    console.log(localStorage.getItem("job"));
    await deleteDoc(doc(db, "jobs", props.job.title));

    window.location.reload(false);
  };
  return (
    <section className="main">
      <div className="hold">
        <div className="detail">
          <img src="/Images/kcloud.png" alt="" />
          <div>
            <h5>{props.job.title}</h5>
            <div className="job-info-upper">
              <p>{props.job.name}</p>
              <p> | posted on: {props.job.time}</p>
            </div>
            <div className="job-info-lower">
              <p>
                <ImLocation /> {props.job.location}
              </p>
              <p>
                <MdTimeline /> {props.job.experience} yr
              </p>
              <p>
                <GiDuration /> {props.job.type}
              </p>
            </div>
          </div>
        </div>
        <div className="more">
          <button
            style={{
              backgroundColor: "salmon",
              color: "white",
              border: "none",
            }}
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
