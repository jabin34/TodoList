import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const RequiredAuth = ({children}) => {
    const[user,loading] = useAuthState(auth);
   
    const location = useLocation();
    if(loading)
    {
      return <Loading/>;
    }
  if(!user){
     return <Navigate to ='/login' state={{from:location}} replace ></Navigate>
  }

    return children;
};

export default RequiredAuth;