import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const loggedUser = useSelector((state) => state.user.loggedUser);

  const isLoggedIn = () => {
    const { email } = loggedUser;
    return email !== (null || undefined);
  };

  return isLoggedIn() ? children : <Navigate to="/login" />;
};
