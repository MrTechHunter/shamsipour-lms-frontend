import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from './form';
import PublicFormContainer from '../../components/publicFormContainer';

export function Register() {
  return (
    <PublicFormContainer title="ایجاد حساب کاربری">
      <RegisterForm loading={false} />
      <div className="text-xs font-light text-center text-black_87 w-full mt-4 2xl:mt-6 md:text-xs">
        در صورت داشتن اکانت از طریق لینک زیر وارد حساب کاربری خود شوید!
      </div>
      <div className="font-bold text-xl text-blue_800 text-center w-full mt-4 2xl:mt-4">
        <Link to="/login">ورود</Link>
      </div>
    </PublicFormContainer>
  );
}

export default Register;
