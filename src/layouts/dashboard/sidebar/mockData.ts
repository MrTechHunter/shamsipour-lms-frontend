export default [
  {
    id: 1,
    _tag: 'CSidebarNavItem',
    name: 'داشبورد',
    badge: {
      color: '',
      text: '',
    },
    icon: 'lms-home',
    to: '/',
    key: 'dashboard',
    sort: 0,
    enable: null,
    warning: null,
    warningMessage: null,
    notificationCount: null,
    parentId: null,
    _children: null,
  },
  {
    id: 2,
    _tag: 'CSidebarNavDropdown',
    name: 'درس های من',
    badge: {
      color: null,
      text: null,
    },
    icon: 'lms-books',
    to: '/course',
    key: 'course',
    sort: 1,
    enable: null,
    warning: null,
    warningMessage: null,
    notificationCount: null,
    parentId: null,
  },
  {
    id: 3,
    _tag: 'CSidebarNavItem',
    name: 'نمرات',
    badge: {
      color: '',
      text: '',
    },
    icon: 'lms-meter',
    to: '/scores',
    key: 'scores',
    sort: 2,
    enable: null,
    warning: null,
    warningMessage: null,
    notificationCount: null,
    parentId: null,
    _children: null,
  },
  {
    id: 4,
    _tag: 'CSidebarNavDropdown',
    name: 'امتحانات',
    badge: {
      color: 'warning',
      text: 'سیستمی',
    },
    icon: 'lms-Paper',
    to: '/exams',
    key: 'exams',
    sort: 6,
    enable: null,
    warning: null,
    warningMessage: null,
    notificationCount: null,
    parentId: null,
  },
];
