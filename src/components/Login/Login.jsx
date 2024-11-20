import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../firebase/firebase.init";


const Login = () => {
  const {handleGoogleLogin, handleLogin, handleLogOut} = useContext(AuthContext);
  const [error, setError] = useState()
  const location = useLocation()
  const navigate = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    handleLogin(email, password)
    .then(res=>{
        navigate(location.state.from)
    })
    .catch(err=>{
        setError(err.message)
        toast.error("Invalid Email or Password.");
    })
}

  const handleForgetPassword = () => {
    if(!email){
      console.log("Please enter a valid email.")
    }else{
      sendPasswordResetEmail(auth, email)
      .then(()=>{
        alert("Password Reset Email send. Please check your Email.")
      })
    }
  }

    const googleLoginHandler = () =>{
        handleGoogleLogin()
        .then(res=>{
          navigate(location.state.from)
        })
    }

    
  return (
    <div>
    <form
      action=""
      onSubmit={handleSubmit}
      className="card-body bg-base-200 min-h-screen w-11/12 sm:w-1/2 mx-auto rounded-lg my-10"
    >
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          placeholder="email"
          className="input input-bordered"
          name="email"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          className="input input-bordered"
          name="password"
          required
        />
        <label onClick={handleForgetPassword} className="label">
          <a href="#" className="label-text-alt link link-hover">
           <NavLink to="/forgot">Forgot password?</NavLink>
          </a>
        </label>
      </div>
      
      <div className="form-control mt-6">
        <button type="submit" className="btn btn-accent">
          <NavLink to="/">Login</NavLink>
        </button>
      </div>
      <button className="btn btn-accent" onClick={handleLogOut}>logout</button>
      <button className="btn btn-active" onClick={googleLoginHandler}>Google Login</button>
      {error && <p className="text-red-500">Invalid Email or Password.</p>}
      <p>New to the website? <NavLink className="text-cyan-500" to="/register">register</NavLink></p>
    </form>
    <ToastContainer /> 
    </div>
  );
};

export default Login;
