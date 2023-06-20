import React from 'react';
import { Link } from 'react-router-dom';
import PublicFormContainer from '../../components/publicFormContainer';
import LoginForm from './form';

export function Login() {
  return (
    <PublicFormContainer title="ورود به حساب کاربری">
      <LoginForm />
      <div className="text-xs font-light text-center text-black_87 w-full mt-4 2xl:mt-6 md:text-xs">
        در صورت نداشتن اکانت از طریق لینک زیر حساب کاربری خود را ایجاد کنید!
      </div>
      <div className="font-bold text-xl text-blue_800 text-center w-full mt-4 2xl:mt-4">
        <Link to="/register">ثبت نام</Link>
      </div>
    </PublicFormContainer>
  );
}

export default Login;
