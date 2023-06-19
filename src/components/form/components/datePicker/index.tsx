import React, { useState, useEffect } from 'react';
import {
  FilledInputContainer,
  TinyInputContainer,
  OutlinedInputContainer,
  FilledFormField,
  MessageWrapper,
  FilledIconWrapper,
  FilledLabel,
  FilledDatePickerInputWrapper,
  OutlinedFormField,
  OutlinedLabel,
  OutlinedIconWrapper,
  OutlinedDatePickerInputWrapper,
  TinyLabel,
  TinyDatePickerInputWrapper,
  TinyFormField,
  TinyIconWrapper,
} from './style';
import { Field, Formik } from 'formik';
import './datePicker.css';
import DatePicker from '@amir04lm26/react-modern-calendar-date-picker';
import FormFieldSkeleton from '../../skeletonFormField';
import { objectToTimeStamp, objectToString, timeStampToObject } from '../../../../helpers/dateFormatter';

interface ISelect {
  children?: React.ReactNode;
  type?: string | undefined;
  labelOnTop?: any;
}
interface IDate {
  year?: number;
  month?: number;
  day?: number;
}
const MessageComponent: React.FC<ISelect> = ({ children, type = 'error', labelOnTop }) => (
  <MessageWrapper type={type} labelOnTop={labelOnTop}>
    {children}
  </MessageWrapper>
);
interface IInput {
  field: { name: string; value: IDate | any };
  form: any;
  leftIcon?: string;
  rightIcon?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  hasResetButton?: boolean;
  disabled?: boolean;
  notice?: string;
  id?: any;
  onChange?: (p: any) => void;
  minimumdate: { year: number; month: number; day: number };
}
const Filled: React.FC<IInput> = ({
  field,
  form,
  leftIcon,
  rightIcon,
  type,
  label,
  placeholder,
  hasResetButton,
  notice,
  onChange,
  disabled,
  minimumdate: minimumDate,
  ...rest
}) => {
  const [labelOnTop, setLabelOnTop] = useState(false);
  const [error, setError] = useState(false);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [leftIconClassName, setLeftIconClassName] = useState(leftIcon);
  const [rightIconClassName, setRightIconClassName] = useState(rightIcon);
  useEffect(() => {
    setSelectedDay(field.value);
  }, [field.value]);
  useEffect(() => {
    setError(!!form.errors[field.name] && !!form.touched[field.name]);
  }, [form]);
  const showLabel = !(field.value && !labelOnTop);
  const CustomInput = ({ ref }: { ref: string | any }) => (
    <input
      readOnly
      ref={ref}
      value={selectedDay ? objectToString(timeStampToObject(selectedDay)) : ' '}
      onChange={() => false}
      onBlur={() => {
        form.setTouched({ ...form.touched, [field.name]: true });
        setLabelOnTop(false);
        setError(!!form.errors[field.name] && !!form.touched[field.name]);
      }}
      onFocus={() => {
        setLabelOnTop(true);
      }}
      className="customDatePicker"
      {...rest}
    />
  );

  return (
    <>
      {label && showLabel && (
        <FilledLabel rightIcon={rightIcon} error={error} labelOnTop={labelOnTop} htmlFor={field.name}>
          {label}
        </FilledLabel>
      )}
      <FilledFormField error={error} labelOnTop={labelOnTop}>
        {rightIcon && (
          <FilledIconWrapper error={error} labelOnTop={labelOnTop}>
            <i className={rightIconClassName} />
          </FilledIconWrapper>
        )}
        <FilledDatePickerInputWrapper error={error} labelOnTop={labelOnTop} leftIcon={leftIcon} rightIcon={rightIcon}>
          <DatePicker
            onChange={(data: IDate | any) => {
              setSelectedDay(objectToTimeStamp(data));
              form.setFieldValue(field.name, objectToTimeStamp(data));
              if (onChange) {
                onChange(objectToTimeStamp(data));
              }
            }}
            renderInput={CustomInput}
            locale="fa"
            id={field.name}
            minimumDate={minimumDate}
            {...rest}
          />
        </FilledDatePickerInputWrapper>
        {leftIcon && (
          <FilledIconWrapper
            onClick={() => (hasResetButton ? form.setFieldValue(field.name, form.initialValues[field.name]) : false)}
            error={error}
            labelOnTop={labelOnTop}
          >
            <i className={leftIconClassName} />
          </FilledIconWrapper>
        )}
      </FilledFormField>
      {!error && notice && (
        <MessageComponent labelOnTop={labelOnTop} type="notice">
          {notice}
        </MessageComponent>
      )}
      {error && form.errors[field.name] && <MessageComponent>{form.errors[field.name]}</MessageComponent>}
    </>
  );
};
const Outlined: React.FC<IInput> = ({
  field,
  form,
  leftIcon,
  rightIcon,
  type,
  label,
  placeholder,
  hasResetButton,
  notice,
  onChange,
  disabled,
  minimumdate: minimumDate,
  ...rest
}) => {
  const [labelOnTop, setLabelOnTop] = useState(false);
  const [error, setError] = useState(false);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [leftIconClassName, setLeftIconClassName] = useState(leftIcon);
  const [rightIconClassName, setRightIconClassName] = useState(rightIcon);
  useEffect(() => {
    setSelectedDay(field.value);
  }, [field.value]);
  useEffect(() => {
    setError(!!form.errors[field.name] && !!form.touched[field.name]);
  }, [form]);
  const CustomInput = ({ ref }: { ref: string | any }) => (
    <input
      readOnly
      ref={ref}
      value={selectedDay ? objectToString(timeStampToObject(selectedDay)) : ' '}
      onChange={() => false}
      disabled={disabled}
      onBlur={() => {
        form.setTouched({ ...form.touched, [field.name]: true });
        setLabelOnTop(false);
        setError(!!form.errors[field.name] && !!form.touched[field.name]);
      }}
      onFocus={() => {
        setLabelOnTop(true);
      }}
      className="customDatePicker"
      {...rest}
    />
  );

  return (
    <>
      {label && (
        <OutlinedLabel
          isFilled={field.value}
          rightIcon={rightIcon}
          error={error}
          labelOnTop={labelOnTop}
          htmlFor={field.name}
          disabled={disabled}
        >
          {label}
        </OutlinedLabel>
      )}
      <OutlinedFormField error={error} labelOnTop={labelOnTop} disabled={disabled}>
        {rightIcon && (
          <OutlinedIconWrapper error={error} labelOnTop={labelOnTop}>
            <i className={rightIconClassName} />
          </OutlinedIconWrapper>
        )}
        <OutlinedDatePickerInputWrapper
          error={error}
          labelOnTop={labelOnTop}
          leftIcon={leftIcon}
          rightIcon={rightIcon}
          disabled={disabled}
        >
          <DatePicker
            onChange={(data: IDate | any) => {
              setSelectedDay(objectToTimeStamp(data));
              form.setFieldValue(field.name, objectToTimeStamp(data));
              if (onChange) {
                onChange(objectToTimeStamp(data));
              }
            }}
            renderInput={CustomInput}
            locale="fa"
            id={field.name}
            minimumDate={minimumDate}
            {...rest}
          />
        </OutlinedDatePickerInputWrapper>
        {leftIcon && (
          <OutlinedIconWrapper
            onClick={() => (hasResetButton ? form.setFieldValue(field.name, form.initialValues[field.name]) : false)}
            error={error}
            disabled={disabled}
            labelOnTop={labelOnTop}
          >
            <i className={leftIconClassName} />
          </OutlinedIconWrapper>
        )}
      </OutlinedFormField>
      {!error && notice && (
        <MessageComponent labelOnTop={labelOnTop} type="notice">
          {notice}
        </MessageComponent>
      )}
      {error && form.errors[field.name] && <MessageComponent>{form.errors[field.name]}</MessageComponent>}
    </>
  );
};
const Tiny: React.FC<IInput> = ({
  field,
  form,
  leftIcon,
  rightIcon,
  type,
  label,
  placeholder,
  hasResetButton,
  notice,
  onChange,
  disabled,
  minimumdate: minimumDate,
  ...rest
}) => {
  const [labelOnTop, setLabelOnTop] = useState(false);
  const [error, setError] = useState(false);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  useEffect(() => {
    setSelectedDay(field.value);
  }, [field.value]);
  useEffect(() => {
    setError(!!form.errors[field.name] && !!form.touched[field.name]);
  }, [form]);
  const CustomInput = ({ ref }: { ref: string | any }) => (
    <input
      readOnly
      ref={ref}
      value={selectedDay ? objectToString(timeStampToObject(selectedDay)) : ' '}
      onChange={() => false}
      onBlur={() => {
        form.setTouched({ ...form.touched, [field.name]: true });
        setLabelOnTop(false);
        setError(!!form.errors[field.name] && !!form.touched[field.name]);
      }}
      onFocus={() => {
        setLabelOnTop(true);
      }}
      className="customDatePicker"
      {...rest}
    />
  );

  return (
    <>
      {label && (
        <TinyLabel
          isFilled={field.value}
          rightIcon={rightIcon}
          error={error}
          labelOnTop={labelOnTop}
          htmlFor={field.name}
        >
          {label}
        </TinyLabel>
      )}
      <TinyFormField error={error} labelOnTop={labelOnTop} disabled={disabled}>
        {rightIcon && (
          <TinyIconWrapper error={error} labelOnTop={labelOnTop}>
            <i className={rightIcon + ' rightIcon'} />
          </TinyIconWrapper>
        )}
        <TinyDatePickerInputWrapper error={error} labelOnTop={labelOnTop} leftIcon={leftIcon} rightIcon={rightIcon}>
          <DatePicker
            onChange={(data: IDate | any) => {
              setSelectedDay(objectToTimeStamp(data));
              form.setFieldValue(field.name, objectToTimeStamp(data));
              if (onChange) {
                onChange(objectToTimeStamp(data));
              }
            }}
            renderInput={CustomInput}
            locale="fa"
            id={field.name}
            minimumDate={minimumDate}
            {...rest}
          />
        </TinyDatePickerInputWrapper>
        {leftIcon && (
          <TinyIconWrapper
            onClick={() => (hasResetButton ? form.setFieldValue(field.name, form.initialValues[field.name]) : false)}
            error={error}
            labelOnTop={labelOnTop}
          >
            <i className={leftIcon} />
          </TinyIconWrapper>
        )}
      </TinyFormField>
      {!error && notice && (
        <MessageComponent labelOnTop={labelOnTop} type="notice">
          {notice}
        </MessageComponent>
      )}
      {error && form.errors[field.name] && <MessageComponent>{form.errors[field.name]}</MessageComponent>}
    </>
  );
};
interface IJDatePicker {
  loading?: boolean | undefined;
  name: string | undefined;
  variant?: string | undefined;
}
const JDatePicker = ({ loading, name, variant = 'filled', ...props }: IJDatePicker) => {
  if (variant === 'outlined') {
    return (
      <OutlinedInputContainer>
        {!loading ? <Field name={name} {...props} component={Outlined} /> : <FormFieldSkeleton />}
      </OutlinedInputContainer>
    );
  } else if (variant === 'filled') {
    return (
      <FilledInputContainer>
        {!loading ? <Field name={name} {...props} component={Filled} /> : <FormFieldSkeleton />}
      </FilledInputContainer>
    );
  } else if (variant === 'tiny') {
    return (
      <TinyInputContainer>
        {!loading ? <Field name={name} {...props} component={Tiny} /> : <FormFieldSkeleton />}
      </TinyInputContainer>
    );
  } else {
    return <div>no matched variant!!</div>;
  }
};

export default JDatePicker;
