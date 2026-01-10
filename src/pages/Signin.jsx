import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router";
import MyContainer from "../components/MyContainer";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOff } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import {
  GoogleAuthProvider,
  sendPasswordResetEmail,
  // signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";

const googleProvider = new GoogleAuthProvider();

const Signin = () => {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);
   const { signInWithEmailAndPasswordFunc } = useContext(AuthContext);

  const emailRef = useRef(null);

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    console.log("signIN function start", { email, password });

    signInWithEmailAndPasswordFunc( email, password)
      .then((res) => {
        console.log(res);
        setUser(res.user);
        toast.success("Signin successful");
      })
      .catch((error) => {
        console.log(error);
        toast.error(e.messase);
      });
  };

  const handleGoogleSignin = () => {
    console.log("goole signing");
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        console.log(res);
        setUser(res.user);
        toast.success("Signin successful");
      })
      .catch((e) => {
        console.log(e);
        toast.error(e.messase);
      });
  };

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Signout successful");
        setUser(null);
      })
      .catch((error) => {
        console.log('error is happend', error);
        toast.error(error.messase);
      });
  };

  const handleForgetPassword = (e) => {
    e.preventDefault();
    console.log(e.target.email);
    // console.log(email)
    const email = emailRef.current.value;
    sendPasswordResetEmail(auth, email)
      .then((res) => {
        toast.success("Check your email to reset the password");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  // console.log(user);
  return (
    <MyContainer>
      <div>
        <div className="card bg-base-100 w-full mx-auto max-w-sm m-10 shadow-2xl">
          <div className="card-body p-5">
            <h1 className="text-3xl font-bold">Please Singin </h1>
            {user ? (
              <div className="text-center space-y-3 bg-amber-200 p-5">
                <img
                  src={user?.photoURL || "https://via.placeholder.com/88"}
                  className="h-20 w-20 rounded-full mx-auto"
                  alt=""
                />
                <h2 className="text-xl font-semibold mb-2 text-center text-white">
                  {user?.displayName}
                </h2>
                <p className="text-red/80">{user?.email}</p>
                <button
                  onClick={handleSignout}
                  className="btn btn-bg-base mt-4 w-full text-gray-800 text-xl my-btn"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <form onSubmit={handleSignin}>
                {/* Email field */}

                <div className="mt-4">
                  <label className="block text-sm mb-1">Email</label>
                  <input
                    name="email"
                    type="email"
                    ref={emailRef}
                    className="input"
                    placeholder="example@email.com"
                  />
                </div>
                {/* Password field*/}
                <div className="mt-4 relative">
                  <label className="block text-sm mb-1">Password</label>
                  <input
                    type={show ? "text" : "password"}
                    name="password"
                    className="input"
                    placeholder="........."
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-9 bottom-3  cursor-pointer"
                  >
                    {show ? <FaEye /> : <IoEyeOff />}
                  </span>
                </div>

                <button
                  onClick={handleForgetPassword}
                  type="button"
                  className="hover:underline cursor-pointer"
                >
                  {/* Forget password ? */}
                </button>
                <p>
                  <Link
                    className="text-blue-700 hover:text-blue-400 mb-5"
                    to="/forgetPassword"
                  >
                    reset password ?
                  </Link>
                </p>
                <button type="submit" className="my-btn w-full">
                  Login
                </button>
                {/* divider */}
                <div className="flex items-center justify-center gap-2 my-5 ">
                  <div className="h-px w-16 bg-black/30"></div>
                  <span className="text-sm text-blue/70">or</span>
                  <div className="h-px w-16 bg-black/30"></div>
                </div>

                <div className="flex justify-center items-center gap-3 my-btn cursor-pointer">
                  <FcGoogle className="h-6 w-6" />
                  <button type="button" onClick={handleGoogleSignin}>
                    Continue with Google
                  </button>
                </div>
                <div className="mt-6">
                  <a className="link link-hover">Don't have an account?</a>

                  <Link
                    className="text-blue-700 hover:text-blue-400"
                    to="/signup"
                  >
                    Signup
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default Signin;
