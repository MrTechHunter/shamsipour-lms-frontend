export const adminMenu = [
  {
    _children: null,
    icon: 'lms-home',
    id: 1,
    key: 'dashboard',
    name: 'داشبورد',
    parentId: null,
    to: '/',
  },
  {
    _children: [
      {
        id: 21,
        name: 'مدیریت مدرسین',
        parentId: 2,
        key: 'teachers',
        icon: 'lms-books',
        to: '/teachersManagement',
        _children: null,
      },
      {
        id: 22,
        name: 'مدیریت دانشجویان',
        parentId: 2,
        key: 'teachers',
        icon: 'lms-books',
        to: '/studentManagement',
        _children: null,
      },
    ],
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
    _children: null,
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
    _children: null,
  },
  {
    id: 3,
    name: 'دوره های من',
    icon: 'lms-meter',
    to: '/student-course',
    key: 'course',
    _children: null,
  },
];
