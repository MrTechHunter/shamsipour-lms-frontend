interface DROP_DOWN_TYPES {
  label: string;
  value: string;
}
export const CONFIGURATION_TYPES: DROP_DOWN_TYPES[] = [
  { label: 'واگذاری کامل', value: 'FULL_ASSIGNMENT' },
  { label: 'پلکانی', value: 'STAIRS' },
  { label: 'مشارکتی', value: 'PARTICIPATORY' },
];

export const ACTIVATION: DROP_DOWN_TYPES[] = [
  { label: 'فعال', value: 'ACTIVE' },
  { label: 'غیر فعال', value: 'INACTIVE' },
];

export const ACTIVATION_BOOLEAN = [
  { label: 'فعال', value: 'true' },
  { label: 'غیر فعال', value: 'false' },
];

export const CONTRACT_TYPES: DROP_DOWN_TYPES[] = [
  { label: 'قرارداد تامین کننده', value: 'vendor_contract' },
  { label: 'قرارداد مصرف کننده', value: 'consumer_contract' },
];

export const CONTRACT_CORRESPONDENTS: DROP_DOWN_TYPES[] = [
  { label: 'سوپر ادمین', value: 'SUPERADMIN_ADMIN' },
  { label: 'تامین کننده', value: 'PROVIDER_ADMIN' },
  { label: 'مصرف کننده', value: 'ADMIN_CONSUMER' },
];
export const ROLE_TYPES: DROP_DOWN_TYPES[] = [
  { label: 'مالک', value: 'SUPERADMIN_ADMIN' },
  { label: 'تامین کننده', value: 'PROVIDER_ADMIN' },
  { label: 'مصرف کننده', value: 'ADMIN_CONSUMER' },
];
export const SETTLEMENT_STATUS: DROP_DOWN_TYPES[] = [
  { label: 'در انتظار ارسال فیش', value: 'SENDING_RECEIPT' },
  { label: 'تایید تسویه', value: 'CONFIRMED' },
  { label: 'رد تسویه', value: 'REJECTED' },
  { label: 'در انتظار تایید', value: 'AWAITING_CONFIRMATION' },
];

export const ACTIVE_MARKETER_RADIO_BUTTON_FORM = [
  { label: 'دارد', value: true },
  { label: 'ندارد', value: false },
];

export const GENDER = [
  { label: 'مرد', value: true },
  { label: 'زن', value: false },
];

export const USER_TYPES = [
  { label: 'حقوقی', value: 'LEGAL' },
  { label: 'حقیقی', value: 'GENUINE' },
];

export const USER_ACTIVACTION = [
  { label: 'فعال', value: true },
  { label: 'غیرفعال', value: false },
];

export const USER_ROLES = [
  { label: 'مصرف‌کننده', value: 'MEBOKA_CONSUMER' },
  { label: 'بازاریاب', value: 'MEBOKA_MARKETER' },
  { label: 'تامین‌کننده', value: 'MEBOKA_PROVIDER' },
];
