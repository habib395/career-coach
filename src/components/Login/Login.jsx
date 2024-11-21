import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../firebase/firebase.init";

const Login = () => {
  const {  handleLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider()

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    handleLogin(email, password)
      .then((res) => {
        navigate(location.state?.from || "/");
      })
      .catch((err) => {
        setError(err.message);
        toast.error("Invalid Email or Password.");
      });
  };

  const handleGoogleLoginTwo = () =>{
    signInWithPopup(auth, googleProvider)
    .then((result) =>{
      navigate(location.state?.from || "/");
      toast.success(`Welcome ${result.user.display})! Successfully logged In.`)
    })
    .catch((error) =>{
      toast.error(`Google Login Failed: ${error.massege}`)
    })
  }

  return (
    <div>
      <form
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <label className="label">
            <NavLink to={`/forgot?email=${encodeURIComponent(email)}`} className="label-text-alt link link-hover">
              Forgot password?
            </NavLink>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-accent">
            Login
          </button>
        </div>
        <button className="btn btn-active mt-4" onClick={handleGoogleLoginTwo}>
        <FaGoogle />Continue With Google
        </button>
        {error && <p className="text-red-500">Invalid Email or Password.</p>}
        <p>
          New to the website?{" "}
          <NavLink className="text-cyan-500" to="/register">
            Register
          </NavLink>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
