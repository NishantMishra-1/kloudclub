import "./App.css";
import Services from "./Components/Pages/Services";
import Home from "./pages/Home";
import { Redirect, Route, Switch } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Layout from "./Layout/Layout";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/contact" exact>
                    <ContactUs />
                </Route>
                <Route path="/services" exact>
                    <Services />
                </Route>
                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
