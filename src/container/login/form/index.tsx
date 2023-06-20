import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import validationSchema from './validation';
import initialValues from './initialValues';
import FormControl from '../../../components/form';
import CheckBox from '../../../components/checkbox';
import Button from '../../../components/button';
import { Link } from 'react-router-dom';
import { useLoginMutation } from '../../../redux/services/authApi';
import ErrorHandler from '../../../helpers/ErrorHandler';

const LoginForm = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [login, { data, isLoading, error }] = useLoginMutation();
  const submitHandler = ({ email, password }: { email: string; password: string }) => {
    login({ email, password });
  };

  useEffect(() => {
    if (error) {
      ErrorHandler(error);
    }
  }, [error]);
  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={submitHandler}
      initialValues={initialValues}
      validateOnMount={true}
    >
      {(formik) => {
        return (
          <Form name="login">
            <FormControl
              control="input"
              type="text"
              name="email"
              label="نام‌کاربری"
              // maxLength={20}
              rightIcon="lms-user"
              notice="کد ملی ۱۰ رقمی خود را وارد کنید."
            />
            <FormControl
              control="input"
              type="password"
              name="password"
              label="رمز عبور"
              maxLength={45}
              leftIcon="lms-Eye"
              rightIcon="lms-lock"
            />
            <div className="flex items-center justify-between w-full mb-3 2xl:mb-6">
              <CheckBox
                size={'md'}
                checked={rememberMe}
                onSelect={() => setRememberMe(!rememberMe)}
                label="مرا به خاطر بسپار!"
              />
              <Link to="/forget-password" className="text-lg font-normal text-blue_800">
                فراموشی رمز عبور
              </Link>
            </div>
            <Button
              disabled={isLoading}
              type="submit"
              size="lg-wide"
              color="primary"
              onClick={() => submitHandler(formik.values)}
            >
              ورود
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
