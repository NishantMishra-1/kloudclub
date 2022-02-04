import "./App.css";
import Home from "./pages/Home";
import { Redirect, Route, Switch } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Layout from "./Layout/Layout";
import About from "./pages/About";

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
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;