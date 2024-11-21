import React, { useContext } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { updateProfile } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "./../firebase/firebase.init";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const updateSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    })
      .then(() => {
        toast.success("Profile updated successfully!");
        e.target.reset()
      })
      .catch((error) => {
        toast.error("Error updating profile");
        console.error("Error updating profile:", error);
      });
  };

  return (
    <div className="bg-base-200">
      <Helmet>
        <title>Profile | LIFE COACH</title>
      </Helmet>
      <ToastContainer />
      <div className="flex-row sm:flex w-11/12 mx-auto">
        <div className="hero bg-base-300 rounded-lg">
          <div className="flex-col lg:flex-row-reverse">
            {user && (
              <div>
                <h1 className="text-3xl font-bold">Name : {user.displayName}</h1>
                <h2 className="text-lg py-6">Email : {user.email}</h2>
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="w-72 rounded-lg"
                />
              </div>
            )}
          </div>
        </div>
        <div className="hero bg-base-200 py-4">
          <div className="hero-content flex-col lg:flex-row-reverse px-0">
            <div className="card bg-base-100 ">
              <h2 className="text-center font-bold py-5">Update Profile</h2>
              <form onSubmit={updateSubmit} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    defaultValue={user && user.email}
                    className="input input-bordered"
                    disabled
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">PhotoURL</span>
                  </label>
                  <input
                    type="text"
                    name="image"
                    placeholder="PhotoURL"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-accent">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
