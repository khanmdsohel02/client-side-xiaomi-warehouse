import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import UseFirebase from '../Hooks/usafirebase/Usefirebase';



const RequireAuth = ({ children }) => {
    const { user } = UseFirebase();

  let location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
    return children;
};

export default RequireAuth;