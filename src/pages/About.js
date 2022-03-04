import React from "react";
import image from "../assets/Vector.png";
import "./About.css";
import "./Home.css";

const About = () => {
    return (
        <>
            <section className="main_section">
                <h1>About Us</h1>
                <img class="wave" src={image} alt="wave" />
            </section>
            <h1 style={{ textAlign: "center" }}>About</h1>
            <section className="about">
                <div className="about_inner">
                    <div className="about_inner_main">
                        <div className="about_inner_left">
                            <h4>
                                Our business is about technological solutions,
                                Yes. But it’s also about operations and customer
                                relationships.
                            </h4>
                            <p>
                                KLOUDCLUB enables organizations to accelerate
                                and unleash new endless opportunities.
                            </p>
                        </div>
                        <div className="about_inner_right">
                            <p>
                                We Create quality optimal solution and services
                                to our clients, fulfilling project needs and
                                striving for continual excellence in all of our
                                goods and services, all while adhering to our
                                established worldwide quality management
                                standards.
                            </p>
                            <ul>
                                <li>
                                    <span>✔</span>
                                    <p>
                                        Our firm focuses on producing actual
                                        value through digital transformation
                                        because of our extensive industry
                                        experience and technical capabilities.
                                    </p>
                                </li>
                                <li>
                                    <span>✔</span>
                                    <p>
                                        Our knowledge in developing technology
                                        allows us to traverse the most critical
                                        leaps for a variety of sectors.
                                    </p>
                                </li>
                                <li>
                                    <span>✔</span>
                                    <p>
                                        We develop high-performance
                                        technological solutions, we offer
                                        extensive industry understanding and
                                        take a collaborative approach
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
