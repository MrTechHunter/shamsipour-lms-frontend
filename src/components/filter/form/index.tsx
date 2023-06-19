import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import FormControl from '../../../components/form';
import { CONFIGURATION_TYPES, ACTIVATION } from '../../../constants/dropDownOptions';
import persianNumToEnglish from '../../../helpers/persianNumToEnglish';
import { timeStampToObject } from '../../../helpers/dateFormatter';

const FilterForm = ({
  submitHandler,
  initialValues,
  isLoading,
}: {
  submitHandler: any;
  initialValues: any;
  isLoading: any;
}) => {
  const [timeOutId, setTimeoutId] = useState<any>('');
  return (
    <Formik onSubmit={submitHandler} initialValues={initialValues} validateOnMount={true} enableReinitialize={true}>
      {(formik) => {
        const objectDate = timeStampToObject(formik?.values?.startDate);
        const endDate_minimumDate = formik?.values?.startDate
          ? {
              year: objectDate.year,
              month: objectDate.month,
              day: objectDate.day + 1,
            }
          : formik?.values?.startDate;
        return (
          <Form name="login">
            <div className="flex flex-wrap items-center justify-start">
              <div className="ml-2">
                <FormControl
                  control="select"
                  name="configurationType"
                  label="حالت فروش"
                  options={CONFIGURATION_TYPES}
                  loading={false}
                  formik={formik}
                  isSearchable={false}
                  variant="tiny"
                  onChange={(data: any) => {
                    formik.setFieldValue('configurationType', data);
                    submitHandler({
                      ...formik.values,
                      configurationType: data,
                    });
                  }}
                />
              </div>
              <div className="ml-2">
                <FormControl
                  control="select"
                  name="status"
                  label="وضعیت قرارداد"
                  options={ACTIVATION}
                  loading={false}
                  isSearchable={false}
                  formik={formik}
                  variant="tiny"
                  onChange={(data: any) => {
                    formik.setFieldValue('status', data);
                    submitHandler({ ...formik.values, status: data });
                  }}
                />
              </div>
              <div className="ml-2">
                <FormControl
                  control="date"
                  type="date"
                  label="انتخاب تاریخ شروع قرارداد"
                  name="startDate"
                  variant="tiny"
                  leftIcon="me-Calendar"
                  formik={formik}
                  onChange={(data: any) => {
                    formik.setFieldValue('startDate', data);
                    submitHandler({ ...formik.values, startDate: data });
                  }}
                />
              </div>
              <div className="ml-2">
                <FormControl
                  control="date"
                  type="date"
                  label="انتخاب تاریخ پایان قرارداد"
                  name="endDate"
                  variant="tiny"
                  leftIcon="me-Calendar"
                  formik={formik}
                  onChange={(data: any) => {
                    formik.setFieldValue('endDate', data);
                    submitHandler({ ...formik.values, endDate: data });
                  }}
                  minimumdate={endDate_minimumDate}
                />
              </div>
              <div className="ml-2">
                <FormControl
                  control="input"
                  type="text"
                  label="شماره قرارداد"
                  maxLength={20}
                  name="contractCode"
                  variant="tiny"
                  spinner={isLoading && initialValues?.contractCode}
                  leftIcon="me-search"
                  formik={formik}
                  onChange={(data: any) => {
                    formik.setFieldValue('contractCode', persianNumToEnglish(data.target.value));
                    let timer: any = '';
                    clearTimeout(timer);
                    timer = setTimeout(() => {
                      submitHandler({ ...formik.values, contractCode: persianNumToEnglish(data.target.value) });
                    }, 300);
                    setTimeoutId(timer);
                  }}
                />
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FilterForm;
