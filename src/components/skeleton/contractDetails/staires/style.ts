import styled from 'styled-components';
import styleVariables from '../../../../constants/styleVariables';

interface I_Circle {
  location: string;
  isStaires?: boolean;
}

export const Container = styled.div`
  width: 100%;
  border: 1px solid ${styleVariables.colors.black_12};
  border-radius: 4px;
  padding: 10px;
`;

export const FullLineSingle = styled.div`
  width: calc(100% - 32px);
  height: 2px;
  background: ${styleVariables.colors.black_12};
  position: relative;
`;

export const FullLineStaire = styled.div`
  width: calc(100% - 32px);
  height: 2px;
  background: ${styleVariables.colors.black_12};
  position: relative;
`;

export const RangeCardContainer = styled.div<I_Circle>`
  position: relative;
  border-top: 2px solid ${styleVariables.colors.black_12};
  display: flex;
  justify-content: space-between;
  margin-top: -2px;
  width: ${({ location }) => {
    if (location === 'right') {
      return '20%;';
    } else if (location === 'middle') {
      return '30%';
    } else {
      return '43%';
    }
  }};

  ${({ location }) => {
    if (location === 'right') {
      return 'margin-right : 0;';
    } else if (location === 'middle') {
      return 'margin-right: calc(20% + 10px)';
    } else {
      return 'margin-right: calc(53% - 3px)';
    }
  }};
`;

export const Line = styled.div<I_Circle>`
  width: ${({ location }) => {
    if (location === 'right') {
      return '25%;';
    } else if (location === 'middle') {
      return 'calc(31% + 1px);';
    } else {
      return 'calc(41% - 4px);';
    }
  }};
  ${({ location }) => {
    if (location === 'right') {
      return 'right : 0;';
    } else if (location === 'middle') {
      return 'right : calc(27% - 1px);';
    } else {
      return 'left : 0;';
    }
  }};
  height: 2px;
  background: ${styleVariables.colors.black_12};
  position: absolute;
`;

export const Circle = styled.div<I_Circle>`
  width: 10px;
  height: 10px;
  background: ${styleVariables.colors.black_12};
  border-radius: 50%;
  position: absolute;
  top: ${({ isStaires }) => (isStaires ? '-6px' : '-4px')};
  ${({ location }) => {
    if (location === 'right') {
      return 'right : -10px;';
    } else if (location === 'step1') {
      return 'left: calc(74% - 5px)';
    } else if (location === 'step2') {
      return 'left: calc(41% - 4px)';
    } else {
      return 'left: -10px;';
    }
  }}
`;

export const RangeCardSingle = styled.div`
  width: 22px;
  height: 22px;
  background: ${styleVariables.colors.black_12};
  border-radius: 2px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 4px solid transparent;
    border-bottom-color: ${styleVariables.colors.black_12};
    border-top: 0;
    margin-left: -4px;
    margin-top: -4px;
  }
`;

export const RangeCardStaire = styled.div<I_Circle>`
  width: 22px;
  height: 22px;
  background: ${styleVariables.colors.black_12};
  border-radius: 2px;
  position: relative;
  margin-top: 10px;
  ${({ location }) => {
    if (location === 'right') {
      return 'margin-right : -16px;';
    } else {
      return 'margin-left : -16px;';
    }
  }}
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 4px solid transparent;
    border-bottom-color: ${styleVariables.colors.black_12};
    border-top: 0;
    margin-left: -4px;
    margin-top: -4px;
  }
`;
