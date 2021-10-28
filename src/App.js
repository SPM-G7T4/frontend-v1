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
import Classes from "./pages/Classes";
// import Quizzes from "./pages/Quizzes";
import Class from "./pages/Class"

function App() {
  const location = useLocation();

  const isLoggedIn = sessionStorage.getItem("auth-token");
  const isAdmin = isLoggedIn === "admin" ? true : false;
  const isTrainer = isLoggedIn === "trainer" ? true : false;
  if (!isLoggedIn) {
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
        {isAdmin && (
          <>
            <Route path="/enrolments">
              <Enrolments />
            </Route>
            <Route path="/learners">
              <Learners />
            </Route>
          </>
        )}
        {isTrainer && (
          <>
            <Route path="/classes">
              <Classes />
            </Route>
            <Route path="/quizzes">
              <Quizzes />
            </Route>
            <Route path="/class/:courseId/:classId">
              <Class />
            </Route>
          </>
        )}
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </>
  );
}

export default App;
