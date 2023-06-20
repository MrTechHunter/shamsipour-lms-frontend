import React, { FC, useState, useEffect } from 'react';
import { Field } from 'formik';
import FormFieldSkeleton from '../../skeletonFormField';
import {
  OutlinedInputContainer,
  MessageWrapper,
  OutlinedFormField,
  OutlinedInputWrapper,
  OutlineLabel,
  OptionContainer,
  TextContainer,
  OptionText,
  Seprator,
} from './style';
import persianNumToEnglish from '../../../../helpers/persianNumToEnglish';

interface IMessageComponent {
  children?: any;
  type?: string;
  labelOnTop?: boolean;
  disabled?: boolean;
}
const MessageComponent = ({ children, type = 'error', labelOnTop, disabled }: IMessageComponent) => {
  return (
    <MessageWrapper type={type} labelOnTop={labelOnTop} disabled={disabled}>
      {children}
    </MessageWrapper>
  );
};

interface IInputComponent {
  field: { name: string; value: { key: string; value: string }; onBlur: (e: any) => void };
  form: any;
  notice: string;
  disabled: boolean;
  options: { key: string; label: string; ButtonText: string }[];
  onChange?: any;
  unselectedLabel?: string;
}
const InputOutlinedComponent = ({
  field,
  form,
  disabled,
  notice,
  options,
  onChange,
  unselectedLabel,
  ...props
}: IInputComponent) => {
  const [labelOnTop, setLabelOnTop] = useState(false);
  const [selectedType, setSelectedType] = useState<any>({ label: unselectedLabel, key: '' });
  useEffect(() => {
    if (options.length >= 1) {
      setSelectedType(options?.find((option) => option.key === field?.value?.key));
    }
  }, [options]);
  const index = field.name.substring(field.name.indexOf('[') + 1, field.name.indexOf(']'));
  const fieldParentName = field.name.substring(0, field.name.indexOf('['));
  const fieldName = field.name.substring(field.name.indexOf(']') + 2, field.name.length);
  const isFieldArray =
    index &&
    form.touched[fieldParentName] &&
    form.touched[fieldParentName][index] &&
    form.touched[fieldParentName][index][fieldName] &&
    form.errors[fieldParentName] &&
    form.errors[fieldParentName][index] &&
    form.errors[fieldParentName][index][fieldName];
  const changeInputType = (selectedItem: any) => {
    if (disabled) {
      return false;
    }
    const _value = options?.find((option) => option.key === selectedItem?.key);
    if (_value?.key === 'INFINITY') {
      if (field.value.key === 'INFINITY') {
        changeHandler({ key: '', value: '' });
        setSelectedType({
          key: '',
          label: '',
          ButtonText: '',
        });
      } else {
        changeHandler({ key: 'INFINITY', value: 'بینهایت تراکنش' });
        setSelectedType(_value);
      }
    } else if (_value?.key !== 'INFINITY' && options.length === 1) {
      setSelectedType({
        key: '',
        label: '',
        ButtonText: '',
      });
      return false;
    } else {
      form.setFieldTouched(field.name, false);
      setSelectedType(_value);
      changeHandler({ key: _value?.key, value: '' });
    }
    const _touched = {
      ...form.touched,
      [`${fieldParentName}`]: form.touched[fieldParentName]?.map((item: any, mapIndex: number) => {
        if (item[fieldName] && Number(index) === Number(mapIndex)) {
          item[fieldName] = false;
        }
        return item;
      }),
    };
    form.setTouched(_touched);
  };
  const changeValueHandler = (_data: any) => {
    // old setValue codes

    // if (isFieldArray) {
    //   const _values = {
    //     ...form.values,
    //     [`${fieldParentName}`]: form.values[fieldParentName].map((item: any, mapIndex: number) => {
    //       if ((item[fieldName] || item[fieldName] === '') && Number(index) === Number(mapIndex)) {
    //         item[fieldName] = {
    //           ..._data,
    //           value:
    //             _data.key === 'PERCENT' && _data.value >= 100
    //               ? 100
    //               : _data.key === 'INFINITY'
    //               ? _data.value
    //               : persianNumToEnglish(_data.value).replace(/\b0+\B|[^0-9.]/g, ''),
    //         };
    //       }
    //       return item;
    //     }),
    //   };
    //   form.setValues(_values);
    // } else {
    //   console.log('not FieldArray');
    //   form.setFieldValue(field.name, {
    //     ..._data,
    //     value:
    //       _data.key === 'PERCENT' && _data.value >= 100
    //         ? 100
    //         : _data.key === 'INFINITY'
    //         ? _data.value
    //         : persianNumToEnglish(_data.value).replace(/\b0+\B|[^0-9.]/g, ''),
    //   });
    // }

    // testing new setValueHandler in progress

    form.setFieldValue(field.name, {
      ..._data,
      value:
        _data.key === 'PERCENT' && _data.value >= 100
          ? 100
          : _data.key === 'INFINITY'
          ? _data.value
          : persianNumToEnglish(_data.value).replace(/\b0+\B|[^0-9.]/g, ''),
    });
  };
  const changeHandler = (data: any) => {
    let _data = { value: data.value, key: data.key };
    if (data?.value !== 'بینهایت تراکنش') {
      _data = { ..._data, value: data.value.split(',').join('') };
    }
    if (!data.key) {
      _data = { value: data?.value !== 'بینهایت تراکنش' ? data.value.split(',').join('') : data.value, key: '' };
    }
    if (onChange) {
      return onChange(_data);
    } else {
      changeValueHandler(_data);
      return false;
    }
  };
  const getValue = () => {
    const fieldKey = field?.value?.key;
    const fieldValue = persianNumToEnglish(field?.value?.value);
    if ((options.length === 1 && options[0].key === 'AMOUNT') || fieldKey === 'AMOUNT') {
      return fieldValue ? Number(fieldValue).toLocaleString() : fieldValue;
    }
    if ((options.length === 1 && options[0].key === 'PERCENT') || fieldKey === 'PERCENT') {
      return fieldValue && fieldValue >= 100 ? 100 : fieldValue;
    }
    if (field?.value?.value === 'بینهایت تراکنش') {
      return field?.value?.value;
    } else {
      return fieldValue;
    }
  };

  let error: boolean = form.touched[field.name] && form.errors[field.name];
  let errorMessage = '';
  if (error) {
    errorMessage = form.errors[field.name]['value'] || form.errors[field.name]['key'];
  } else {
    if (isFieldArray) {
      error = form.touched[fieldParentName][index][fieldName] && form.errors[fieldParentName][index][fieldName];
      errorMessage =
        form.errors[fieldParentName][index][fieldName]['value'] ||
        form.errors[fieldParentName][index][fieldName]['key'];
    }
  }

  return (
    <>
      {field?.value?.key && (
        <OutlineLabel
          isFilled={!!field?.value?.value}
          error={error}
          labelOnTop={labelOnTop}
          htmlFor={field.name}
          disabled={selectedType?.key === 'INFINITY' || disabled}
        >
          {selectedType?.label}
        </OutlineLabel>
      )}
      {unselectedLabel && !field?.value?.key && (
        <OutlineLabel
          isFilled={!!field?.value?.value}
          error={error}
          labelOnTop={labelOnTop}
          htmlFor={field.name}
          disabled={disabled}
        >
          {unselectedLabel}
        </OutlineLabel>
      )}
      <OutlinedFormField error={error} labelOnTop={labelOnTop} disabled={selectedType?.key === 'INFINITY' || disabled}>
        <OutlinedInputWrapper
          onFocus={() => {
            setLabelOnTop(true);
          }}
          error={error}
          labelOnTop={labelOnTop}
          type="string"
          {...field}
          value={getValue()}
          {...props}
          disabled={selectedType?.key === 'INFINITY' || disabled}
          onChange={(e) => {
            e.preventDefault();
            changeHandler({ key: selectedType?.key || '', value: e.target.value });
          }}
          onBlur={() => {
            setLabelOnTop(false);
            form.handleBlur({ target: { name: field.name } });
          }}
        />
      </OutlinedFormField>
      <OptionContainer>
        {options.slice(0, 3).map((option) => {
          return (
            <React.Fragment key={option.key}>
              <div>
                <TextContainer
                  className={'no-select'}
                  onClick={() => changeInputType(option)}
                  selected={selectedType ? option.key === selectedType?.key : ''}
                  disabled={disabled && option.key === selectedType?.key}
                >
                  <OptionText>{option.ButtonText}</OptionText>
                </TextContainer>
              </div>
              {options.length > 1 ? <Seprator className={'no-select'} /> : null}
            </React.Fragment>
          );
        })}
      </OptionContainer>
      {!error && notice && (
        <MessageComponent labelOnTop={labelOnTop} type="notice">
          {notice}
        </MessageComponent>
      )}
      {error && <MessageComponent labelOnTop={labelOnTop}>{errorMessage}</MessageComponent>}
    </>
  );
};

interface ISwitchInput {
  loading: boolean;
  name: string;
  variant?: string;
  props: any;
}
const SwitchInput: FC<ISwitchInput> = ({ loading, name, variant, ...props }) => {
  return (
    <>
      {!loading ? (
        <OutlinedInputContainer>
          <Field name={name} {...props} component={InputOutlinedComponent} />
        </OutlinedInputContainer>
      ) : (
        <FormFieldSkeleton variant="outlined" />
      )}
    </>
  );
};
export default SwitchInput;
