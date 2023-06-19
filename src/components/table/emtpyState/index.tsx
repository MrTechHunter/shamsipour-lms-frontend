import React from 'react';
import { Container, Message } from './style';

const EmptyState = () => {
  return (
    <Container>
      <img height={60} width={'70%'} src="/assets/emptyState.svg" alt="Meboka" />
      <Message>در این جدول محتوایی ثبت نشده است!</Message>
    </Container>
  );
};

export default EmptyState;
