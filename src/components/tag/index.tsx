import React, { ReactNode } from 'react';
import { Label, Icon, Container, IconContainer } from './style';

interface ITag {
  label?: string | any;
  children?: React.FC<ReactNode> | string | any;
  bordered?: boolean;
  onClick: () => void;
}
const Tag = ({ label, children, bordered, onClick, ...rest }: ITag) => {
  return (
    <Container {...rest} bordered={bordered}>
      <Label>{label || children}</Label>
      <IconContainer onClick={() => onClick()}>
        <Icon className="lms-close" />
      </IconContainer>
    </Container>
  );
};

export default Tag;
