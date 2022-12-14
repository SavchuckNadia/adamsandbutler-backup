import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../context/auth/UserAuthContext";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  const isAdmin = user && user['role'] === 'ADMIN'

  console.log("Check user in Private: ", isAdmin);
  if (!isAdmin) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
