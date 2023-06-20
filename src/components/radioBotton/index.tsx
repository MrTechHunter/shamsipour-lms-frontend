import React from 'react';
import { RadioButtonWrapper } from './style';

/**
 * checked
 * disabled
 * onClick
 * label
 * children
 * parentChecked
 * */

interface I_RadioButton {
  className?: string;
  checked?: boolean;
  parentChecked?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  label?: string;
  children?: any;
}

const RadioButton = (props: I_RadioButton) => {
  return (
    <RadioButtonWrapper
      className={`${props.className} no-select`}
      checked={props.checked}
      parentChecked={props.parentChecked}
      disabled={props.disabled}
      onClick={() => {
        if (!props.disabled) {
          props.onClick && props.onClick();
        }
        return;
      }}
      {...props}
    >
      {props.label || props.children}
    </RadioButtonWrapper>
  );
};

export default RadioButton;
