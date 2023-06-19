export default [
  {
    id: 100,
    _tag: 'CSidebarNavItem',
    name: 'دسته اول',
    badge: {
      color: '',
      text: '',
    },
    icon: 'me-settings',
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
    id: 77,
    _tag: 'CSidebarNavDropdown',
    name: 'دسته دوم',
    badge: {
      color: null,
      text: null,
    },
    icon: 'me-Chat',
    to: '/organization',
    key: 'organization',
    sort: 1,
    enable: null,
    warning: null,
    warningMessage: null,
    notificationCount: null,
    parentId: null,
    _children: [
      {
        id: 82,
        _tag: 'CSidebarNavItem',
        name: 'زیر دسته دوم ۱',
        badge: {
          color: null,
          text: null,
        },
        icon: 'me-Edit',
        to: '/organization/persons',
        key: 'organizatioin_persons',
        sort: 6,
        enable: null,
        warning: null,
        warningMessage: null,
        notificationCount: null,
        parentId: 77,
        _children: [
          {
            id: 842,
            _tag: 'CSidebarNavItem',
            name: 'زیر دسته دوم ۱۱',
            badge: {
              color: null,
              text: null,
            },
            icon: 'me-Calendar',
            to: '/organization/persons',
            key: 'organizatioin_persons',
            sort: 6,
            enable: null,
            warning: null,
            warningMessage: null,
            notificationCount: null,
            parentId: 82,
            _children: [
              {
                id: 832,
                _tag: 'CSidebarNavItem',
                name: 'زیر دسته دوم ۱۱۱',
                badge: {
                  color: null,
                  text: null,
                },
                icon: 'me-Paper',
                to: '/organization/persons',
                key: 'organizatioin_persons',
                sort: 6,
                enable: null,
                warning: null,
                warningMessage: null,
                notificationCount: null,
                parentId: 842,
                _children: null,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 120,
    _tag: 'CSidebarNavItem',
    name: 'دسته سوم',
    badge: {
      color: '',
      text: '',
    },
    icon: 'me-user',
    to: '/watcher',
    key: 'watcher',
    sort: 2,
    enable: null,
    warning: null,
    warningMessage: null,
    notificationCount: null,
    parentId: null,
    _children: null,
  },
  {
    id: 828,
    _tag: 'CSidebarNavDropdown',
    name: 'دسته چهارم',
    badge: {
      color: 'warning',
      text: 'سیستمی',
    },
    icon: 'me-download',
    to: '/permissions',
    key: 'template',
    sort: 6,
    enable: null,
    warning: null,
    warningMessage: null,
    notificationCount: null,
    parentId: null,
    _children: [
      {
        id: 86,
        _tag: 'CSidebarNavItem',
        name: 'زیر دسته چهارم ۱',
        badge: {
          color: null,
          text: 'سیستمی',
        },
        icon: 'me-exclamation-circle',
        to: '/roles',
        key: 'roles_admin',
        sort: 1,
        enable: null,
        warning: null,
        warningMessage: null,
        notificationCount: null,
        parentId: 828,
        _children: null,
      },
      {
        id: 90,
        _tag: 'CSidebarNavItem',
        name: 'زیر دسته چهارم ۱۲',
        badge: {
          color: null,
          text: 'سیستمی',
        },
        icon: 'me-error',
        to: '/permissions/menu',
        key: 'permissions_menu_admin',
        sort: 2,
        enable: null,
        warning: null,
        warningMessage: null,
        notificationCount: null,
        parentId: 88,
        _children: null,
      },
      {
        id: 92,
        _tag: 'CSidebarNavItem',
        name: 'زیر دسته چهارم ۱۳',
        badge: {
          color: '',
          text: 'سیستمی',
        },
        icon: 'me-Delete',
        to: '/permissions/channel',
        key: 'permissions_channel_admin',
        sort: 3,
        enable: null,
        warning: null,
        warningMessage: null,
        notificationCount: null,
        parentId: 88,
        _children: null,
      },
    ],
  },
];
