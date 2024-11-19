import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebase/firebase.init';
import { toast } from 'react-toastify';

export const AuthContext = createContext()
const AuthProvider = ({routes}) => {
    const googleProvider = new GoogleAuthProvider()

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
    const handleGoogleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
        .then((result) => {
            toast.success(`Welcome ${result.user.displayName}! Successfully logged in.`);
            console.log("Google Login Success:", result.user);
          })
          .catch((error) => {
            toast.error(`Google Login Failed: ${error.message}`);
            console.error("Google Login Error:", error);
          });

    }

    const manageProfile = (name, image) =>{
        updateProfile(auth.currentUser,{
            displayName:name,photoURL:image
        })
    }

    const authInfo = {
        handleRegister,
        handleLogin,
        handleLogOut,
        handleGoogleLogin,
        manageProfile,
        user,
        setUser,
        loading
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            // console.log(currentUser)
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