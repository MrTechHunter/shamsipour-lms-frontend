import { lazy } from "react";
import PublicLayer from "../Layouts/public";
import Dashboard from "../Layouts/dashboard";

const Login = lazy(() => import("../Containers/login"));

export const routes = [
  {
    path: "/login",
    exact: true,
    layout: PublicLayer,
    name: "login",
    Component: Login,
  },
  {
    path: "/",
    exact: true,
    layout: Dashboard,
    name: "dashboard",
    Component: Login,
  },
];
