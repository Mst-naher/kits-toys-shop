import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";

import CategoryToy from "../components/CategoryToy";
import ToyDetails from "../pages/ToyDetails";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
// import PopularToys from "../pages/PopularToys";



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile/>,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "/categoryToy/:id",
        element: <CategoryToy></CategoryToy>,
      },
      {
        path: "/toyDetails",
        element: <ToyDetails></ToyDetails>,
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>Authentication Layout</h2>,
  },
  {
    path: "/toys",
    element: <h2>Toys Layout</h2>,
  },
  {
    path: "/*",
    element: <h2>Error440</h2>,
  },
]);

export default router