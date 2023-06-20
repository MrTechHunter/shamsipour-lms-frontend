import React from 'react';
import Shimmer from './shimmer';
import { GroupButton } from './style';

const GroupButtonSkeleton = () => {
  return (
    <GroupButton>
      <Shimmer />
    </GroupButton>
  );
};

export default GroupButtonSkeleton;
