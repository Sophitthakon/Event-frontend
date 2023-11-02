import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const isLoggedIn = localStorage.getItem("token");

  return isLoggedIn != null ? (
    <Navigate to="/home" />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
