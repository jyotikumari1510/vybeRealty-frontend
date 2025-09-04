import React from "react";
import { UserLayout } from "../components/layouts/UserLayout";
import Home from "../pages/Home";
import AdminLayout from "../pages/admin/AdminLayout";
import AdminHome from "../pages/admin/AdminHome";
import Details from "../pages/admin/formComponents/Details";
import Description from "../pages/admin/formComponents/Description";
import Features from "../pages/admin/formComponents/Features";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import Property from "../pages/Property";
import Login from "../pages/admin/auth/Login";
import SignUp from "../pages/admin/auth/SignUp";
import { HomePage } from "../pages/HomePage";
import AddProperty from "../pages/admin/property/AddProperty";

export const AppRoutes = [
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/properties",
        element: <Property />,
      },

      {
        path: "/admin",
        element: <AdminLayout />,
        children: [
          { index: true, element: <Login /> },
          // { path: "/admin", element: <Login /> },
          {
            path: "/admin/home",
            element: <HomePage />,
          },
          { path: "/admin/add", element: <AddProperty /> },
          { path: "/admin/signup", element: <SignUp /> },
          { path: "/admin/survey/", element: <Details /> },
          { path: "/admin/survey/2", element: <Description /> },
          { path: "/admin/survey/3", element: <Features /> },
        ],
      },
    ],
  },
];
