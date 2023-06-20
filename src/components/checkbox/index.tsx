import React from 'react';
import { CheckboxWrapper, Label } from './style';

/**
 * size
 * className
 * checked
 * parentChecked
 * disabled
 * onSelect
 * children
 * label
 * */

const CheckBox = ({
  size = 'sm',
  className,
  checked,
  parentChecked,
  disabled = false,
  onSelect,
  children,
  label,
  id,
  onFocus,
  onBlur,
}: {
  size?: string;
  className?: string;
  checked: boolean;
  parentChecked?: boolean;
  disabled?: boolean;
  onSelect: () => void;
  children?: any;
  label?: string;
  id?: any;
  onFocus?: (e: any) => void;
  onBlur?: (e: any) => void;
}) => {
  return (
    <CheckboxWrapper
      size={size}
      className={`${className} no-select`}
      checked={checked}
      parentChecked={parentChecked}
      disabled={disabled}
      onClick={() => {
        if (!disabled) {
          onSelect && onSelect();
        }
      }}
    >
      <Label>{label || children}</Label>
    </CheckboxWrapper>
  );
};

export default CheckBox;
