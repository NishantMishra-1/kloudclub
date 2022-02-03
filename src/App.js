import "./App.css";
import Header from "./Components/Header";
import styled from "styled-components";
import Services from "./Components/Pages/Services";

function App() {
    return (
        <Container>
            <Header />
            <Services />
        </Container>
    );
}

export default App;

const Container = styled.div`
    background: lightblue;
    width: 100%;
`;
