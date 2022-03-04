import React from "react";
import styled from "styled-components";

function Heading({ Topic }) {
    return <Head>{Topic}</Head>;
}

export default Heading;

const Head = styled.h1`
    text-align: center;
    font-size: 48px;
`;
