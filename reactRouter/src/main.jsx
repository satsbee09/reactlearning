import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider  } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home/Home";
import Contactus from "./components/Contactus/Contactus";
import Aboutus from "./components/AboutUs/Aboutus";
import User from "./components/User/User";

/*const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "aboutus",
        element: <Aboutus />,
      },
      {
        path: "contactus",
        element: <Contactus />,
      },
    ],
  },
]);*/
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='aboutus' element={<Aboutus />} />
      <Route path='contactus' element={<Contactus />} />
      <Route path='User/:userid' element={<User />} />
      <Route path='Github' element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
