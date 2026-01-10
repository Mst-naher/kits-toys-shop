import React, { useContext } from "react";
import { Link, NavLink } from "react-router";

import MyContainer from "./MyContainer";

import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
// import ThemeToggle from "./ThemeToggle";


const Navbar = () => {
 const { user } = useContext(AuthContext);
 console.log(user);


const handleSignOutUser = () => {
  signOut(auth)
  .then(()=>{
    console.log("signout is done")
    // setUser(null)
  })
  .catch((error)=>{
    console.log(error)
  })
};


const links = 
  <>
    <li>
      <NavLink to={"/"} className="">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to={"/profile"} className="">
        Profile
      </NavLink>
    </li>
  </>

  return (
    <div>
      <MyContainer className=" flex  justify-around  items-center">
        <h1 className="md:text-md lg:text-xl md:font-md lg:font-semibold text-secondary cursor-pointer">
          Kids <span className="flex md:flex-col text-success ">Toy Shop</span>
        </h1>
        <div className="flex justify-between items-center ">
          <div>
            <ul className="flex gap-5 ">{links}</ul>
          </div>
          {/* <div className="btn btn-secendary navbar-end btn-sm">
            <ThemeToggle />
          </div> */}
        </div>

        {user ? (
          <button
            onClick={handleSignOutUser}
            className=" btn btn-secondary md:px-2 lg:px-5"
          >
            <img
              className="md:h-5 md:w-5 lg:h-8 lg:w-8 rounded-full cursor-pointer"
              src="/public/user.png"
              alt="user"
            />
            Sign Out
          </button>
        ) : (
          <Link to={"/signin"}>
            <button
              // onClick={handleSigninUser}
              className="btn btn-secondary md:px-2 lg:px-5"
            >
              <img
                className="md:h-5 md:w-5 lg:h-8 lg:w-8 rounded-full cursor-pointer"
                src="/public/user.png"
                alt="user"
              />
              login
            </button>
          </Link>
        )}
      </MyContainer>
    </div>
  );
};

export default Navbar;
