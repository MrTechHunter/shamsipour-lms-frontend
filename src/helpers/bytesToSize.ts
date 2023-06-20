function bytesToSize(bytes: number, lang: `fa` | `en`): string {
  const sizes = [
    { en: 'Bytes', fa: 'بایت' },
    { en: 'KB', fa: 'کیلوبایت' },
    { en: 'MB', fa: 'مگابایت' },
    { en: 'GB', fa: 'گیگابایت' },
    { en: 'TB', fa: 'ترابایت' },
  ];
  if (bytes === 0) return 'n/a';
  const unit = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), sizes.length - 1);
  if (unit === 0) return `${bytes} ${sizes[unit]}`;
  return `${(bytes / 1024 ** unit).toFixed(0)} ${sizes[unit][lang]}`;
}

export default bytesToSize;
