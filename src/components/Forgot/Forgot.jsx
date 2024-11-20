import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Forgot = () => {
    const { user } = useContext(AuthContext)
    console.log(user && user.email)
   return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                defaultValue={user && user.email}
                className="input input-bordered"
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
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Reset Password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
