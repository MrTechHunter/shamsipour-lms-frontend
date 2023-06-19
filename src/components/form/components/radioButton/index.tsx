import React from 'react';
import { InputContainer, MessageWrapper, OutlinedFormField, OutlineLabel } from './style';
import { Field, ErrorMessage } from 'formik';
import RadioButton from '../../../radioBotton';
import FormFieldSkeleton from '../../skeletonFormField';

interface IMessageComponent {
  children?: any;
  type?: string;
  labelOnTop?: boolean;
  disabled?: boolean;
}
interface IFormRadioButton {
  label?: string;
  name?: string | any;
  options?: { value: string; label: string }[];
  loading?: boolean;
  rest?: any;
  disabled?: boolean;
  mB?: string;
  pyLess?: boolean;
  onChange: (data: any) => any;
}
const MessageComponent = ({ children, type = 'error', labelOnTop }: IMessageComponent) => (
  <MessageWrapper type={type} labelOnTop={labelOnTop}>
    {children}
  </MessageWrapper>
);

const RadioButtons = ({ label, name, options, loading, disabled, mB, pyLess, onChange, ...rest }: IFormRadioButton) => {
  const inputWrapperStyle = {
    minWidth: '65px',
    backgroundColor: 'transparent',
    fontSize: '14px',
    alignSelf: 'flex-start',
    color: 'rgba(62, 63, 68, 0.87)',
    minHeight: '17px',
  };
  return (
    <InputContainer mB={mB}>
      {!loading && (
        <>
          <OutlinedFormField pyLess={pyLess}>
            {label && <OutlineLabel htmlFor={name}>{label}</OutlineLabel>}
            <Field name={name} {...rest}>
              {(data: any) =>
                options?.map((item) => {
                  return (
                    <div key={item.value} style={inputWrapperStyle}>
                      <RadioButton
                        disabled={disabled}
                        name={data.field.name}
                        id={data.field.name}
                        {...data.field}
                        onFocus={() => {
                          data.form.setFieldError(name, '');
                          data.form.setTouched({ ...data.form.touched, [name]: true });
                        }}
                        onBlur={() => {
                          data.form.setFieldError(name, data.form.errors[name]);
                          data.form.setTouched({ ...data.form.touched, [name]: false });
                        }}
                        onClick={() => {
                          if (disabled) {
                            return false;
                          } else {
                            if (onChange) {
                              onChange(item.value);
                            } else {
                              data.form.setFieldValue(data.field.name, item.value);
                            }
                            return item.value;
                          }
                        }}
                        checked={String(data.field.value) === String(item.value)}
                        label={item.label}
                      />
                    </div>
                  );
                })
              }
            </Field>
          </OutlinedFormField>
          <ErrorMessage name={name} component={MessageComponent} />
        </>
      )}
      {loading && <FormFieldSkeleton />}
    </InputContainer>
  );
};

export default RadioButtons;
