import React, { useEffect, useState } from 'react';
import { InputContainer, MessageWrapper, OutlinedFormField, OutlineLabel } from './style';
import { Field, FormikProps } from 'formik';
import CustomTimePicker from '../../../timePicker';
import FormFieldSkeleton from '../../skeletonFormField';

interface IMessageComponent {
  children?: any;
  type?: string;
  labelOnTop?: boolean;
  isFilled?: boolean | undefined;
}
type InputFieldProps = any;
interface IInputComponent {
  form: any;
  leftIcon: string;
  rightIcon: string;
  type: string;
  label: string;
  notice: string;
  disabled?: boolean;
  spinner?: boolean;
  // name?: string;
  loading?: boolean;
  formik: InputFieldProps;
  name: InputFieldProps;
}

const MessageComponent = ({ children, type = 'error', labelOnTop }: IMessageComponent) => (
  <MessageWrapper type={type} labelOnTop={labelOnTop}>
    {children}
  </MessageWrapper>
);

const TimePicker = ({ label, name, loading, type, ...rest }: IInputComponent) => {
  const [labelOnTop, setLabelOnTop] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (rest.formik.errors[name]) {
      setError(true);
    } else {
      setError(!!rest.formik.errors[name] && !!rest.formik.touched[name]);
    }
  }, [rest.formik.errors[name], rest.formik.touched[name]]);
  return (
    <InputContainer>
      {label && !loading && (
        <OutlineLabel isFilled={!!rest?.formik?.values[name]} error={error} labelOnTop={labelOnTop} htmlFor={name}>
          {label}
        </OutlineLabel>
      )}
      {!loading ? (
        <Field name={name}>
          {({ form }: any) => {
            const { setFieldValue } = form;
            return (
              <OutlinedFormField error={error} labelOnTop={labelOnTop}>
                <CustomTimePicker
                  name={name}
                  focusHandler={() => {
                    setError(false);
                    setLabelOnTop(true);
                  }}
                  blurHandler={() => {
                    form.setTouched({ ...form.touched, [name]: true });
                    setError(!!form.errors[name] && !!form.touched[name]);
                    setLabelOnTop(false);
                  }}
                  id={name}
                  onChange={(val: any) => {
                    setFieldValue(name, val);
                  }}
                  value={rest?.formik?.values[name]}
                />
              </OutlinedFormField>
            );
          }}
        </Field>
      ) : (
        <FormFieldSkeleton />
      )}
      {error && rest.formik.errors[name] && <MessageComponent>{rest.formik.errors[name]}</MessageComponent>}
    </InputContainer>
  );
};

export default TimePicker;
