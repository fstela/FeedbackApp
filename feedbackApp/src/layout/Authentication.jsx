import React, { useState, useRef, useContext } from "react";
import { useHistory, useLocation} from "react-router-dom";

import AuthContext from "../store/auth-context";
import axios from "../service/http";

import classes from "./Authentication.module.css";


function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Authentication = (props) => {
  let query = useQuery();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(true);
  const [isStudent, setIsStudent] = useState(query.get("type") === "student" ? true : false);
  const [isLoading, setIsLoading] = useState(false);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const [authError, setAuthError] = useState(null);

  const submitHandler = (event) => {
    event.preventDefault();
    setAuthError(null);
    setIsLoading(true);
    isLogin ? login() : register();
  };

  const register = () => {
    axios.post("/auth/register", {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
      userType: isStudent ? "student" : "teacher"
    }).then((res) => {
      authCtx.login(res.data.token, res.data.userType);
      setIsLoading(false);
      history.push("/activity");
    }, (err) => {
      setAuthError(err.response.data.error);
      setIsLoading(false);
    }).catch(err => {
      console.log(err);
      setAuthError("Server error");
      setIsLoading(false);
    });
  }

  const login = () => {
    axios.post("/auth/login", {
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    }).then((res) => {
      authCtx.login(res.data.token, res.data.userType);
      setIsLoading(false);
      history.push("/activity");
    }, (err) => {
      setAuthError(err.response.data.error);
      setIsLoading(false);
    }).catch(err => {
      console.log(err);
      setAuthError("Server error");
      setIsLoading(false);
    });
  }

  return (
    <section className={classes.auth}>
      <h1>
        <b>{isLogin ? "Welcome back! Login into your account" : "Howdy! Register to our app"}</b>
      </h1>
      { !isLogin && <>
        <div className={classes.accountType}>
        <p>Account type <span>{isStudent ? "Student" : "Teacher"}</span></p>
      </div>
      <div className={classes.users}>
        <div>
          <img
            className={!isStudent ? classes.selectedUser : classes.logo}
            src="media/LogoProf.png"
            alt="Logo prof"
            onClick={() => setIsStudent(false)}
          />
        </div>
        <div>
          <img
            className={isStudent ? classes.selectedUser : classes.logo}
            src="media/LogoStud.png"
            alt="Logo prof"
            onClick={() => setIsStudent(true)}
          />
        </div>
      </div>
        
      </> }
      
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.error}>{authError && <p>{authError}</p>}</div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {/* {isLoading && <p>Sending request...</p>} */}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Log in with an existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Authentication;
