import React from 'react';
import { Container } from './style';

interface IBadge {
  children: any;
  title?: string;
}
const Badge = ({ children, title }: IBadge) => {
  return <Container title={title}>{children}</Container>;
};

export default Badge;
