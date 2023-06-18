import React, { lazy } from "react";

import Public from "../layout/public";

const Login = lazy(() => import("../container/login"));

const routes = [
  {
    path: "/login",
    exact: true,
    layout: Public,
    Component: Login,
    name: "ورود",
  },
];

export default routes;
