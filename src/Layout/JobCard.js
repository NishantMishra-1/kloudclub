import React from "react";
import Image from "../assets/Devops.png";
import "./JobCard.css";

const JobCard = (props) => {
    return (
        <section className="main">
            <div className="hold">
                <div className="detail">
                    <img src="/img/kcloud.png" alt="" />
                    <div>
                        <h5>{props.title}</h5>
                        <p>KloudClub</p>
                        <p>Address (On-site/Remote) </p>
                        <div>{props.description}</div>
                    </div>
                </div>
                <div className="skills">
                    <div className="skill">React</div>
                    <div className="skill">HTML</div>
                    <div className="skill">CSS</div>
                    <div className="skill">JavaScript</div>
                    <div className="skill">Api</div>
                    <div className="skill">OOPs</div>
                    <div className="skill">React</div>
                    <div className="skill">HTML</div>
                    <div className="skill">CSS</div>
                </div>
                <div className="more">
                    <a href="#">Know More-{">"}</a>
                </div>
                {/*<div>
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
                    <button className="job_apply_btn" onClick={props.onClick}>
                        {props.type || "Apply"}
                    </button>
                </div> */}
            </div>
        </section>
    );
};

export default JobCard;
