import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { NavLink } from "react-router-dom";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const { handleGoogleLogin, handleRegister, manageProfile } =
    useContext(AuthContext);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;
    // console.log(name, email, image, password)
    if (password.length < 6) {
      setError("Password Length must be at least 6 character.");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one UpperCase letter");
      return;
    }
    handleRegister(email, password).then((res) => {
      manageProfile(name, image);
    });
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
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
          placeholder="email"
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
          placeholder="photoURL"
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
          placeholder="password"
          className="input input-bordered"
          name="password"
          required
        />
        <button onClick={()=> setShowPassword(!showPassword)} className="btn btn-sm absolute right-2 top-11">
          {
            showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <MdOutlineRemoveRedEye />
          }
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
      <button className="btn btn-active" onClick={handleGoogleLogin}>
        Google Login
      </button>
      <p>
        {" "}
        Already Register?
        <NavLink className="text-cyan-500" to="/login">
          Login
        </NavLink>
      </p>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default Register;
