import React from 'react';
import { Body } from './style';

interface IModal {
  type?: string;
  children?: any;
}

const ModalBody = (props: IModal) => {
  const { children, type } = props;
  return <Body type={type}>{children}</Body>;
};

ModalBody.displayName = 'ModalBody';

export default ModalBody;
