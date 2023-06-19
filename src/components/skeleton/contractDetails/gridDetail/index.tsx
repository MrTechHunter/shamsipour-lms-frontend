import React from 'react';
import Shimmer from '../../shimmer';
import { Item } from './style';

const GridDetailSkeleton = () => {
  return (
    <div className="w-full h-full flex flex-col">
      {[1, 2, 3, 4].map((item: any, index: number) => {
        return (
          <div key={index} className="w-full h-11 flex items-center border-b border-black_12">
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
        );
      })}
    </div>
  );
};

export default GridDetailSkeleton;
