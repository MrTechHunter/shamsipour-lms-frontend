import React, { useState } from 'react';
import { Container, Icon, Text, CloseButton, CloseButtunIcon, IconContainer } from './style';
const Alert = ({
  children,
  icon,
  type,
  closeable,
}: {
  children: React.ReactNode;
  type?: string;
  icon?: any;
  closeable: any;
}) => {
  const [show, setShow] = useState<boolean>(true);
  const toggleCloseAlertHandler = () => {
    setShow(!show);
  };
  return (
    <Container show={show} type={type}>
      <IconContainer>
        <Icon type={type} className={icon} />
      </IconContainer>
      <Text>{children}</Text>
      {closeable && (
        <CloseButton onClick={toggleCloseAlertHandler} type={type}>
          <CloseButtunIcon type={type} className="lms-close" />
        </CloseButton>
      )}
    </Container>
  );
};
export default Alert;
