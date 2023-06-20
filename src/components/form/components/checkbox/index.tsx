import React from 'react';
import { MessageWrapper, InputContainer, OutlinedFormField, OutlineLabel } from './style';
import { Field, ErrorMessage } from 'formik';
import FormFieldSkeleton from '../../skeletonFormField';
import CheckBox from '../../../checkbox';
interface IMessageComponent {
  children?: any;
  type?: string;
  labelOnTop?: boolean;
  disabled?: boolean;
}
interface IFormCheckbox {
  label?: string;
  name?: string | any;
  options?: { value: string; label: string }[];
  loading?: boolean;
  rest?: any;
  disabled?: boolean;
  onChange?: any;
}
const MessageComponent = ({ children, type = 'error', labelOnTop }: IMessageComponent) => (
  <MessageWrapper type={type} labelOnTop={labelOnTop}>
    {children}
  </MessageWrapper>
);

const FormCheckbox = ({ label, name, options, loading, onChange, disabled, ...rest }: IFormCheckbox) => {
  interface IInputWrapperStyle {
    minWidth: string;
    backgroundColor: string;
    fontSize: string;
    alignSelf: string;
    justifyContent: string;
    flexDirection: 'column' | 'row';
    color: string;
    minHeight: string;
  }
  const inputWrapperStyle: IInputWrapperStyle = {
    minWidth: '75px',
    backgroundColor: 'transparent',
    fontSize: '14px',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    color: 'rgba(62, 63, 68, 0.87)',
    minHeight: '17px',
  };
  return (
    <InputContainer>
      {!loading && (
        <>
          <OutlinedFormField>
            {label && <OutlineLabel htmlFor={name}>{label}</OutlineLabel>}
            <Field name={name} {...rest}>
              {(data: { field: { value: string | any; name: string }; form: any }) => {
                return options?.map((item) => {
                  const checked =
                    data && data.field && data.field.value
                      ? !!data.field.value?.find((findItem: { value: string }) => findItem.value === item.value)
                      : false;
                  return (
                    <div key={item.value} style={inputWrapperStyle}>
                      <CheckBox
                        size={'md'}
                        id={data.field.name}
                        checked={checked}
                        disabled={disabled}
                        onSelect={() => {
                          if (onChange) {
                            if (!data.field.value.find((findItem: any) => findItem.value === item.value)) {
                              onChange([...data.field.value, item]);
                            } else {
                              onChange(data.field.value.filter((findItem: any) => findItem.value !== item.value));
                            }
                          } else {
                            if (!data.field.value.find((findItem: any) => findItem.value === item.value)) {
                              data.form.setFieldValue(data.field.name, [...data.field.value, item]);
                            } else {
                              data.form.setFieldValue(
                                data.field.name,
                                data.field.value.filter((findItem: any) => findItem.value !== item.value)
                              );
                            }
                            return item.value;
                          }
                        }}
                        onFocus={() => {
                          data.form.setFieldError(name, '');
                          data.form.setTouched({ ...data.form.touched, [name]: true });
                        }}
                        onBlur={() => {
                          data.form.setFieldError(name, data.form.errors[name]);
                          data.form.setTouched({ ...data.form.touched, [name]: false });
                        }}
                        label={item.label}
                        {...data.field}
                      >
                        {item.label}
                      </CheckBox>
                    </div>
                  );
                });
              }}
            </Field>
          </OutlinedFormField>
          <ErrorMessage name={name} component={MessageComponent} />
        </>
      )}
      {loading && <FormFieldSkeleton />}
    </InputContainer>
  );
};

export default FormCheckbox;
