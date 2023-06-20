import styled from 'styled-components';
import variables from '../../constants/styleVariables';

interface IContainer {
  marginLess?: boolean;
  bordered?: boolean;
}
export const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px 4px 32px;
  min-width: 70px;
  width: fit-content;
  height: 28px;
  background: ${variables.colors.white_100};
  border-radius: 16px;
  position: relative;
  ${(props) => {
    if (!props.marginLess) {
      return `
				margin-left: 8px;
			`;
    }
  }};
  &:last-child {
    margin-bottom: 0;
    margin-left: 0;
  }
`;
export const Label = styled.div`
  min-width: calc(100% - 32px);
  height: 14px;
  font-style: normal;
  font-weight: ${variables.fontWeight.normal};
  font-size: ${variables.fontSize.h6};
  line-height: 14px;
  display: flex;
  text-align: right;
  color: ${variables.colors.black_87};
  margin: 0;
`;
export const IconContainer = styled.div`
  width: 32px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
  border-radius: 16px 0 0 16px;
`;
export const Icon = styled.i`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${variables.colors.black_60};
  &:before {
    font-size: 14px;
    font-weight: bold;
    color: white;
    padding: 2px;
  }
`;
