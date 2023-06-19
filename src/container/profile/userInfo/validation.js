import * as yup from 'yup';

export default () =>
  yup.object({
    firstName: yup.string().required('نام الزامیست!'),
    lastName: yup.string().required('نام خانوادگی الزامیست'),
    nationalCode: yup
      .string()
      .required('کدملی الزامیست!')
      .matches(/^[0-9]{10}$/, 'لطفا فقط عدد ۱۰ رقمی وارد نمایید.'),
    mobileNumber: yup
      .string()
      .required('شماره تلفن اجباریست!')
      .max(10, 'لطفا شماره تلفن را به درستی وارد کنید')
      .min(10, 'لطفا شماره تلفن رابه درستی وارد کنید')
      .test('decline start with 0', 'لطفا شماره تلفن را بدون صفر اول وارد کنید', (value, context) => {
        return context.originalValue && !context.originalValue.startsWith('0');
      })
      .max(10, 'لطفا شماره تلفن را به درستی وارد کنید')
      .min(10, 'لطفا شماره تلفن رابه درستی وارد کنید'),
  });
