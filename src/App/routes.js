import React from 'react';
import DashboardLayout from '../layouts/dashboard';
import PublicLayout from '../layouts/public';

const Dashboard = React.lazy(() => import('../container/dashboard'));
const Login = React.lazy(() => import('../container/login/index'));
const Register = React.lazy(() => import('../container/register/index'));
const ForgetPassword = React.lazy(() => import('../container/forgetPassword/index'));

const routes = [
  {
    path: '/',
    exact: true,
    name: 'داشبورد',
    breadcrumb: () => <span>داشبورد</span>,
    layout: DashboardLayout,
    Component: Dashboard,
  },
  {
    path: '/login',
    exact: true,
    name: 'ورود',
    breadcrumb: () => <span>ورود</span>,
    layout: PublicLayout,
    Component: Login,
  },
  {
    layout: PublicLayout,
    path: '/register',
    exact: true,
    name: 'ثبت نام',
    breadcrumb: () => <span>ثبت نام</span>,
    Component: Register,
  },
  {
    layout: PublicLayout,
    path: '/forget-password',
    exact: true,
    name: 'فراموشی رمزعبور',
    breadcrumb: () => <span>فراموشی رمزعبور</span>,
    Component: ForgetPassword,
  },
];

export default routes;
