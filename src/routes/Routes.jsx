
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
    //   errorElement: ,
      children: [
       {
        index: true,
        element: <Home></Home>
       }
      ]
    },
  ]);



export default router;