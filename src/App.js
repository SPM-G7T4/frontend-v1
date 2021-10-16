import { Route, Switch, useLocation } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Course from "./pages/Course";
import Courses from "./pages/Courses";
import Schedule from "./pages/Schedule";
import Messages from "./pages/Messages";
import Badges from "./pages/Badges";
import Error404 from "./pages/Error404";
import Enrolments from "./pages/Enrolments";
import Learners from "./pages/Learners";
import LoginPage from "./pages/LoginPage";

function App() {
  const location = useLocation();
  if (!sessionStorage.getItem("auth-token")) {
    return <LoginPage />;
  } 

  return (
    <>
      <Layout />
      <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/courses/:courseId">
          <Course />
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
        <Route path="/enrolments">
          <Enrolments />
        </Route>
        <Route path="/learners">
          <Learners />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </>
  );
}

export default App;
