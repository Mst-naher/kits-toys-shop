import React, { useState } from 'react';
import { Link } from 'react-router';
import MyContainer from '../components/MyContainer';
import { FcGoogle } from 'react-icons/fc';
import { IoEyeOff } from 'react-icons/io5';
import { FaEye } from 'react-icons/fa';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import { toast } from 'react-toastify';

const Signin = () => {
  const [user, setUser] = useState(null)
  const [show, setShow] = useState(false);

     const handleSignin =(e)=>{
     e.preventDefault();
     const email = e.target.email?.value;
     const password = e.target.password?.value;
     console.log("signIN function start", { email, password });
    
    //  const regExp =  /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    //      if( !regExp.test(password)){
    //        toast.error(
    //          "Password must be at least 6 characters long and include at least one uppercase letter, and one lowercase letter."
    //        );
    //        return
    //      }
    
     signInWithEmailAndPassword(auth, email, password)
     .then((res)=> {console.log(res);
      setUser(res.user);
      toast.success("Signin successful");
     })
     .catch((e)=>{
      console.log(e);
      toast.error(e.messase); 
     })

     };

     const handleSignout = ()=>{

     }

 console.log(user)
  return (
    <MyContainer>
      <div>
        <div className="card bg-base-100 w-full mx-auto max-w-sm m-10 shadow-2xl">
          <div className="card-body p-5">
            {/* <h1 className="text-3xl font-bold">Please Singin </h1> */}
            {user ? (
              <div className="text-center space-y-3">
                {/* <img src={user ? .photoURL || "https://via.placeholder.com/88"} className='h-20 w-20 rounded-full mx-auto' alt="" /> */}
                <h2 className="text-2xl font-semibold mb-2 text-center text-white">
                  {user?.displayName}
                </h2>
                <p className="text-white/80">{user.email}</p>
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
                    className="input"
                    placeholder="Email"
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
                <div className="flex justify-center items-center gap-3 my-btn">
                  <FcGoogle className="h-6 w-6" />
                  <button type="button">Continue with Google</button>
                </div>
                <div className="mt-6">
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-bg-base mt-4 w-full text-gray-800 text-xl my-btn">
                  Login
                </button>
              </form>
            )}

            <p className="mt-6">
              New To Our Web Site? Please
              <Link className="text-green-700 hover:text-blue-400" to="/signup">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default Signin;