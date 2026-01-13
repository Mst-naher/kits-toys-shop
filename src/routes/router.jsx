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
import Promotion from "../pages/Promotion";
import LoadingSpinner from "../components/LoadingSpinner";
import CustomersSlider from "../pages/CustomersSlider";
import Cart from "../pages/Cart";
import NotFoundPage from "../components/NotFoundPage";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";


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
        path: "loadingSpinner",
        element: <LoadingSpinner />,
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
        path: "promotion",
        element: <Promotion />,
      },
      {
        path: "customersSlider",
        element: <CustomersSlider />,
      },
      {
        path: "cart",
        element: <Cart/>,
      },

      {
        path: "profile",
         element: (<PrivateRoute>
           <profile/>
         </PrivateRoute>),
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
        element: <ForgetPassword />,
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>Authentication Layout</h2>,
  },
 
  {
    path: "*",
    element: <NotFoundPage />
  },
]);

export default router