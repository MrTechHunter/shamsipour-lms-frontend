import * as yup from 'yup';

export default () =>
  yup.object({
    nationalCode: yup
      .string()
      .required('کد ملی اجباریست!')
      .matches(/^[0-9]{10}$/, 'لطفا فقط عدد ۱۰ رقمی وارد نمایید.'),
  });
