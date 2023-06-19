export function getRoleType(roleType: any) {
  if (typeof roleType == 'string') {
    switch (roleType) {
      case 'SYSADMIN':
        return 'مدیر سامانه';
      case 'MEBOKA_SUPERADMIN':
        return 'سوپر ادمین';
      case 'MEBOKA_ADMIN':
        return 'ادمین';
      case 'MEBOKA_PROVIDER':
        return 'تامین کننده';
      case 'MEBOKA_CONSUMER':
        return 'مصرف کننده';
      case 'MEBOKA_MARKETER':
        return 'بازاریاب';
      default:
        return 'تعیین نشده';
    }
  } else {
    return false;
  }
}
