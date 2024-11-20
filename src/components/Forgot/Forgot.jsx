import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase/firebase.init";
import "react-toastify/dist/ReactToastify.css";

const Forgot = () => {
  const location = useLocation();
  const emailFromQuery = new URLSearchParams(location.search).get("email"); 
  const [email, setEmail] = useState(emailFromQuery || "");

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter a valid email.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent. Redirecting to Gmail...");
        setTimeout(() => {
          window.location.href = "https://mail.google.com"; 
        }, 3000);
      })
      .catch((error) => {
        toast.error("Failed to send password reset email.");
        console.error("Error: ", error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form onSubmit={handlePasswordReset} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Update email state
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-accent">
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Forgot;
