import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {loading, user} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <h1>Loading...</h1>
    }
    if(!user){
        return <Navigate state={{from:location.pathname}} to="/login"></Navigate>
    }
    return children
};

export default PrivateRoute;