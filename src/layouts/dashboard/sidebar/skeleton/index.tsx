import React from 'react';
import { SidebarContainer, Menu, MenuItem } from './style';
import ShimmerComponent from './shimmer';

const SidebarSkeleton = () => {
  return (
    <SidebarContainer>
      <ShimmerComponent />
      <Menu>
        <MenuItem width={94} height={31} />
        <MenuItem width={105} height={24} />
        <MenuItem width={80} height={24} />
        <MenuItem width={150} height={31} />
        <MenuItem width={100} height={24} />
        <MenuItem width={65} height={24} />
        <MenuItem width={102} height={24} />
        <MenuItem width={106} height={31} />
        <MenuItem width={130} height={24} />
        <MenuItem width={110} height={31} />
        <MenuItem width={94} height={31} />
        <MenuItem width={115} height={31} />
        <MenuItem width={94} height={31} />
        <MenuItem width={105} height={24} />
        <MenuItem width={125} height={24} />
      </Menu>
    </SidebarContainer>
  );
};

export default SidebarSkeleton;
