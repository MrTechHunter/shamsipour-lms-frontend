import React, { Suspense, useEffect, useState } from 'react';
import './style.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import routes from './routes';
import FullScreen from '../components/loading/fullScreen';
import NotFound from '../components/notFound';
import { getLocalStorage, getSessionStorage } from '../helpers/storage';
import 'react-toastify/dist/ReactToastify.css';
import './ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  const [token, setToken] = useState(!!getLocalStorage('token') || getSessionStorage('token'));
  useEffect(() => {
    const _token = getLocalStorage('token') || getSessionStorage('token');
    _token ? setToken(true) : setToken(false);
  }, [getLocalStorage('token'), getSessionStorage('token'), window.location.pathname]);
  return (
    <Router>
      <ToastContainer
        position="bottom-left"
        autoClose={parseInt(`${process.env.REACT_APP_TOASTER_CLOSE_TIMEOUT}`)}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        {routes.map((RouteItems, key) => {
          if (
            !token &&
            (RouteItems.path === '/login' || RouteItems.path === '/register' || RouteItems.path === '/forget-password')
          ) {
            return (
              <Route
                key={key}
                path={RouteItems.path}
                element={
                  <Suspense fallback={<FullScreen />}>
                    <RouteItems.layout>
                      <RouteItems.Component />
                    </RouteItems.layout>
                  </Suspense>
                }
              />
            );
          } else if (
            token &&
            RouteItems.path !== '/login' &&
            RouteItems.path !== '/register' &&
            RouteItems.path !== '/forget-password'
          ) {
            return (
              <Route
                key={key}
                path={RouteItems.path}
                element={
                  <Suspense fallback={<FullScreen />}>
                    <RouteItems.layout>
                      <RouteItems.Component />
                    </RouteItems.layout>
                  </Suspense>
                }
              />
            );
          }
        })}
        {!token && <Route path="/" element={<Navigate to={'/login'} />} />}
        {token && <Route path="/login" element={<Navigate to={'/'} />} />}
        {token && <Route path="/register" element={<Navigate to={'/'} />} />}
        {token && <Route path="/forget-password" element={<Navigate to={'/'} />} />}
        <Route path={'*'} element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
