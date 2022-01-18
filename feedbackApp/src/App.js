import React from "react";
import "./App.css";
import { Home, Login, ActivityStudent, ActivityTeacher } from "./pages";
import { Nav, Footer } from "./layout";
import { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import "antd/dist/antd.min.css";
import AuthContext from "./store/auth-context";

const App = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div className="flex flex-col h-screen">
      <Router>
        <Nav />
        <div className="h-full mb-auto">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            {authCtx.isLoggedIn && (
              <Route exact path="/ActivityStudent" component={ActivityTeacher} />
            )}
            {/* <Route path="*">
              <Redirect to="/" />
            </Route> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
