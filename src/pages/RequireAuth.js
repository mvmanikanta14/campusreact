import { useLocation, Navigate, Outlet } from "react-router-dom";
import tokenService from "../services/token.service";

const RequireAuth = () => {
  const location = useLocation();

  const isLoggedIn = !!tokenService.getLocalAccessToken();

  return(
    isLoggedIn ?
    <Outlet /> :
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
