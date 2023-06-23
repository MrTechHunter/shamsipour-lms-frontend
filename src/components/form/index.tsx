import React from 'react';
import { Input, Checkbox, Select, JDatePicker, SwitchInput, RadioButtons, TimePicker } from './components';

const FormControl = ({ control, ...rest }: any) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'checkbox':
      return <Checkbox {...rest} />;
    case 'select':
      return <Select {...rest} />;
    case 'date':
      return <JDatePicker {...rest} />;
    case 'switch-input':
      return <SwitchInput {...rest} />;
    case 'radio':
      return <RadioButtons {...rest} />;
    case 'time':
      return <TimePicker {...rest} />;

    default:
      return null;
  }
};

export default FormControl;
