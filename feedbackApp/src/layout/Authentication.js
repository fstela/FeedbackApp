import { useState } from "react";
import classes from "./Authentication.module.css";
const Authentication = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div>
      <section className={classes.auth}>
        <h1><b>{isLogin ? "Login" : "Please select an account"}</b></h1>
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
              {isLogin ? "Create new account" : "Log in with an existing account"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Authentication;