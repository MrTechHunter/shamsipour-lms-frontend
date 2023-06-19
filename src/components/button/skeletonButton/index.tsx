import React from 'react';
import { Container } from './style';
import Shimmer from './shimmer';

const ButtonSkeleton = ({ size }: any) => {
  return (
    <Container size={size}>
      <Shimmer />
    </Container>
  );
};

export default ButtonSkeleton;
