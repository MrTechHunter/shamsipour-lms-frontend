/* eslint-disable */
// @ts-nocheck
import React, { useState } from 'react';
import { MessageWrapper, InputContainer, TinyInputContainer, InputLabel } from './style';
import { ErrorMessage } from 'formik';
import { components } from 'react-select';
import variables from '../../../../../constants/styleVariables';
import CustomSelect from 'react-select';
import FormFieldSkeleton from '../../../skeletonFormField';

const MessageComponent = ({ children, type = 'error', labelOnTop }) => {
  return (
    <MessageWrapper type={type} labelOnTop={labelOnTop}>
      {children}
    </MessageWrapper>
  );
};
const customStyles = (error) => ({
  control: (styles, state) => {
    const transition = '';
    return {
      ...styles,
      transition,
      boxShadow: 'none',
      outline: '0',
      '&:hover': {
        border: `1px solid ${
          error
            ? variables.colors.error
            : state.selectProps.menuIsOpen
            ? variables.colors.primary
            : variables.colors.black_38
        }`,
        boxShadow: 'none',
      },
      border: `1px solid ${
        error
          ? `${variables.colors.error}`
          : state.selectProps.menuIsOpen
          ? `${variables.colors.primary} !important`
          : `${variables.colors.black_12}`
      }`,
      height: '40px',
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexWrap: 'nowrap',
      backgroundColor: variables.colors.white,
      borderRadius: '4px',
      padding: '12px 12px',
    };
  },
  container: (styles) => {
    return {
      ...styles,
      boxShadow: 'none',
      borderRadius: '4px',
    };
  },
  valueContainer: (styles) => ({
    ...styles,
    overflow: 'visible',
    boxShadow: 'none',
    color: 'red',
    paddingRight: 0,
  }),
  input: (styles) => ({
    ...styles,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'right',
    color: error ? variables.colors.error : variables.colors.blue_200,
  }),
  singleValue: (styles, state) => ({
    ...styles,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '24px',
    textAlign: 'right',
    color: error ? variables.colors.error : state.isDisabled ? variables.colors.black_38 : variables.colors.black_87,
  }),
  multiValue: (styles) => {
    return {
      ...styles,
      background: 'rgba(0,0,0,0.06)',
      borderRadius: '4px',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '12px',
      lineHeight: '14px',
      textAlign: 'right',
      color: variables.colors.blue_200,
    };
  },
  multiValueLabel: (styles) => {
    return {
      ...styles,
      fontWeight: 400,
      color: variables.colors.black_87,
      fontSize: '12px',
      lineHeight: '17px',
      margin: '4px',
    };
  },
  multiValueRemove: (styles) => {
    return {
      ...styles,
      '&:hover': {
        backgroundColor: 'transparent',
        cursor: 'pointer',
      },
    };
  },
  placeholder: (styles, state) => {
    return {
      ...styles,
      position: 'absolute',
      top: state.selectProps.menuIsOpen
        ? -15
        : state.hasValue || state.selectProps.inputValue
        ? -15
        : 'calc(50% - 12px)',
      right: 3,
      transition: 'top 0.1s, font-size 0.1s',
      fontSize: '12px',
      height: 17,
      backgroundColor: variables.colors.white,
      color: error
        ? variables.colors.error
        : state.selectProps.menuIsOpen
        ? variables.colors.primary
        : variables.colors.black_60,
    };
  },
  option: (styles, isSelected) => {
    return {
      ...styles,
      width: '100%',
      height: '40px',
      color: variables.colors[isSelected ? 'blue_800' : 'black_87'],
      background: variables.colors.white,
      borderRadius: '0',
      marginBottom: '8px',
      '&:hover': {
        background: variables.colors.blue_050,
      },
      '&:last-child': {
        marginBottom: '0',
      },
    };
  },
  menu: (styles) => {
    return {
      ...styles,
      background: variables.colors.white,
      boxShadow: '0px 2px 4px #B6C3D1',
      borderRadius: '4px',
      padding: '10px 0',
      top: '89%',
      zIndex: 999,
      width: 'max-content',
      minWidth: '100%',
    };
  },
});
const customTinyStyles = (error) => ({
  control: (styles, state) => {
    const transition = '';
    return {
      ...styles,
      transition,
      boxShadow: 'none',
      outline: 'unset',
      '&:hover': {
        borderColor: error
          ? variables.colors.error
          : state.selectProps.menuIsOpen
          ? variables.colors.primary
          : variables.colors.black_38,
        boxShadow: 'none',
      },
      border: `1px solid ${
        error
          ? variables.colors.error
          : state.selectProps.menuIsOpen
          ? variables.colors.primary
          : variables.colors.black_12
      }`,
      height: '20px',
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      minHeight: '28px',
      alignItems: 'center',
      flexWrap: 'nowrap',
      backgroundColor: state.isDisabled ? 'rgba(234,234,238,0.4)' : variables.colors.white,
      borderRadius: '32px',
      padding: '4px 6px',
      fontSize: '12px',
    };
  },
  container: (styles) => {
    return {
      ...styles,
      boxShadow: 'none',
      borderRadius: 8,
      '&:hover': {
        borderColor: '#000',
      },
    };
  },
  valueContainer: (styles) => ({
    ...styles,
    overflow: 'visible',
    boxShadow: 'none',
    color: 'red',
    paddingRight: 0,
  }),
  input: (styles) => ({
    ...styles,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '24px',
    textAlign: 'right',
    color: error ? variables.colors.error : variables.colors.black_87,
  }),
  singleValue: (styles) => ({
    ...styles,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '24px',
    textAlign: 'right',
    color: error ? variables.colors.error : variables.colors.black_87,
  }),
  multiValue: (styles) => {
    return {
      ...styles,
      padding: '4px 12px 4px 4px',
      background: variables.colors.white,
      borderRadius: '8px',
      fontStyle: 'normal',
      fontWeight: 300,
      fontSize: '12px',
      lineHeight: '14px',
      textAlign: 'right',
      color: variables.colors.blue_200,
    };
  },
  multiValueRemove: (styles) => {
    return {
      ...styles,
      '&:hover': {
        backgroundColor: 'transparent',
        cursor: 'pointer',
      },
    };
  },
  placeholder: (styles, state) => {
    return {
      ...styles,
      height: 17,
      color: error
        ? variables.colors.error
        : state.selectProps.menuIsOpen
        ? variables.colors.primary
        : variables.colors.black_87,
    };
  },
  option: (styles, isSelected) => {
    return {
      ...styles,
      width: '100%',
      height: '40px',
      color: variables.colors[isSelected ? 'primary' : 'black_87'],
      background: 'transparent',
      boxShadow: '',
      marginBottom: '8px',
      '&:hover': {
        background: variables.colors.blue_050,
      },
      '&:last-child': {
        marginBottom: '0',
      },
    };
  },
  menu: (styles) => {
    return {
      ...styles,
      background: variables.colors.white,
      boxShadow: '0px 2px 4px #B6C3D1',
      borderRadius: '16px',
      padding: '10px 0',
      top: '89%',
      zIndex: 999,
      width: 'max-content',
      minWidth: '100%',
      fontSize: '12px',
    };
  },
});

const ValueContainer = ({ children, ...props }) => {
  const { ValueContainer, Placeholder } = components;
  return (
    <ValueContainer {...props}>
      <Placeholder {...props} isFocused={props.isFocused}>
        {props.selectProps.placeholder}
      </Placeholder>
      {React.Children.map(children, (child) => (child && child.type !== Placeholder ? child : null))}{' '}
    </ValueContainer>
  );
};
const MultiValueRemove = (props) => {
  return (
    <components.MultiValueRemove {...props}>
      <i className="lms-close text-base text-black_60" />
    </components.MultiValueRemove>
  );
};
const ReactSelect = (props) => {
  const { label, name, options, value, onChange, loading, error, notice, disabled, ...rest } = props;
  return (
    <>
      <CustomSelect
        classNamePrefix="Select"
        name={name}
        options={options}
        components={rest.isMulti ? { ValueContainer, MultiValueRemove } : undefined}
        placeholder={rest.variant === 'tiny' ? label : ''}
        styles={rest.variant === 'tiny' ? customTinyStyles(error) : customStyles(error)}
        onChange={onChange}
        loading={loading}
        value={value}
        isDisabled={disabled}
        noOptionsMessage={() => 'داده‌ای وجود ندارد!'}
        {...rest}
      />
      {!error && notice && <MessageComponent type="notice">{notice}</MessageComponent>}
      <ErrorMessage name={name} component={MessageComponent} />
    </>
  );
};
const Select = (props) => {
  const { formik, name, onChange, ...rest } = props;
  const [labelOnTop, setLabelOnTop] = useState(false);
  const value =
    rest.variant === 'tiny'
      ? rest.options?.find((option) => option.value === formik.values[name]) || ''
      : formik.values[name];
  const onBlur = () => {
    setLabelOnTop(false);
    formik.handleBlur({ target: { name } });
  };
  const changeHandler = (data) => {
    if (!data.value && !rest.isMulti) {
      formik.setFieldValue(name, '');
      formik.setErrors({ [name]: 'required!' });
      return false;
    }
    if (onChange && !rest.isMulti && rest.variant !== 'tiny') {
      return onChange(data);
    } else if (onChange && !rest.isMulti && rest.variant === 'tiny') {
      return onChange(data.value);
    } else if (onChange && rest.isMulti) {
      return onChange(data);
    } else {
      formik.setFieldValue(name, data.value);
    }
  };

  const error = formik.touched[name] ? formik.errors[name] : '';
  if (rest.variant === 'tiny') {
    return (
      <TinyInputContainer>
        {!rest.loading ? (
          <ReactSelect
            onChange={changeHandler}
            error={error}
            name={name}
            value={value}
            onBlur={onBlur}
            variant={rest.variant}
            options={rest.options}
            label={rest.label}
            isMulti={false}
            {...rest}
          />
        ) : (
          <FormFieldSkeleton />
        )}
      </TinyInputContainer>
    );
  } else {
    return (
      <>
        {!rest.loading ? (
          <InputContainer>
            <InputLabel isFilled={rest.isMulti ? !!value.length : !!value} labelOnTop={labelOnTop}>
              {rest.label}
            </InputLabel>
            <ReactSelect
              onChange={changeHandler}
              error={error}
              name={name}
              value={value}
              options={rest.options}
              onBlur={onBlur}
              isMulti={rest.isMulti}
              {...rest}
            />
          </InputContainer>
        ) : (
          <FormFieldSkeleton />
        )}
      </>
    );
  }
};

export default Select;
