import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

const Register = () => {
  const { handleGoogleLogin, handleRegister, manageProfile } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;

 
    if (password.length < 6) {
      setError("Password length must be at least 6 characters.");
      toast.error("Password length must be at least 6 characters.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter.");
      toast.error("Password must contain at least one lowercase letter.");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter.");
      toast.error("Password must contain at least one uppercase letter.");
      return;
    }

    handleRegister(email, password)
      .then((res) => {
        manageProfile(name, image);
        toast.success("Registration successful!");
      })
      .catch((err) => {
        setError(err.message);
        toast.error(`Registration failed: ${err.message}`);
      });
  };

  return (
    <>
      <form
        action=""
        onSubmit={handleSubmit}
        className="card-body bg-base-200 min-h-screen w-1/2 mx-auto rounded-lg my-10"
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered"
            name="name"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered"
            name="email"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            placeholder="Photo URL"
            className="input input-bordered"
            name="image"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input input-bordered"
            name="password"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="btn btn-sm absolute right-2 top-11"
          >
            {showPassword ? <FaRegEyeSlash /> : <MdOutlineRemoveRedEye />}
          </button>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-accent">Register</button>
        </div>
        <button
          type="button"
          className="btn btn-active mt-4"
          onClick={handleGoogleLogin}
        >
          Google Login
        </button>
        <p className="mt-4">
          Already Registered?{" "}
          <NavLink className="text-cyan-500" to="/login">
            Login
          </NavLink>
        </p>
        {error && <p className="text-red-500">{error}</p>}
      </form>
      <ToastContainer /> 
    </>
  );
};

export default Register;
