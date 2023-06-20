import React from 'react';
import {
  Container,
  FullLineSingle,
  FullLineStaire,
  Circle,
  RangeCardSingle,
  RangeCardStaire,
  RangeCardContainer,
} from './style';
import Shimmer from '../../shimmer';

export const StairesSkeleton = () => {
  return (
    <Container className="mt-3">
      <div className="w-full  flex items-center justify-between">
        <div className="w-40 h-6 overflow-x-hidden rounded relative bg-black_12">
          <Shimmer />
        </div>
        <div className="w-5 h-5 overflow-x-hidden relative rounded-full bg-black_12 ">
          <Shimmer />
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center ">
        <div className="w-full pb-1 mt-2 mr-7 flex flex-col  ">
          <FullLineStaire>
            <Circle location="right" />
            <Circle location="left" />
          </FullLineStaire>
          <RangeCardContainer location="right">
            <Circle location="right" isStaires />
            <Circle location="left" isStaires />
            <RangeCardStaire location="right" />
            <RangeCardStaire location="left" />
          </RangeCardContainer>
        </div>
        <div className="w-full mt-2 mb-1  flex items-center justify-between">
          <div className="w-40 h-6 overflow-x-hidden rounded relative bg-black_12">
            <Shimmer />
          </div>
        </div>
        <div className="w-full mt-2 mr-7 pb-1 flex flex-col">
          <FullLineStaire>
            <Circle location="right" />
            <Circle location="left" />
          </FullLineStaire>
          <RangeCardContainer location="middle">
            <Circle location="right" isStaires />
            <Circle location="left" isStaires />
            <RangeCardStaire location="right" />

            <RangeCardStaire location="left" />
          </RangeCardContainer>
        </div>
        <div className="w-full mt-2 mb-1  flex items-center justify-between">
          <div className="w-40 h-6 overflow-x-hidden rounded relative bg-black_12">
            <Shimmer />
          </div>
        </div>
        <div className="w-full mt-2 mr-7 pb-1 flex flex-col ">
          <FullLineStaire>
            <Circle location="right" />
            <Circle location="left" />
          </FullLineStaire>
          <RangeCardContainer location="left">
            <Circle location="right" isStaires />
            <Circle location="left" isStaires />
            <RangeCardStaire location="right" />

            <RangeCardStaire location="left" />
          </RangeCardContainer>
        </div>
      </div>

      <div className="w-full mt-2  flex items-center justify-between">
        <div className="w-36 h-6 overflow-x-hidden rounded relative bg-black_12">
          <Shimmer />
        </div>
        <div className="w-32 h-6 overflow-x-hidden rounded relative bg-black_12">
          <Shimmer />
        </div>
      </div>
    </Container>
  );
};

export const SingleStaireSkeleton = () => {
  return (
    <Container>
      <div className="w-full  flex items-center justify-between">
        <div className="w-40 h-6 overflow-x-hidden rounded relative bg-black_12">
          <Shimmer />
        </div>
        <div className="w-5 h-5 overflow-x-hidden relative rounded-full bg-black_12 ">
          <Shimmer />
        </div>
      </div>

      <div className="w-full mt-2  flex flex-col items-center justify-center ">
        <FullLineSingle>
          <Circle location="right" />
          <Circle location="left" />
        </FullLineSingle>
        <div className="w-full mt-3  flex items-center justify-between ">
          <RangeCardSingle />
          <RangeCardSingle />
        </div>
      </div>

      <div className="w-full mt-2  flex items-center justify-between">
        <div className="w-36 h-6 overflow-x-hidden rounded relative bg-black_12">
          <Shimmer />
        </div>
        <div className="w-32 h-6 overflow-x-hidden rounded relative bg-black_12">
          <Shimmer />
        </div>
      </div>
    </Container>
  );
};
