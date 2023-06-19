import * as yup from 'yup';

export default () =>
  yup.object({
    normalFilled: yup.string(),
    rightIconFilled: yup.string(),
    twoIconFilled: yup.string(),
    passwordFilled: yup.string().required('الزامیست').max(7),
    normalTiny: yup.string(),
    rightIconTiny: yup.string(),
    twoIconTiny: yup.string(),
    passwordTiny: yup.string().required('الزامیست').max(7),
    normalOutlined: yup.string(),
    rightIconOutlined: yup.string(),
    twoIconOutlined: yup.string(),
    passwordOutlined: yup.string().required('الزامیست').max(7),
  });
