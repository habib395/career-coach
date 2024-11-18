import React, { createContext } from 'react';

export const AuthContext = createContext()
const AuthProvider = ({routes}) => {

    
    return (
        <div>
            <AuthContext.Provider>
                {
                    routes
                }
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;