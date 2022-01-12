import { useState } from "react";
import classes from "./Authentication.module.css";
import Home from "../pages/Home";
const Authentication = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isStudent, setIsStudent] = useState(true);
  const [isStudentEmailValid, setStudentEmailValid] = useState(true);

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
  
  // const switchStudentEmailValidHandler = () => {
  //   if(isStudent){
  //     const regex= '^.*@stud\.ase\.ro$';
  //     regex.test()
  //   }
  // };

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
        <form>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input type="password" id="password" required />
          </div>
          <div className={classes.actions}>
            <button>{isLogin ? "Login" : "Create Account"}</button>
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin
                ? "Create new account"
                : "Log in with an existing account"}
            </button>
          </div>
        </form>
      </section>
  );
};

export default Authentication;
