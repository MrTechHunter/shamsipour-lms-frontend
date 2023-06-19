const ErrorMessages = (fileName: string, code: string) => {
  const messages: { [code: string]: string } = {
    'file-invalid-type': `فرمت فایل ${fileName} غیر مجاز است.`,
    'file-too-large': `حجم فایل ${fileName} بیش از حد مجاز است.`,
    'too-many-files': `تعداد فایل های آپلود شده بیش از حد مجاز است.`,
  };
  return messages[code];
};

export default ErrorMessages;
