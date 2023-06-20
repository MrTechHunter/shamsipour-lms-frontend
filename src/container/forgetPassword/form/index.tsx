import React from 'react';
import { Formik, Form } from 'formik';
import validationSchema from './validation';
import initialValues from './initialValues';
import FormControl from '../../../components/form';
import Button from '../../../components/button';

const ForgetPasswordForm = ({ onSubmit, loading }: { onSubmit: (e: any) => void; loading: boolean }) => {
  const submitHandler = (values: { nationalCode: string }) => {
    onSubmit({ data: values });
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
          <Form name="forgetPassword">
            <FormControl control="input" type="text" name="nationalCode" label="کد ملی" maxLength={45} />
            <Button disabled={loading || !formik.isValid} type="submit" size="lg-wide" color="primary">
              ارسال
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ForgetPasswordForm;
