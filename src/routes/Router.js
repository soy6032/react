import { lazy } from "react";
import { Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout"));

/***** Pages ****/

 const Starter = lazy(() => import("../views/Starter"));
 const Login = lazy(() => import("../views/LoginForm"));
 const Join = lazy(() => import("../views/JoinForm"))
 const Info = lazy(() => import("../views/Info"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", element: <Navigate to="/" /> },
      { path: "/starter", exact: true, element: <Starter /> },
      { path: "/login", exact: true, element: <Login /> },
      { path: "/join", exact: true, element: <Join /> },
      { path: "/info/:noteIdx", exact: true, element: <Info /> },
    ],
  },
];

export default ThemeRoutes;
