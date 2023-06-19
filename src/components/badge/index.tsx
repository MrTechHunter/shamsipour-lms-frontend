import React from 'react';
import { Container } from './style';

const Badge = ({
  children,
  type,
  textTransform = 'none',
  disabled,
  onClick,
}: Record<
  string,
  { children: any; type: string; disabled?: boolean; onClick?: () => void; textTransform: string } | any
>) => {
  return (
    <Container
      onClick={(e) => {
        if (!disabled) {
          e.preventDefault();
          onClick();
        }
      }}
      type={type}
      textTransform={textTransform}
    >
      {children}
    </Container>
  );
};

export default Badge;
