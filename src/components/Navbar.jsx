import React from 'react';
import { Link, NavLink } from 'react-router';
import user from "/assets/user.png"
import MyContainer from './MyContainer';
import MyLink from './MyLink';


const Navbar = () => {
  return (
    <div>
      <MyContainer className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold text-secondary">
            Kids <span className="text-success">Toy Shop</span>
          </h1>
        </div>
        <div className=" ">
          <ul className="flex gap-5 ">
            <li>
              <MyLink to={"/"} className="">
               
                Home
              </MyLink>
            </li>
            <li>
              <MyLink to={"/profile"} className="">
               
                Profile
              </MyLink>
            </li>
          </ul>
        </div>
        <div className="login-btn flex gap-5">
          <img src={user} alt="" />
          <button className="btn btn-secondary px-10">
            <Link to={"/signin"}>Sign in</Link>
          </button>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;