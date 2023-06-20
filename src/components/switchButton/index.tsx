import React from 'react';
import { Box } from './style';

const SwitchButton = ({
  disabled,
  size,
  value,
  title,
  onChange,
}: {
  disabled: boolean;
  size: any;
  value: any;
  title: string;
  onChange: any;
}) => {
  return (
    <Box
      size={size}
      title={title}
      status={value}
      disable={disabled}
      onClick={() => {
        if (!disabled) {
          onChange();
        }
      }}
    >
      <span></span>
    </Box>
  );
};

export default SwitchButton;
