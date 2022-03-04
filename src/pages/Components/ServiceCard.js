import React from "react";
import "./ServiceCard.css";

function ServiceCard(props) {
    return (
        <section className="holder_main1">
            <div className="holder">
                <div>
                    <img src={props.image} alt="Web" />
                </div>
                <div>
                    <div>
                        <h4>{props.title}</h4>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServiceCard;
