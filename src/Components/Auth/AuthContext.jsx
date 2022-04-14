import React, { useState, createContext, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

const AuthContext = createContext();

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  const [userName, setuserName] = context.username;
  const [dataLogin, setDataLogin] = context.dataLogin;
  const [openToken, setopenToken] = context.token;

  return {
    userName,
    setuserName,
    openToken,
    setopenToken,
    dataLogin,
    setDataLogin,
  };
};

export const Butuhlogin = ({ children }) => {
  const { userName, openToken } = useAuthContext();
  let location = useLocation();
  if (!userName || !openToken) {
    //redirect ke hal login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export const AuthProvider = ({ children }) => {
  let usrlocal = localStorage.getItem("username");
  let tokenlocal = localStorage.getItem("token");

  const [userName, setuserName] = useState(usrlocal);
  const [dataLogin, setDataLogin] = useState({});
  const [openToken, setopenToken] = useState(tokenlocal);

  return (
    <AuthContext.Provider
      value={{
        username: [userName, setuserName],
        dataLogin: [dataLogin, setDataLogin],
        token: [openToken, setopenToken],
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
