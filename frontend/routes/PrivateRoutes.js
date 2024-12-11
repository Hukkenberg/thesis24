import React from 'react';
import { Navigate } from 'react-router-dom';
import { getRole } from './auth';

const PrivateRoute = ({ children, allowedRoles }) => {
    const role = getRole();
    return allowedRoles.includes(role) ? children : <Navigate to="/unauthorized" />;
};

export default PrivateRoute;
