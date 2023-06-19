import * as yup from 'yup';

export default () =>
  yup.object({
    oldPassword: yup.string().required('رمز عبور اجباریست!'),
    password: yup
      .string()
      .required('رمز عبور جدید را وارد کنید')
      .matches(
        '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d !"#$%&\'()*+,\\-./:;<=>?@[\\\\\\]^_`{|}~]{6,45}$',
        'رمز عبور باید حداقل 6 کاراکتر و ترکیب حروف و اعداد باشد! '
      )
      .test('equal', 'رمز عبور قدیم و جدید نمیتواند یکسان باشد', function () {
        if (this.parent.password === this.parent.oldPassword) {
          return false;
        } else {
          return true;
        }
      }),
    confirmPassword: yup
      .string()
      .required('تکرار رمز عبور الزامیست')
      .test('notEqual', 'تکرار رمز عبور باید برابر با رمز عبور جدید باشد!', function () {
        if (this.parent.confirmPassword == this.parent.password) {
          return true;
        } else {
          return false;
        }
      }),
  });
