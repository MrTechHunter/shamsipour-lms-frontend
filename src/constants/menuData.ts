export const adminMenu = [
  {
    icon: 'lms-home',
    id: 1,
    key: 'dashboard',
    name: 'داشبورد',
    parentId: null,
    to: '/',
  },
  {
    id: 2,
    name: 'مدیریت کاربران',
    icon: 'lms-books',
    to: '/adminUserManagement',
    key: 'adminUserManagement',
    parentId: null,
  },
  {
    id: 3,
    name: 'دوره ها',
    icon: 'lms-meter',
    to: '/course',
    key: 'course',
    _children: null,
  },
];

export const teacherMenu = [
  {
    id: 1,
    name: 'داشبورد',
    icon: 'lms-home',
    to: '/',
    key: 'dashboard',
  },
];
export const studentMenu = [
  {
    id: 1,
    name: 'داشبورد',
    icon: 'lms-home',
    to: '/',
    key: 'dashboard',
  },
  {
    id: 3,
    name: 'دوره های من',
    icon: 'lms-meter',
    to: '/course',
    key: 'course',
    _children: null,
  },
];
