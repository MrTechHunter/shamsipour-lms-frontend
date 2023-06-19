import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardFooter, CardHeader, HeaderTitle } from '../../../components/card';
import { Form, Formik } from 'formik';
import initialValue from './initialValue';
import FormControl from '../../../components/form';
import Button from '../../../components/button';
import { useNavigate } from 'react-router';
import { GENDER, USER_TYPES } from '../../../constants/dropDownOptions';
import validation from './validation';
// import { useChangeProfileDetailApiMutation, useGetProfileDetailApiMutation } from '../../../redux/services/userProfile';
import { getRoleType } from './helper';
import TitleSkeleton from '../../../components/skeleton/title';
import PersianNumToEnglish from '../../../helpers/persianNumToEnglish';

const UserInfo = () => {
  // const [getProfileDetail, { data: userDetail, isLoading }] = useGetProfileDetailApiMutation();
  // const [changeProfileDetail, { data, isLoading: isUpdating, isSuccess }] = useChangeProfileDetailApiMutation();
  const navigate = useNavigate();
  const submitHandler = (val: object) => {
    // changeProfileDetail({ ...userDetail, ...val });
  };
  useEffect(() => {
    // getProfileDetail();
  }, []);
  const isLoading = false;

  return (
    <Card>
      <CardHeader>
        <HeaderTitle>مشخصات کاربری</HeaderTitle>
      </CardHeader>
      <div className="w-full text-xs">
        <div className="flex border-b border-black_12 py-3">
          {isLoading ? (
            <>
              <TitleSkeleton />
              <TitleSkeleton />
            </>
          ) : (
            <>
              <p className="w-[28%]">نوع کاربر</p>
              {/* <p className="w-full">{getRoleType(userDetail?.roleTypes)}</p> */}
            </>
          )}
        </div>
        <div className="flex border-b border-black_12 py-3">
          {isLoading ? (
            <>
              <TitleSkeleton />
              <TitleSkeleton />
            </>
          ) : (
            <>
              <p className="w-[28%]">کاربر</p>
              {/* <p className="w-full">{USER_TYPES.find((userType) => userDetail?.userType == userType.value)?.label}</p> */}
            </>
          )}
        </div>
        {true && (
          <>
            <div className="flex border-b border-black_12 py-3">
              {isLoading ? (
                <>
                  <TitleSkeleton />
                  <TitleSkeleton />
                </>
              ) : (
                <>
                  <p className="w-[28%]">نام شرکت/سازمان</p>
                  {/* <p className="w-full">{userDetail?.organizationName}</p> */}
                </>
              )}
            </div>
            <div className="flex border-b border-black_12 py-3">
              {isLoading ? (
                <>
                  <TitleSkeleton />
                  <TitleSkeleton />
                </>
              ) : (
                <>
                  <p className="w-[28%]">شناسه ملی</p>
                  {/* <p className="w-full">{userDetail?.nationalId}</p> */}
                </>
              )}
            </div>
            <div className="flex border-b border-black_12 py-3">
              {isLoading ? (
                <>
                  <TitleSkeleton />
                  <TitleSkeleton />
                </>
              ) : (
                <>
                  <p className="w-[28%]">کد اقتصادی</p>
                  {/* <p className="w-full">{userDetail?.economicCode}</p> */}
                </>
              )}
            </div>
          </>
        )}
      </div>
      <Formik
        initialValues={initialValue({})}
        onSubmit={submitHandler}
        validationSchema={validation}
        enableReinitialize={true}
        validateOnMount={true}
      >
        {(formik) => {
          return (
            <Form name="userInfo" className="mt-6">
              <CardBody>
                <div className="grid grid-cols-3 gap-y-4">
                  <div className="ml-4">
                    <FormControl
                      control="input"
                      type={'text'}
                      label="نام"
                      name="firstName"
                      variant="outlined"
                      formik={formik}
                      loading={isLoading}
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
                    />
                  </div>
                  <div className="ml-4">
                    <FormControl
                      control="date"
                      type="date"
                      label="انتخاب تاریخ تولد"
                      name="birthDate"
                      variant="outlined"
                      leftIcon="me-Calendar"
                      formik={formik}
                      loading={isLoading}
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
                    />
                  </div>
                  <div className="ml-4">
                    <FormControl
                      control="radio"
                      label="جنسیت"
                      name="gender"
                      options={GENDER}
                      formik={formik}
                      loading={isLoading}
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
                  // disabled={
                  //   !formik.isValid ||
                  //   (data
                  //     ? JSON.stringify({ ...data }) === JSON.stringify(userDetail)
                  //     : JSON.stringify({ ...userDetail, ...formik.values }) === JSON.stringify(userDetail))
                  // }
                  loading={isLoading}
                >
                  ذخیره
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
