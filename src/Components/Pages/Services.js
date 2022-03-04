import React from "react";
import styled from "styled-components";
import Card from "../Card";
import image from "../../assets/Vector.png";
import Fade from "react-reveal/Fade";
import "./Services.css";
// import Cloud from "../../assets/Cloud.png";
function Services() {
    return (
        <Container>
            {/* <Banner>
                <Content>
                    <TagLine>Innovate, connect, inspire</TagLine>
                </Content>
            </Banner> */}
            <section className="main2">
                <h1>Services</h1>
                <img className="image2" src={image} alt="wave" />
            </section>
            <Fade bottom>
                <Cards>
                    <Card
                        head="Cloud Migration"
                        para="We assist you in digital transformation and cloud migration with the right strategy, roadmap, workflow model, and ecosystem collaborations through our cloud migration services. We collaborate with you to determine the best approach for your organisation – public, private, or hybrid. We use a customer-centric approach and pre-set templates as part of our cloud migration consulting services."
                        image="/Images/Cloud Migration.jpg"
                    />
                    <Card
                        head="App Development"
                        para="Are you one of the business venture, who are looking for the mobile app development service provider? You've come to the correct spot because we specialise in a wide range of mobile app development services that will aid in the growth of your business in the internet marketplace. Kloudclub's mobile application developers have developed world-class solutions for a variety of industrial verticals."
                        image="/Images/Android.png"
                    />
                    <Card
                        head="UI/UX Design"
                        para="Our UI/UX design and development services are designed to build user interfaces that make every digital interaction a pleasant one. We operate as an extension of a company's or startup's UX team, offering a deep knowledge of the business, design, and technical components to develop quality products with excellent user experiences that support the company's goals."
                        image="/Images/ux.png"
                    />
                </Cards>
                <Cards>
                    <Card
                        head="Artificial Intelligence/ Machine Learning"
                        para="With AI experience, technical services, and machine learning skills, you can boost your business's infrastructure and agility. Kloudclub provides organizations with ready-to-use AI-powered services that include intelligent features that help them achieve better business results. We offer a full range of AI/ML services, including the development, deployment, and management of AI-enabled solutions."
                        image="/Images/AI.jpg"
                    />
                    <Card
                        head="DevOps Development"
                        para="Collaboration, monitoring, tool-chain pipelines, automation, and Cloud adoption are all used in DevOps. We assure speedy application onboarding by automating end-to-end delivery pipelines and facilitating continuous integration and development across leading cloud platforms with our DevOps as a service solution. Kloudclub automates the end-to-end delivery pipeline across cloud platforms, resulting in a faster time to market, better efficiency, and lower cost. Our DevOps solutions assist enterprises in aligning their goals, generating high-quality software-based goods and services, quickly and reliably."
                        image="/Images/DevOps.jpg"
                    />
                    <Card
                        head="Web Development"
                        para="Through real innovations and global delivery approaches, we create the most secure and scalable web apps. We use cutting-edge tools and technologies, as well as reinforced frameworks and tried-and-true techniques, to revolutionise your business. By carefully merging mature project development approaches with proven project management, Kloudclub gives you more control and clarity over your web development project."
                        image="/Images/Web.jpg"
                    />
                </Cards>
                <Cards>
                    <Card
                        head="BlockChain"
                        para="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt molestias distinctio repellendus cumque vero labore
                nobis accusamus omnis eius nesciunt voluptatibus quis
                voluptates, quaerat voluptate sint quidem ullam excepturi error
                delectus suscipit expedita! Magnam asperiores voluptatem sit
                suscipit. Ipsum totam tempora, porro optio reprehenderit iure
                asperiores blanditiis at aspernatur dolore?"
                        image="/Images/BlockChain.jpg"
                    />
                    <Card
                        head="Ethical Hacking"
                        para="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt molestias distinctio repellendus cumque vero labore
                nobis accusamus omnis eius nesciunt voluptatibus quis
                voluptates, quaerat voluptate sint quidem ullam excepturi error
                delectus suscipit expedita! Magnam asperiores voluptatem sit
                suscipit. Ipsum totam tempora, porro optio reprehenderit iure
                asperiores blanditiis at aspernatur dolore?"
                        image="/Images/hacking.jpg"
                    />
                    <Card
                        head="Graphic Designing"
                        para="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Incidunt molestias distinctio repellendus cumque vero labore
                nobis accusamus omnis eius nesciunt voluptatibus quis
                voluptates, quaerat voluptate sint quidem ullam excepturi error
                delectus suscipit expedita! Magnam asperiores voluptatem sit
                suscipit. Ipsum totam tempora, porro optio reprehenderit iure
                asperiores blanditiis at aspernatur dolore?"
                        image="/Images/graphic.jpg"
                    />
                </Cards>
            </Fade>
        </Container>
    );
}

export default Services;

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: whitesmoke;
    margin-top: 80px;
    padding-bottom: 100px;
`;

// const Banner = styled.div`
//     height: 100vh;
//     background-image: url("/Images/cloud.jpg");
//     background-repeat: no-repeat;
//     background-attachment: fixed;
//     background-size: cover;
// `;

// const Content = styled.div`
//     width: 50%;
//     height: 400px;
//     background: inherit;
//     position: absolute;
//     overflow: hidden;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     border-radius: 8px;
//     &:before {
//         width: 110%;
//         height: 600px;
//         content: "";
//         background: inherit;
//         position: absolute;
//         left: -25px;
//         right: 0;
//         top: -25px;
//         bottom: 0;
//         box-shadow: inset 0 0 0 200px rgba(255, 255, 255, 0.1);
//         filter: blur(10px);
//     }
// `;

// const TagLine = styled.h1`
//     position: absolute;
//     text-align: center;
// `;

const Cards = styled.div`
    margin: auto;
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
