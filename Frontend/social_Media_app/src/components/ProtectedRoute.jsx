import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("loginToken");

  return token ? <Outlet /> : <Navigate to={"/login"} />;
};

export default ProtectedRoute;
