import React, { useContext, useState } from "react";
import MyContainer from "../components/MyContainer";
import { Link } from "react-router";
import {  updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { FaEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);
  const { createUserWithEmailAndPasswordFunc } = useContext(AuthContext);
  
  const handleSignup = (e) => {
    e.preventDefault();
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    console.log("signup function start", {
      displayName,
      photoURL,
      email,
      password,
    });
  
    console.log(password.length)
    if (password.length <6) {
      toast.error("Password should be at least 6 digit");
      return;
    }
    const regExp =  /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if( !regExp.test(password)){
      toast.error(
        "Password must be at least 6 characters long and include at least one uppercase letter, and one lowercase letter."
      );
      return
    }
    setError('');
    setSuccess(false);

    createUserWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        updateProfile(auth.user, {
          displayName,
          photoURL,
        })
          .then(() => {
            console.log(res);
            setSuccess(true);
            e.target.reset();
            toast.success("Signup successful");
          })
          .catch((error) => {
            console.log(error);
            console.log(error.code);
            setError(error.message);

            toast.error(error.message);
          });
        console.log(res);
        toast.success("Signup successful");
      })
      .catch((error) => {
        console.log(error);
        console.log(error.code);
        toast.error(error.message);
      });
     



  };

  return (
    <MyContainer>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 p-6 lg:p-10 ">
        <div className="text-secondary">
          <h1 className="text-center text-sm md:text-xl lg:text-4xl font-extrabold drop-shadow-2xl">
            Create Your Account !!
          </h1>
          <p className="lg:text-lg  leading-relaxed">
            Join our Kids' World and choose your favorite toys.
          </p>
        </div>
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h2 className="text-3xl font-bold">Sign Up!</h2>
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="label">Name</label>
                <input
                  name="displayName "
                  type="text"
                  placeholder="Your name"
                  className="input"
                />
              </div>
              <div>
                <label className="label">Photo</label>
                <input
                  name="photoURL"
                  type="text"
                  placeholder="Your photo url here"
                  className="input"
                />
              </div>
              {/* Email field */}
              <div>
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input"
                />
              </div>
              {/* Password field*/}
              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input"
                  placeholder="......."
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-7 bottom-3  cursor-pointer"
                >
                  {show ? <FaEye /> : <IoEyeOff />}
                </span>
              </div>
              <div className="flex justify-center items-center gap-3 my-btn">
                <FcGoogle className="h-6 w-6" />
                <button type="button">Continue with Google</button>
              </div>

              <button
                type="submit"
                className="btn btn-bg-base mt-4 w-full text-gray-800 text-xl my-btn"
              >
                Sign Up
              </button>
              
            </form>
            <p>
              Already have an Account? Please
              <Link className="text-blue-700 hover:text-blue-400" to="/signin">
                Signin
              </Link>
            </p>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default Signup;
