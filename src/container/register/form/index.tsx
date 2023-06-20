import React from 'react';
import { Formik, Form } from 'formik';
import validationSchema from './validation';
import initialValues from './initialValues';
import FormControl from '../../../components/form';
import Button from '../../../components/button';

const RegisterForm = ({ loading }: { loading: boolean }) => {
  const submitHandler = (values: { mobileNumber: string; nationalCode: string }) => {
    return;
    // const postData = {
    //   ...values,
    // };
    // console.log(postData);
    // axios
    //   .post('http://192.168.100.47:8001/api/route/ms-uaa/v1/user/register', postData, { headers: { channel: 'web' } })
    //   .then((res) => {
    //     console.log(res);
    //   });
  };
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
            <FormControl control="input" type="text" name="mobileNumber" label="شماره موبایل" maxLength={20} />
            <FormControl control="input" type="text" name="nationalCode" label="کد ملی" maxLength={45} />
            <Button disabled={loading || !formik.isValid} type="submit" size="lg-wide" color="primary">
              ایجاد حساب کاربری
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
