import React from 'react';
import { CheckboxWrapper, Label } from './style';

/**
 * checked
 * disabled
 * onSelect
 * label
 * children
 * */

interface ICheckBox {
  size: string;
  className?: string;
  checked: string;
  disabled: boolean;
  onSelect: () => void;
  label?: string;
  children: any;
}

const CheckBox = (props: ICheckBox) => {
  return (
    <CheckboxWrapper
      size={props.size || 'sm'}
      className={`${props.className} no-select`}
      checked={props.checked}
      disabled={props.disabled}
      onClick={() => {
        if (!props.disabled) {
          props.onSelect && props.onSelect();
        }
      }}
    >
      <Label>{props.label || props.children}</Label>
    </CheckboxWrapper>
  );
};

export default CheckBox;
