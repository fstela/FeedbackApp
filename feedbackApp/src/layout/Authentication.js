import { useState, useRef, useContext } from "react";
import classes from "./Authentication.module.css";
import AuthContext from "../store/auth-context";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Authentication = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const [isLogin, setIsLogin] = useState(true);
  const [isStudent, setIsStudent] = useState(true);
  const [isStudentEmailValid, setStudentEmailValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  // if(props.data!==null){
  //   if (props.data.studentToLogIn){
  //     switchAccountTypeHandler();
  //     alert("plm");
  //   }
  // }

  const switchAccountTypeHandler = () => {
    setIsStudent((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDPKSs4B46wOI48FQjGuqjZ-n9L0b3SJEE";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDPKSs4B46wOI48FQjGuqjZ-n9L0b3SJEE";
    }
    fetch(url, {
      method: "Post",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed";
            if (data && data.error && data.error.message) {
              errorMessage = data.error.message;
            }
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const expirationTime = new Date(
          new Date().getTime() + (+data.expiresIn * 1000)
        );
        authCtx.login(data.idToken, expirationTime.toISOString());
        history.replace("/ActivityStudent");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <div className={classes.users}>
        <div>
          <img
            className={!isStudent ? classes.selectedUser : classes.logo}
            src="media/LogoProf.png"
            alt="Logo prof"
            onClick={isStudent ? switchAccountTypeHandler : 0}
          />
        </div>
        <div>
          <img
            className={isStudent ? classes.selectedUser : classes.logo}
            src="media/LogoStud.png"
            alt="Logo prof"
            onClick={!isStudent ? switchAccountTypeHandler : 0}
          />
        </div>
      </div>
      <h1>
        <b>{isLogin ? "Login" : "Please select an account"}</b>
      </h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button>{isLogin ? "Login" : "Create Account"}</button>
          )}
          {isLoading && <p>Sending request</p>}
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
