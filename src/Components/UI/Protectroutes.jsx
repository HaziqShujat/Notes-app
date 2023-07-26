import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function Protectroutes({ auth, childern }) {
  if (auth) {
   console.log(auth)
    return childern;
  } else {
    
    return <Navigate to="/" replace />;
  }
}

export default Protectroutes;
