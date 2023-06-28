import React from 'react';
import DashboardLayout from '../layouts/dashboard';
import PublicLayout from '../layouts/public';

const Dashboard = React.lazy(() => import('../container/dashboard'));
const Login = React.lazy(() => import('../container/login/index'));
const Register = React.lazy(() => import('../container/register/index'));
const ForgetPassword = React.lazy(() => import('../container/forgetPassword/index'));
const Profile = React.lazy(() => import('../container/profile/userInfo'));
const ChangePassword = React.lazy(() => import('../container/profile/changePassword'));
const Courses = React.lazy(() => import('../container/courses/admin'));
const AdminTeachersManagement = React.lazy(() => import('../container/userManagement/admin/teachers'));
const AdminStudentManagement = React.lazy(() => import('../container/userManagement/admin/students'));
const StudentDashboard = React.lazy(() => import('../container/dashboard/student'));
const AllCourse = React.lazy(() => import('../container/courses/allCourse'));
const StudentCourse = React.lazy(() => import('../container/courses/student'));
const studentExams = React.lazy(() => import('../container/exam/student'));

const routes = [
  {
    path: '/',
    exact: true,
    name: 'داشبورد',
    breadcrumb: () => <span>داشبورد</span>,
    layout: DashboardLayout,
    Component:
      localStorage.getItem('userInfo').role === 'Admin'
        ? Dashboard
        : localStorage.getItem('userInfo').role === 'Teacher'
        ? StudentDashboard
        : StudentDashboard,
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
    path: '/all-course',
    exact: true,
    name: 'درس های من',
    breadcrumb: () => <span>مدیریت درس ها</span>,
    Component: AllCourse,
  },
  {
    layout: DashboardLayout,
    path: '/teachersManagement',
    exact: true,
    name: 'مدیریت مدرسین',
    breadcrumb: () => <span>مدیریت مدرسین</span>,
    Component: AdminTeachersManagement,
  },
  {
    layout: DashboardLayout,
    path: '/studentManagement',
    exact: true,
    name: 'مدیریت دانشجویان',
    breadcrumb: () => <span>مدیریت دانشجویان</span>,
    Component: AdminStudentManagement,
  },
  {
    layout: DashboardLayout,
    path: '/student-course',
    exact: true,
    name: 'دوره های من',
    breadcrumb: () => <span>دوره های من</span>,
    Component: StudentCourse,
  },
  {
    layout: DashboardLayout,
    path: '/student-exams',
    exact: true,
    name: 'امتحانات',
    breadcrumb: () => <span>امتحانات</span>,
    Component: studentExams,
  },
];

export default routes;
