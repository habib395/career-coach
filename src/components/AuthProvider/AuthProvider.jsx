import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase/firebase.init';
import { toast } from 'react-toastify';

export const AuthContext = createContext()
const AuthProvider = ({routes}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const handleRegister = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleLogin = (email, password)=>{
         return signInWithEmailAndPassword(auth, email, password)
    }

    const handleLogOut = ()=>{
        signOut(auth)
        toast("Logout SuccessFully")
    }

    const manageProfile = (name, image) =>{
        updateProfile(auth.currentUser,{
            displayName:name,photoURL:image
        })
    }

    const updateUserProfile = (updatedData) =>{
        return updateProfile(auth.currentUser , updatedData)
    }

    const authInfo = {
        handleRegister,
        handleLogin,
        handleLogOut,
        manageProfile,
        user,
        setUser,
        loading,
        updateUserProfile,
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            if(currentUser){
                setUser(currentUser)
            }else{
                setUser(null)
            }
            setLoading(false)

            return () =>{
                unsubscribe()
            }
        })
    },[])


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {
                    routes
                }
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;