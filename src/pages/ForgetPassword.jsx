import React, { useRef, useState } from "react";
import MyContainer from "../components/MyContainer";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { IoEyeOff } from "react-icons/io5";
import { Link } from "react-router";
import { FaEye } from "react-icons/fa";

const ForgetPassword = () => {
  const [show, setShow] = useState(false);
   const emailRef = useRef(null);
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

  return (
    <MyContainer>
      <div className="card bg-base-100 w-full mx-auto max-w-sm m-10 shadow-2xl text-center ">
        <h1 className="text-3xl font-bold">Please reset your password </h1>
        <form>
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
              className="absolute left-70 bottom-3  cursor-pointer"
            >
              {show ? <FaEye /> : <IoEyeOff />}
            </span>
          </div>

          <button
            onClick={handleForgetPassword}
            type="button"
            className="hover:underline cursor-pointer m-6"
          >
            Forget password ?
          </button>
          <p className="m-5">
            <Link
              className="text-blue-700 hover:text-blue-400 "
              to="/signin"
            >
              signin
            </Link>
          </p>
        </form>
      </div>
    </MyContainer>
  );
};

export default ForgetPassword;
