import React from 'react';
import ForgetPasswordForm from './form';
import PublicFormContainer from '../../components/publicFormContainer';
import { Link } from 'react-router-dom';

//todo: handle user forget password

export function ForgetPassword() {
  return (
    <PublicFormContainer title="فراموشی رمز عبور">
      <div className="text-xs font-light text-right leading-relaxed text-black_87 w-72 mt-6 mb-12 2xl:w-96 2xl:mt-8 2xl:mb-16 md:text-xs">
        با وارد کردن کدملی، کد امنیتی به شماره تماسی که با آن ثبت نام خود را انجام داده اید، ارسال خواهد شد.
      </div>
      <ForgetPasswordForm loading={false} onSubmit={() => false} />
      <div className="font-bold text-lg text-blue_800 text-center w-full mt-6 2xl:mt-4">
        <Link to="/login">بازگشت به صفحه ورود</Link>
      </div>
    </PublicFormContainer>
  );
}

export default ForgetPassword;
