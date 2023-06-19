import React from 'react';
import DashboardLayout from '../layouts/dashboard';
import PublicLayout from '../layouts/public';

const Dashboard = React.lazy(() => import('../container/dashboard'));
const Login = React.lazy(() => import('../container/login/index'));
const Register = React.lazy(() => import('../container/register/index'));
const ForgetPassword = React.lazy(() => import('../container/forgetPassword/index'));
const Profile = React.lazy(() => import('../container/profile/userInfo'));
const ChangePassword = React.lazy(() => import('../container/profile/changePassword'));
const Courses = React.lazy(() => import('../container/courses'));

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
  {
    layout: DashboardLayout,
    path: '/profile',
    exact: true,
    name: 'اطلاعات کاربری',
    breadcrumb: () => <span>اطلاعات کاربری</span>,
    Component: Profile,
  },
  {
    layout: DashboardLayout,
    path: '/changePassword',
    exact: true,
    name: 'تغییر کلمه عبور',
    breadcrumb: () => <span>تغییر کلمه عبور</span>,
    Component: ChangePassword,
  },
  {
    layout: DashboardLayout,
    path: '/course',
    exact: true,
    name: 'درس های من',
    breadcrumb: () => <span>مدیریت درس ها</span>,
    Component: Courses,
  },
];

export default routes;
