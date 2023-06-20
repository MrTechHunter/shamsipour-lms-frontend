import React from 'react';
import Shimmer from '../../shimmer';
import { Container, Item } from './style';

const ServiceDetailSkeleton = () => {
  return (
    <Container>
      <div className="w-full h-full flex flex-col">
        <div className="w-full  flex items-center justify-between">
          <div className="w-40 h-6 overflow-x-hidden rounded relative bg-black_12">
            <Shimmer />
          </div>
          <div className="w-5 h-5 overflow-x-hidden relative rounded-full bg-black_12 ">
            <Shimmer />
          </div>
        </div>
        <div className="w-full h-11 flex items-center border-b border-black_12">
          <div className="w-44">
            <Item>
              <Shimmer />
            </Item>
          </div>
          <div>
            <Item>
              <Shimmer />
            </Item>
          </div>
        </div>
        <div className="w-full h-11 flex items-center ">
          <div className="w-44">
            <Item>
              <Shimmer />
            </Item>
          </div>
          <div>
            <Item>
              <Shimmer />
            </Item>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ServiceDetailSkeleton;
