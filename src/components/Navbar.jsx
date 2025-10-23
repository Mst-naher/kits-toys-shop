import React from 'react';
import { NavLink } from 'react-router';
import user from "/assets/user.png"


const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-xl font-semibold text-secondary">
          Kids <span className="text-success">Toy Shop</span>
        </h1>
      </div>
      <div className="nav flex gap-5 text-accent text-md">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={user} alt="" />
        <button className="btn btn-secondary px-10">Login</button>
      </div>
    </div>
  );
};

export default Navbar;