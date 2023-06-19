import { Form, Formik } from 'formik';
import React from 'react';
import { Card, CardBody, CardHeader, HeaderTitle } from '../../../../components/card';
import FormControl from '../../../../components/form';

const DatePicker = () => {
  return (
    <Card>
      <CardHeader>
        <HeaderTitle>DatePicker</HeaderTitle>
      </CardHeader>
      <Formik
        onSubmit={() => console.log('submit')}
        initialValues={{ name: '' }}
        validateOnMount={true}
        enableReinitialize={true}
      >
        {(formik) => {
          return (
            <CardBody>
              <section className="border-2 border-solid border-black_38/30 pl-8 pr-8 pt-4 pb-4 rounded-md mb-8">
                <h3 className="">Tiny</h3>
                <hr className="mb-6 text-black_38/10" />
                <div className={`grid grid-cols-2 gap-x-8`}>
                  <div className="">
                    <span className="mb-3 mt-3">Normal</span>
                    <Form>
                      <FormControl
                        control="date"
                        type="date"
                        label="انتخاب تاریخ شروع قرارداد"
                        name="startDate"
                        variant="tiny"
                        leftIcon="me-Calendar"
                        formik={formik}
                      />
                    </Form>
                  </div>
                </div>
              </section>
              <section className="border-2 border-solid border-black_38/30 pl-8 pr-8 pt-4 pb-4 rounded-md mb-8">
                <h3 className="">Outlined</h3>
                <hr className="mb-6 text-black_38/10" />
                <div className={`grid grid-cols-2 gap-x-8`}>
                  <div className="">
                    <span className="mb-3 mt-3">Normal</span>
                    <Form>
                      <FormControl
                        control="date"
                        type="date"
                        label="انتخاب تاریخ شروع قرارداد"
                        name="startDate"
                        variant="outlined"
                        leftIcon="me-Calendar"
                        formik={formik}
                      />
                    </Form>
                  </div>
                </div>
              </section>
              <section className="border-2 border-solid border-black_38/30 pl-8 pr-8 pt-4 pb-4 rounded-md mb-8">
                <h3 className="">Filled</h3>
                <hr className="mb-6 text-black_38/10" />
                <div className={`grid grid-cols-2 gap-x-8`}>
                  <div className="">
                    <span className="mb-3 mt-3">Normal</span>
                    <Form>
                      <FormControl
                        control="date"
                        type="date"
                        label="انتخاب تاریخ شروع قرارداد"
                        name="startDate"
                        variant="filled"
                        leftIcon="me-Calendar"
                        formik={formik}
                      />
                    </Form>
                  </div>
                </div>
              </section>
            </CardBody>
          );
        }}
      </Formik>
    </Card>
  );
};

export default DatePicker;
