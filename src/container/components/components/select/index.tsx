import { Form, Formik } from 'formik';
import React from 'react';
import { Card, CardBody, CardHeader, HeaderTitle } from '../../../../components/card';
import FormControl from '../../../../components/form';
import { CONFIGURATION_TYPES } from '../../../../constants/dropDownOptions';

const Select = () => {
  return (
    <Card>
      <CardHeader>
        <HeaderTitle>Select</HeaderTitle>
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
                        control="select"
                        name="configurationType"
                        label="انتخاب حالت فروش"
                        options={CONFIGURATION_TYPES}
                        loading={false}
                        formik={formik}
                        variant="tiny"
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
                        control="select"
                        name="configurationType"
                        label="انتخاب حالت فروش"
                        options={CONFIGURATION_TYPES}
                        loading={false}
                        formik={formik}
                        variant="outlined"
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

export default Select;
