import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { routes } from "./routes";
import "./style.css";

function App() {
  const token = localStorage.getItem("token");
  return (
    <Router>
      <Routes>
        {routes.map((RouteItems, key) => {
          if (
            !token &&
            (RouteItems.path === "/login" ||
              RouteItems.path === "/register" ||
              RouteItems.path === "/forget-password")
          ) {
            return (
              <Route
                key={key}
                path={RouteItems.path}
                element={
                  <>
                    <RouteItems.layout>
                      <RouteItems.Component />
                    </RouteItems.layout>
                  </>
                }
              />
            );
          } else if (
            token &&
            RouteItems.path !== "/login" &&
            RouteItems.path !== "/register" &&
            RouteItems.path !== "/forget-password"
          ) {
            return (
              <Route
                key={key}
                path={RouteItems.path}
                element={
                  <>
                    <RouteItems.layout>
                      <RouteItems.Component />
                    </RouteItems.layout>
                  </>
                }
              />
            );
          }
        })}
        {!token && <Route path="/" element={<Navigate to={"/login"} />} />}
        {token && <Route path="/login" element={<Navigate to={"/"} />} />}
        {token && <Route path="/register" element={<Navigate to={"/"} />} />}
        {token && (
          <Route path="/forget-password" element={<Navigate to={"/"} />} />
        )}
        {/* <Route path={"*"} element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
