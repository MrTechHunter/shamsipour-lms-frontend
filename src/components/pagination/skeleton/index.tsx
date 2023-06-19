import React from 'react';
import Shimmer from './shimmer';
import { Pagination, Next, Prev, Page } from './style';

const PaginationSkeleton = () => {
  return (
    <Pagination>
      <Shimmer />
      <Prev />
      <Page />
      <Page />
      <Page />
      <Next />
    </Pagination>
  );
};

export default PaginationSkeleton;
