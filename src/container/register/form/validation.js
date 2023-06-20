import * as yup from 'yup';

export default () =>
  yup.object({
    mobileNumber: yup
      .string()
      .required('شماره موبایل اجباریست!')
      .matches('^9\\d{9}$', 'شماره موبایل باید به صورت عدد و با 9 شروع شود.'),
    nationalCode: yup
      .string()
      .required('کد ملی اجباریست!')
      .matches(/^[0-9]{10}$/, 'کد ملی عدد ۱۰ رقمی باید وارد شود.'),
  });
