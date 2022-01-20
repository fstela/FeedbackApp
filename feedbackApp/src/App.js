import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useContext } from "react";

import AuthContext from "./store/auth-context";
import Activity from "./pages/Activity";
import Home from "./pages/Home";
import Login from "./pages/Auth";
import { Nav } from "./layout";

import "./App.css";



const App = () => {
  const authCtx = useContext(AuthContext);
  return (
    <div className="flex flex-col h-screen">
      <Router>
        <Nav />
        <div className="h-full mb-auto">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/auth" component={Login} />
            {authCtx.isLoggedIn &&
              <Route exact path="/activity" component={Activity} />
            }
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
