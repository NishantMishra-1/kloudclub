import React from "react";
import { FiMail, FiSmartphone, FiMapPin } from "react-icons/fi";
import "./ContactCard.css";

const ContactCard = () => {
    return (
        <div className="d-flex justify-content-evenly align-items-center">
            <div className="location">
                <FiMapPin size={30} />
                <p>
                    62 Tennyson
                    <br />
                    dr short hills New jersey 07078
                </p>
            </div>
            <div className="email">
                <FiMail size={30} />
                <p>
                    contactus@kloudclub.com
                    <br />
                    support@kloudclub.com
                </p>
            </div>
            <div className="call">
                <FiSmartphone size={30} />
                <p>
                    ‪(646) 820-0084
                    <br />
                    ‪(201) 233 5978
                </p>
            </div>
        </div>
    );
};

export default ContactCard;
