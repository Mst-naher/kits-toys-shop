import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import ForgetPassword from "../pages/ForgetPassword";
import PopularToys from "../components/PopularToys";
import ToyContainer from "../components/ToyContainer";
import ToyDetails from "../pages/ToyDetails";





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
        path: "home",
        element: <Home />,
      },
      {
        path: "toyContainer",
        element: <ToyContainer />,
      },
      {
        path: "popularToys",
        element: <PopularToys />,
        
      },
     
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "toyDetails/:id",
        element: <ToyDetails />,
      },
      {
        path: "forgetPassword",
        element: <ForgetPassword/>,
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
    path: "*",
    element: <h2>Error440</h2>,
  },
]);

export default router