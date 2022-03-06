import "./App.css";
import Services from "./Components/Pages/Services";
import Home from "./pages/Home";
import { Redirect, Route, Switch } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Layout from "./Layout/Layout";
import About from "./pages/About";
import Jobs from "./pages/Jobs";
import Login from "./authentication/Login";
import AllJobs from "./admin/AllJobs";

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
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/jobs" exact>
          <Jobs />
        </Route>
        {localStorage.getItem("user") !== "LOGGED_IN" && (
          <Route path="/jobs/admin" exact>
            <Login />
          </Route>
        )}
        {localStorage.getItem("user") === "LOGGED_IN" && (
          <Route path="/jobs/admin" exact>
            <AllJobs />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
