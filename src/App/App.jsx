import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import routes from "./routes";

function App() {
  const [token, setToken] = useState(
    false
    // !!getLocalStorage("token") || getSessionStorage("token")
  );
  // useEffect(() => {
  //   const _token = getLocalStorage("token") || getSessionStorage("token");
  //   _token ? setToken(true) : setToken(false);
  // }, [
  //   getLocalStorage("token"),
  //   getSessionStorage("token"),
  //   window.location.pathname,
  // ]);
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
                  <RouteItems.layout>
                    <RouteItems.Component />
                  </RouteItems.layout>
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
                  <RouteItems.layout>
                    <RouteItems.Component />
                  </RouteItems.layout>
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
