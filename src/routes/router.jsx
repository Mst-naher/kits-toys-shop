import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
// import Category from "../pages/Category";


const router = createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout></HomeLayout>,
    children:[
      {
        path:"",
        element:<Home></Home>
      },
      // {
      //   path:"/category/:id",
      //   element:<Category></Category>
      // },
   
    ] 
  },
  {
    path:"/auth",
    element:<h2>Authentication Layout</h2>
  },
  {
    path:"/toys",
    element:<h2>Toys Layout</h2>
  },
  {
    path:"/*",
    element:<h2>Error440</h2>
  },
]);

export default router