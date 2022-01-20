import { useState } from "react";
import React from "react";
import { AUTH_TOKEN } from "../service/http";

const ACCOUNT_TYPE_KEY = "ACCOUNT_TYPE";

const AuthContext = React.createContext({
  token: "",
  login: (token) => {},
  logout: () => {},
  isLoggedIn: false,
  isStudent: false,
  isTeacher: false,
});

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem(AUTH_TOKEN);
  return storedToken;
};

const retriveAccountType = () => {
  const status = {
    isStudent: false,
    isTeacher: false,
  };
  const type = localStorage.getItem("ACCOUNT_TYPE");
  if (type) {
    type === "student" ? (status.isStudent = true) : (status.isTeacher = true);
  }

  return status;
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  const accountData = retriveAccountType();
  const [token, setToken] = useState(tokenData ? tokenData : undefined);
  const [isStudent, setIsStudent] = useState(accountData.isStudent);
  const userIsLoggedIn = !!token;
  //if string token is empty returns false, else returns true

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem(AUTH_TOKEN);
    localStorage.removeItem(ACCOUNT_TYPE_KEY);
  };

  const loginHandler = (token, accountType) => {
    accountType === "student" ? setIsStudent(true) : setIsStudent(false);
    localStorage.setItem(AUTH_TOKEN, token);
    localStorage.setItem(ACCOUNT_TYPE_KEY, accountType);
    setToken(token);
  };

  const contextValue = {
    token: token,
    login: loginHandler,
    logout: logoutHandler,
    isLoggedIn: userIsLoggedIn,
    isStudent: isStudent,
    isTeacher: !isStudent,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
