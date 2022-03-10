import React from "react";
import {BsMouse} from 'react-icons/bs'
import { Link } from "react-router-dom";
import Heading from "./Components/Heading";
import styled from "styled-components";
import ServiceCard from "./Components/ServiceCard";
import "./Home.css";

export default function Home() {
  return (
    <HomeSection>
      <div className="main-home">
        <div className="home">
          <div className="tag-line">
            <p>Invent Today, Do more Tomorrow</p>
            <p className="sub-tag-line">
              KLOUDCLUB enables organizations to accelerate and unleash new
              endless opportunities.
            </p>
            <Link to="/jobs">
              <ApplyBtn className="home-apply-btn">Explore Jobs</ApplyBtn>
            </Link>
          </div>
          <div className="image">
            <div className="image-holder"></div>
          </div>
        </div>
      </div>
      <h2 className="mouse"><BsMouse/></h2>
      <h6>scroll</h6>
      <AboutSection>
        <Heading Topic="What We Do" />
        <section className="about">
          <div className="about_inner">
            <div className="about_inner_main">
              <div className="about_inner_left">
                <h4>
                  Our business is about technological solutions, Yes. But it’s
                  also about operations and customer relationships.
                </h4>
                <p>
                  KLOUDCLUB enables organizations to accelerate and unleash new
                  endless opportunities.
                </p>
              </div>
              <div className="about_inner_right">
                <p>
                  We Create quality optimal solution and services to our
                  clients, fulfilling project needs and striving for continual
                  excellence in all of our goods and services, all while
                  adhering to our established worldwide quality management
                  standards.
                </p>
                <ul>
                  <li>
                    <span>✔</span>
                    <p>
                      Our firm focuses on producing actual value through digital
                      transformation because of our extensive industry
                      experience and technical capabilities.
                    </p>
                  </li>
                  <li>
                    <span>✔</span>
                    <p>
                      Our knowledge in developing technology allows us to
                      traverse the most critical leaps for a variety of sectors.
                    </p>
                  </li>
                  <li>
                    <span>✔</span>
                    <p>
                      We develop high-performance technological solutions, we
                      offer extensive industry understanding and take a
                      collaborative approach
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AboutSection>
      <Services>
        <Heading Topic="Our Services" />
        <ServiceCards>
          <ServiceCard
            title="Cloud Migration"
            description="We assist you in digital transformation and cloud migration with the right strategy, roadmap, and workflow model."
            image="/Images/Cloud Migration2.jpg"
          />
          <ServiceCard
            title="App Development"
            description="Are you one of the business venture, who are looking for the mobile app development service provider?"
            image="/Images/App.jpg"
          />
        </ServiceCards>
        <ServiceCards>
          <ServiceCard
            title="UI/UX Design"
            description="Our UI/UX design and development services are designed to build user interfaces."
            image="/Images/ux.jpg"
          />
          <ServiceCard
            title="Artificial Intelligence/ Machine Learning"
            description="We offer a full range of AI/ML services, including the development, deployment, and management of AI-enabled solutions."
            image="/Images/AI2.jpg"
          />
        </ServiceCards>
        <ServiceCards>
          <ServiceCard
            title="DevOps Development"
            description="Collaboration, monitoring, tool-chain pipelines, automation, and Cloud adoption are all used in DevOps."
            image="/Images/DevOps.jpg"
          />
          <ServiceCard
            title="Web Development"
            description="Through real innovations and global delivery approaches, we create the most secure and scalable web apps."
            image="/Images/Web.jpg"
          />
        </ServiceCards>
      </Services>
    </HomeSection>
  );
}

const HomeSection = styled.div`
  background-color: white;
`;

const AboutSection = styled.div`
  margin-top: 100px;
`;

const Services = styled.div`
  margin: 0 50px 100px 50px;
`;

const ServiceCards = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px;
`;
const ApplyBtn = styled.button`
&:hover{
  background: #1087eb;
  color:white;
}
`