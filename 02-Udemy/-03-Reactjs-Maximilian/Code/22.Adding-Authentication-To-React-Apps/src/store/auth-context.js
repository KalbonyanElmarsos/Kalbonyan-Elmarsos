import React, { useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  token: null,
  login: (token) => {},
  logout: () => {},
});

const calcExpireTime = (expectedExpireTime) => {
  const currentTime = new Date().getTime(); // in milliseconds
  const remainingTime = expectedExpireTime - currentTime;

  return remainingTime;
};
export const Provider = (props) => {
  const currentToken = localStorage.getItem("token")
    ? localStorage.getItem("token")
    : null;
  const [token, setToken] = useState(currentToken);

  const isLogged = !!token; // if exist then return true;

  let timeOut;

  const logoutHandler = () => {
    setToken(null);
    // if cst logout manually then remove time from memory
    if (timeOut) {
      clearTimeout(timeOut);
    }
  };

  const loginHandler = (token, expireIn) => {
    setToken(token);
    const expiredIn = calcExpireTime(expireIn);

    timeOut = setTimeout(logoutHandler, expiredIn);
  };

  const authObj = {
    token: token,
    isLoggedIn: isLogged,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={authObj}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
