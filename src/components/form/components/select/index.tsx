import React, { useState } from 'react';
import { MessageWrapper, InputContainer, TinyInputContainer, InputLabel } from './style';
import { ErrorMessage } from 'formik';
import variables from '../../../../constants/styleVariables';
import CustomSelect, { components } from 'react-select';
import FormFieldSkeleton from '../../skeletonFormField';
import { FormikProps, FormikValues } from 'formik';

interface ISelect {
  children?: React.ReactNode;
  type?: string | undefined;
  labelOnTop?: any;
}
const MessageComponent: React.FC<ISelect> = ({ children, type = 'error', labelOnTop }) => {
  return (
    <MessageWrapper type={type} labelOnTop={labelOnTop}>
      {children}
    </MessageWrapper>
  );
};
const customStyles = (error: string) => ({
  control: (styles: any, state: any) => {
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
      backgroundColor: 'transparent',
      borderRadius: '4px',
      padding: '12px 16px',
    };
  },
  container: (styles: any) => {
    return {
      ...styles,
      boxShadow: 'none',
      borderRadius: '4px',
    };
  },
  valueContainer: (styles: any) => ({
    ...styles,
    overflow: 'visible',
    boxShadow: 'none',
    color: 'red',
    paddingRight: 0,
  }),
  input: (styles: any) => ({
    ...styles,
    fontStyle: 'normal',
    fontWeight: 'normal',
    textAlign: 'right',
    color: error ? variables.colors.error : variables.colors.blue_200,
  }),
  singleValue: (styles: any, state: any) => ({
    ...styles,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '24px',
    textAlign: 'right',
    color: error ? variables.colors.error : state.isDisabled ? variables.colors.black_38 : variables.colors.black_87,
  }),
  multiValue: (styles: any) => {
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
      '&:hover': {
        background: 'rgba(0,0,0,0.12)',
      },
      '&:active': {
        background: 'rgba(0,0,0,0.18)',
      },
    };
  },
  multiValueLabel: (styles: any) => {
    return {
      ...styles,
      fontWeight: 400,
      color: variables.colors.black_87,
      fontSize: '12px',
      lineHeight: '17px',
      margin: '4px',
    };
  },
  multiValueRemove: (styles: any) => {
    return {
      ...styles,
      color: 'rgba(0, 0, 0,0.6)',
      '&:hover': {
        background: 'transparent',
      },
    };
  },
  placeholder: (styles: any, state: any) => {
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
  option: (styles: any, { isSelected }: { isSelected: boolean }) => {
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
  menu: (styles: any) => {
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
const customTinyStyles = (error: string) => ({
  control: (styles: any, state: any) => {
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
  container: (styles: any) => {
    return {
      ...styles,
      boxShadow: 'none',
      borderRadius: 8,
      '&:hover': {
        borderColor: '#000',
      },
    };
  },
  valueContainer: (styles: any) => ({
    ...styles,
    overflow: 'visible',
    boxShadow: 'none',
    color: 'red',
    paddingRight: 0,
  }),
  input: (styles: any) => ({
    ...styles,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '24px',
    textAlign: 'right',
    color: error ? variables.colors.error : variables.colors.black_87,
  }),
  singleValue: (styles: any) => ({
    ...styles,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '14px',
    lineHeight: '24px',
    textAlign: 'right',
    color: error ? variables.colors.error : variables.colors.black_87,
  }),
  multiValue: (styles: any) => {
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
  multiValueRemove: (styles: any) => {
    return {
      ...styles,
      '&:hover': {
        backgroundColor: 'transparent',
        cursor: 'pointer',
      },
    };
  },
  placeholder: (styles: any, state: any) => {
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
  option: (styles: any, { isSelected }: { isSelected: boolean }) => {
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
  menu: (styles: any) => {
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
const ValueContainer = (props: any) => {
  const { ValueContainer, Placeholder }: { ValueContainer: any; Placeholder: any } = components;
  return (
    <ValueContainer {...props}>
      <Placeholder {...props} isFocused={props.isFocused}>
        {props.selectProps.placeholder}
      </Placeholder>
      {React.Children.map(props.children, (child) => (child && child.type !== Placeholder ? child : null))}
    </ValueContainer>
  );
};
const MultiValueRemove = (props: any) => {
  return (
    <components.MultiValueRemove {...props}>
      <i className="me-close_FILL0_wght400_GRAD0_opsz48-21" />
    </components.MultiValueRemove>
  );
};
interface IOptions {
  label: string;
  value: string;
}
interface IReactSelect {
  label?: string;
  name: string;
  options?: IOptions[];
  value?: any;
  onChange: any;
  loading?: boolean;
  error?: any;
  notice?: string;
  disabled?: boolean;
  onBlur?: any;
  variant?: string;
  isMulti?: boolean;
  menuIsOpen?: boolean;
}
const ReactSelect = ({
  label,
  name,
  options,
  value,
  onChange,
  loading,
  error,
  notice,
  disabled,
  onBlur,
  variant,
  isMulti = false,
  menuIsOpen = false,
  ...rest
}: IReactSelect) => {
  return (
    <>
      <CustomSelect
        classNamePrefix="Select"
        name={name}
        options={options}
        components={isMulti ? { ValueContainer, MultiValueRemove } : undefined}
        placeholder={variant === 'tiny' ? label : ''}
        styles={variant === 'tiny' ? customTinyStyles(error) : customStyles(error)}
        onChange={onChange}
        isLoading={loading}
        value={value}
        isDisabled={disabled}
        onBlur={onBlur}
        noOptionsMessage={() => 'داده‌ای وجود ندارد!'}
        isMulti={isMulti}
        {...rest}
      />
      {!error && notice && <MessageComponent type="notice">{notice}</MessageComponent>}
      <ErrorMessage name={name} component={MessageComponent} />
    </>
  );
};
const Select = ({
  formik,
  name,
  onChange,
  isMulti,
  loading,
  variant,
  options,
  label,
  ...rest
}: {
  formik: FormikProps<FormikValues>;
  name: string;
  onChange?: (data: any) => void;
  isMulti?: boolean;
  loading?: boolean;
  variant?: string;
  label: string;
  options?: { label: string; value: string }[];
  rest: any;
}) => {
  const [labelOnTop, setLabelOnTop] = useState(false);
  let value = options?.find((option) => String(option.value) === String(formik.values[name])) || '';
  if (isMulti) {
    value = formik.values[name].length ? formik.values[name] : '';
  }
  const onBlur: any = () => {
    setLabelOnTop(false);
    formik.handleBlur({ target: { name } });
  };
  const changeHandler = (data: any): any => {
    if (!data.value && !isMulti) {
      formik.setFieldValue(name, '');
      formik.setErrors({ [name]: 'required!' });
      return false;
    }
    if (onChange) {
      if (isMulti) {
        return onChange(data);
      } else {
        return onChange(data.value);
      }
    } else {
      if (isMulti) {
        formik.setFieldValue(name, data);
      } else {
        formik.setFieldValue(name, data.value);
      }
    }
  };
  const error: string | any = formik.touched[name] ? formik.errors[name] : '';
  if (variant === 'tiny') {
    return (
      <TinyInputContainer>
        {!loading ? (
          <ReactSelect
            onChange={changeHandler}
            error={error}
            name={name}
            value={value}
            onBlur={onBlur}
            variant={variant}
            options={options}
            label={label}
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
        {!loading ? (
          <InputContainer>
            <InputLabel isFilled={!!value} labelOnTop={labelOnTop}>
              {label}
            </InputLabel>
            <ReactSelect
              onChange={changeHandler}
              error={error}
              name={name}
              value={value}
              options={options}
              onBlur={onBlur}
              isMulti={isMulti}
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
