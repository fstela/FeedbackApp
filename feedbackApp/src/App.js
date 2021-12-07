import React from "react";
import "./App.css";
import { Home, Login, Activity } from "./pages";
import { Nav, Footer } from "./layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Router>
        <Nav />
        <div className="h-full mb-auto">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/activity" component={Activity} />
            {/* <Route path="*">
              <Redirect to="/" />
            </Route> */}
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
