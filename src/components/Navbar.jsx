import React, { use,  } from "react";
import { Link,  } from "react-router";

import MyContainer from "./MyContainer";

import { AuthContext } from "../context/AuthContext";
// import { signOut } from "firebase/auth";
// import { auth } from "../firebase/firebase.config";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../Providers/CartContext";
import MyLink from "./MyLink";
import toast from "daisyui/components/toast";
import { ClockLoader } from "react-spinners";

// import ThemeToggle from "./ThemeToggle";


const Navbar = () => {
  //const result = useContext(AuthContext);
  const { user, signoutUserFunc, setUser, loading, setLoading } = use(AuthContext);
  console.log(user);
  const {cart, setCart} = use(CartContext);

// const handleSigninUser =()=>{

// }

 const handleSignout = () => {
    signoutUserFunc()
      .then(() => {
        toast.success("Signout successful");
        setUser(null);
      })
      .catch((error) => {
        console.log("error is happend", error);
        toast.error("error.messase");
      });
  };


const links = (
  <>
    <li>
      <MyLink to={"/"} className="">
        Home
      </MyLink>
    </li>
      {user && (
    <li>
        <MyLink to={"profile"} className="">
          Profile
        </MyLink>
    </li>
      )}
    <li>
      <MyLink to={"/cart"} className="">
        <div className="relative">
          <ShoppingCart />
          <p className="absolute -top-3 -right-3">{cart.length}</p>
        </div>
      </MyLink>
    </li>
  </>
);

console.log(loading)
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

        {loading ? (
          <ClockLoader color="#e74c3c"/>
        ) : user ? (
          <div className="text-center space-y-3 ">
            {/* //Daisy */}
            <button
              className="btn"
              popoverTarget="popover-1"
              style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}
            >
              <img
                src={user?.photoURL || "/demo-user.png"}
                className="h-[40px] w-[40px] rounded-full mx-auto"
                alt="user"
              />
            </button>

            <div
              className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
              popover="auto"
              id="popover-1"
              style={
                { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
              }
            >
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
          </div>
        ) : (
          <button className="btn btn-secondary md:px-2 lg:px-5">
            <Link to={"/signin"}> login</Link>
          </button>
        )}
      </MyContainer>
    </div>
  );
};

export default Navbar;
