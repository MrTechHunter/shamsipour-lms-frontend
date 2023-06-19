import { Form, Formik } from 'formik';
import React from 'react';
import { Card, CardBody, CardHeader, HeaderTitle } from '../../../../components/card';
import validationSchema from './validation';
import initialValues from './initialValues';
import FormControl from '../../../../components/form';

const Inputs = () => {
  const submitHandler = async () => {
    console.log('submit handler in full-assignment');
  };
  return (
    <Card>
      <CardHeader>
        <HeaderTitle>Text Fields</HeaderTitle>
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
                      <h3 className="">Filled</h3>
                      <hr className="mb-6 text-black_38/10" />
                      <div className={`grid grid-cols-2 gap-x-8`}>
                        <div className="">
                          <span className="mb-3 mt-3">Normal</span>
                          <FormControl
                            control="input"
                            label="عنوان"
                            name="normalFilled"
                            variant="filled"
                            formik={formik}
                            notice="notice"
                          />
                        </div>
                        <div className="">
                          <span className="mb-3 mt-3">One Icon</span>
                          <FormControl
                            control="input"
                            type="text"
                            name="rightIconFilled"
                            label="عنوان"
                            maxLength={20}
                            rightIcon="me-user"
                            notice="notice"
                          />
                        </div>
                        <div className="">
                          <span className="mb-3 mt-3">Two Icon</span>
                          <FormControl
                            control="input"
                            type="text"
                            name="twoIconFilled"
                            label="عنوان"
                            maxLength={20}
                            rightIcon="me-user"
                            leftIcon="me-user"
                            notice="notice"
                          />
                        </div>
                        <div className="">
                          <span className="mb-3 mt-3">Password</span>
                          <FormControl
                            control="input"
                            type="password"
                            name="passwordFilled"
                            label="عنوان"
                            maxLength={20}
                            rightIcon="me-lock"
                            leftIcon
                            notice="notice"
                          />
                        </div>
                        <div className="">
                          <span className="mb-3 mt-3">Disabled</span>
                          <FormControl
                            control="input"
                            type="text"
                            name="emptyDisabledFilled"
                            label="عنوان"
                            maxLength={20}
                            rightIcon="me-lock"
                            leftIcon="me-user"
                            notice="notice"
                            disabled
                          />
                        </div>
                      </div>
                    </section>
                    <section className="border-2 border-solid border-black_38/30 pl-8 pr-8 pt-4 pb-4 rounded-md mb-8">
                      <h3 className="">Tiny</h3>
                      <hr className="mb-6 text-black_38/10" />
                      <div className={`grid grid-cols-2 gap-x-8`}>
                        <div className="">
                          <span className="mb-3 mt-3">Normal</span>
                          <FormControl
                            control="input"
                            label="عنوان"
                            name="normalTiny"
                            variant="tiny"
                            formik={formik}
                            notice="notice"
                          />
                        </div>
                        <div className="">
                          <span className="mb-3 mt-3">One Icon</span>
                          <FormControl
                            control="input"
                            type="text"
                            name="rightIconTiny"
                            label="عنوان"
                            maxLength={20}
                            rightIcon="me-user"
                            notice="notice"
                            variant="tiny"
                          />
                        </div>
                        <div className="">
                          <span className="mb-3 mt-3">Two Icon</span>
                          <FormControl
                            control="input"
                            type="text"
                            name="twoIconTiny"
                            label="عنوان"
                            maxLength={20}
                            rightIcon="me-user"
                            leftIcon="me-user"
                            notice="notice"
                            variant="tiny"
                          />
                        </div>
                        <div className="">
                          <span className="mb-3 mt-3">Password</span>
                          <FormControl
                            control="input"
                            type="password"
                            name="passwordTiny"
                            label="عنوان"
                            maxLength={20}
                            rightIcon="me-lock"
                            leftIcon
                            notice="notice"
                            variant="tiny"
                          />
                        </div>
                        <div className="">
                          <span className="mb-3 mt-3">Disabled</span>
                          <FormControl
                            control="input"
                            type="text"
                            name="emptyDisabledTiny"
                            label="عنوان"
                            maxLength={20}
                            rightIcon="me-lock"
                            leftIcon="me-user"
                            notice="notice"
                            variant="tiny"
                            disabled
                          />
                        </div>
                      </div>
                    </section>
                    <section className="border-2 border-solid border-black_38/30 pl-8 pr-8 pt-4 pb-4 rounded-md mb-8">
                      <h3 className="">Outlined</h3>
                      <hr className="mb-6 text-black_38/10" />
                      <div className={`grid grid-cols-2 gap-x-8`}>
                        <div className="">
                          <span className="mb-3 mt-3">Normal</span>
                          <FormControl
                            control="input"
                            label="عنوان"
                            name="normalOutlined"
                            variant="outlined"
                            formik={formik}
                            notice="notice"
                          />
                        </div>
                        <div className="">
                          <span className="mb-3 mt-3">One Icon</span>
                          <FormControl
                            control="input"
                            type="text"
                            name="rightIconOutlined"
                            label="عنوان"
                            maxLength={20}
                            rightIcon="me-user"
                            notice="notice"
                            variant="outlined"
                          />
                        </div>
                        <div className="">
                          <span className="mb-3 mt-3">Two Icon</span>
                          <FormControl
                            control="input"
                            type="text"
                            name="twoIconOutlined"
                            label="عنوان"
                            maxLength={20}
                            rightIcon="me-user"
                            leftIcon="me-user"
                            notice="notice"
                            variant="outlined"
                          />
                        </div>
                        <div className="">
                          <span className="mb-3 mt-3">Password</span>
                          <FormControl
                            control="input"
                            type="password"
                            name="passwordOutlined"
                            label="عنوان"
                            maxLength={20}
                            rightIcon="me-lock"
                            leftIcon
                            notice="notice"
                            variant="outlined"
                          />
                        </div>
                        <div className="">
                          <span className="mb-3 mt-3">Disabled</span>
                          <FormControl
                            control="input"
                            type="text"
                            name="emptyDisabledOutlined"
                            label="عنوان"
                            maxLength={20}
                            rightIcon="me-lock"
                            leftIcon="me-user"
                            notice="notice"
                            variant="outlined"
                            disabled
                          />
                        </div>
                      </div>
                    </section>
                    <section className="border-2 border-solid border-black_38/30 pl-8 pr-8 pt-4 pb-4 rounded-md mb-8">
                      <h3 className="">Switch</h3>
                      <hr className="mb-6 text-black_38/10" />
                      <div className={`grid grid-cols-2 gap-x-8`}>
                        <div className="">
                          <span className="mb-3 mt-3">Inifinty</span>
                          <FormControl
                            control="switch-input"
                            label="عنوان"
                            name="infinityInput"
                            variant="outlined"
                            formik={formik}
                            notice="notice"
                            options={[{ key: 'تومان', label: 'مبلغ فروش' }]}
                          />
                        </div>
                        <div className="">
                          <span className="mb-3 mt-3">Tow Options</span>
                          <FormControl
                            control="switch-input"
                            type="text"
                            name="optionalInput"
                            label="عنوان"
                            maxLength={20}
                            notice="notice"
                            options={[
                              { key: 'تومان', label: 'مبلغ فروش', localString: true },
                              { key: 'درصد', label: 'درصد فروش' },
                            ]}
                            formik={formik}
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

export default Inputs;
