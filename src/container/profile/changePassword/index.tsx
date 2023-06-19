import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardFooter, CardHeader, HeaderTitle } from '../../../components/card';
import { Form, Formik } from 'formik';
import FormControl from '../../../components/form';
import validation from './validation';
import Button from '../../../components/button';
import { useNavigate } from 'react-router';
// import { useChangePasswordApiMutation } from '../../../redux/services/userProfile';

const ChangePassword = () => {
  const navigate = useNavigate();
  // const [changePassword, { isSuccess, isLoading }] = useChangePasswordApiMutation();
  const submitHandler = (val: any) => {
    // changePassword(val);
  };
  // useEffect(() => {
  //   if (isSuccess) {
  //     navigate('/login');
  //   }
  // }, [isSuccess]);
  return (
    <Card>
      <CardHeader>
        <HeaderTitle>تغییر رمزعبور</HeaderTitle>
      </CardHeader>
      <Formik
        initialValues={{ oldPassword: '', password: '', confirmPassword: '' }}
        validationSchema={validation}
        onSubmit={submitHandler}
        validateOnMount
      >
        {(formik) => {
          return (
            <Form name="changePassword">
              <CardBody>
                <div className="grid grid-cols-3">
                  <div className="ml-4">
                    <FormControl
                      control="input"
                      type={'password'}
                      label="رمزعبور قبلی"
                      maxLength={20}
                      name="oldPassword"
                      variant="outlined"
                      leftIcon="me-Eye-closed"
                      rightIcon="me-Lock-outlined"
                      formik={formik}
                    />
                  </div>
                  <div className="ml-4">
                    <FormControl
                      control="input"
                      type={'password'}
                      label="رمزعبور جدید"
                      maxLength={20}
                      name="password"
                      variant="outlined"
                      leftIcon="me-Eye-closed"
                      rightIcon="me-Lock-outlined"
                      formik={formik}
                    />
                  </div>
                  <div>
                    <FormControl
                      control="input"
                      type={'password'}
                      label="تکرار رمزعبور جدید"
                      maxLength={20}
                      name="confirmPassword"
                      variant="outlined"
                      leftIcon="me-Eye-closed"
                      rightIcon="me-Lock-outlined"
                      formik={formik}
                    />
                  </div>
                </div>
              </CardBody>
              <CardFooter>
                <Button
                  color="primary"
                  type="submit"
                  size="sm"
                  className="ml-2"
                  disabled={!formik.isValid}
                  // loading={isLoading}
                >
                  ذخیره
                </Button>
                <Button
                  color="primary-outline"
                  type="button"
                  size="sm"
                  onClick={() => navigate('/')}
                  // loading={isLoading}
                >
                  انصراف
                </Button>
              </CardFooter>
            </Form>
          );
        }}
      </Formik>
    </Card>
  );
};

export default ChangePassword;
