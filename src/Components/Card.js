import React from "react";
import styled from "styled-components";
// import "../assets/AI.png"

function Card({ head, para, image }) {
    return (
        <Container>
            <Image src={image} />
            <Heading>{head}</Heading>
            <Content>{para}</Content>
            <Button>View More</Button>
        </Container>
    );
}

export default Card;

const Container = styled.div`
    margin: -100px 0 150px 0;
    background-color: white;
    width: 32%;
    height: 700px;
    text-align: center;
    padding: 20px;
    position: relative;
    &:hover {
        box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.5);
        transition: 0.1s ease-in;
        transform: scale(1.08);
    }
`;

const Image = styled.img`
    width: 150px;
    height: 150px;
    background-size: cover;
`;

const Heading = styled.h2`
    margin: 10px;
`;

const Content = styled.p`
    margin: 10px;
`;

const Button = styled.a`
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20px;
    padding: 10px 40px;
    border: 1px solid black;
    color: black;
    text-decoration: none;
    &:hover {
        background-color: black;
        color: white;
    }
`;
