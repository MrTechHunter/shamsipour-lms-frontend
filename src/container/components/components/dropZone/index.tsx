import { Form, Formik } from 'formik';
import React from 'react';
import { Card, CardBody, CardHeader, HeaderTitle } from '../../../../components/card';
import validationSchema from './validation';
import initialValues from './initialValues';
import FormControl from '../../../../components/form';

const DropZone = () => {
  const submitHandler = async () => {
    console.log('submit handler in full-assignment');
  };
  return (
    <Card>
      <CardHeader>
        <HeaderTitle>Drop Zone</HeaderTitle>
      </CardHeader>
      <CardBody>
        <Formik
          validationSchema={validationSchema}
          onSubmit={submitHandler}
          initialValues={initialValues}
          validateOnMount={true}
        >
          {(formik) => {
            return (
              <>
                <CardBody>
                  <Form name="addContractSuperAdmin">
                    <section className="border-2 border-solid border-black_38/30 pl-8 pr-8 pt-4 pb-4 rounded-md mb-8">
                      <div className="w-full">
                        <div className="w-full">
                          <FormControl
                            control="file"
                            label={[
                              {
                                format: 'برای آپلود فایل های مربوطه، فرمت های',
                                size: 'با حداکثر حجم',
                                argeement: 'قابل قبول می باشد',
                              },
                            ]}
                            name="myFile"
                            value={[]}
                            formik={formik}
                            multipleDrop={true}
                            maxFilesNumber={3}
                            maxFileSize={1200}
                            acceptFiles={{ 'image/jpeg': [], 'application/pdf': [] }}
                          />
                        </div>
                      </div>
                    </section>
                  </Form>
                </CardBody>
              </>
            );
          }}
        </Formik>
      </CardBody>
    </Card>
  );
};

export default DropZone;
