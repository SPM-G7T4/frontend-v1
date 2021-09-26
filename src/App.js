import { Route, Switch, useLocation, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Courses from "./pages/Courses/Courses";
import Schedule from "./pages/Schedule";
import Messages from "./pages/Messages";
import Badges from "./pages/Badges";

function App() {
  const location = useLocation();

  return (
    <>
      <Layout />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/courses">
          <Courses />
        </Route>
        <Route path="/schedule">
          <Schedule />
        </Route>
        <Route path="/messages">
          <Messages />
        </Route>
        <Route path="/badges">
          <Badges />
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
}

export default App;
