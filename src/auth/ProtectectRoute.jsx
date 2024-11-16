import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { getUserRole, isAuthenticated } from '../services/config';

const ProtectectRoute = ({children, allowedRoles}) => {
    const location = useLocation();
    const isAuth = isAuthenticated();
    const userRole = getUserRole();

    if (isAuth) {
        return <Navigate to="/login" state={{ from: location }}
        replace />;
    }

    if (allowedRoles && !allowedRoles.includes(userRole)) {
        const dashboardRoutes = {
            farmer: "/"
        }
    }
  return (
    <div>

    </div>
  )
}

export default ProtectectRoute;