import React from 'react';
import { Card, CardBody, CardFooter, CardHeader, HeaderTitle } from '../../../components/card';
import { Form, Formik } from 'formik';
import initialValue from './initialValue';
import FormControl from '../../../components/form';
import Button from '../../../components/button';
import { useNavigate } from 'react-router';
import validation from './validation';
import PersianNumToEnglish from '../../../helpers/persianNumToEnglish';
import mockData from './mockData';

const UserInfo = () => {
  const navigate = useNavigate();
  const submitHandler = (val: object) => {
    navigate('/');
  };
  const isLoading = false;

  return (
    <Card>
      <CardHeader>
        <HeaderTitle>مشخصات کاربری</HeaderTitle>
      </CardHeader>
      <Formik
        initialValues={initialValue(mockData)}
        onSubmit={submitHandler}
        validationSchema={validation}
        enableReinitialize={true}
        validateOnMount={true}
      >
        {(formik) => {
          return (
            <Form name="userInfo" className="mt-6">
              <CardBody>
                <div className="grid grid-cols-3 gap-y-4 max-sm:grid-cols-1">
                  <div className="ml-4">
                    <FormControl
                      control="input"
                      type={'text'}
                      label="نام"
                      name="firstName"
                      variant="outlined"
                      formik={formik}
                      loading={isLoading}
                      disabled={true}
                    />
                  </div>
                  <div className="ml-4">
                    <FormControl
                      control="input"
                      type={'text'}
                      label="نام‌خانوادگی"
                      name="lastName"
                      variant="outlined"
                      formik={formik}
                      loading={isLoading}
                      disabled={true}
                    />
                  </div>
                  <div className="ml-4">
                    <FormControl
                      control="input"
                      type={'text'}
                      label="کدملی"
                      maxLength="10"
                      name="nationalCode"
                      variant="outlined"
                      formik={formik}
                      loading={isLoading}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        formik.setFieldValue('nationalCode', PersianNumToEnglish(e.target.value));
                      }}
                      disabled={true}
                    />
                  </div>
                  <div className="ml-4">
                    <FormControl
                      control="input"
                      type={'text'}
                      label="شماره موبایل"
                      maxLength="11"
                      name="mobileNumber"
                      variant="outlined"
                      formik={formik}
                      loading={isLoading}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        formik.setFieldValue('mobileNumber', PersianNumToEnglish(e.target.value));
                      }}
                      disabled={true}
                    />
                  </div>
                  <div className="ml-4">
                    <FormControl
                      control="date"
                      type="date"
                      label="انتخاب تاریخ تولد"
                      name="birthDate"
                      variant="outlined"
                      leftIcon="lms-Calendar"
                      formik={formik}
                      loading={isLoading}
                      disabled={true}
                    />
                  </div>
                  <div className="ml-4">
                    <FormControl
                      control="input"
                      type={'text'}
                      label="ایمیل"
                      name="email"
                      variant="outlined"
                      formik={formik}
                      loading={isLoading}
                      disabled={true}
                    />
                  </div>
                  <div className="ml-4">
                    <FormControl
                      control="radio"
                      label="جنسیت"
                      name="gender"
                      options={[
                        { label: 'مرد', value: true },
                        { label: 'زن', value: false },
                      ]}
                      formik={formik}
                      loading={isLoading}
                      disabled={true}
                    />
                  </div>
                </div>
              </CardBody>
              <CardFooter>
                <Button color="primary" type="submit" size="sm" className="ml-2" loading={isLoading}>
                  تایید
                </Button>
                <Button
                  color="primary-outline"
                  type="button"
                  size="sm"
                  onClick={() => navigate('/')}
                  loading={isLoading}
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
export default UserInfo;
