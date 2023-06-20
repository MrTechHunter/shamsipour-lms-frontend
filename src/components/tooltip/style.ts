import styled from 'styled-components';
import variables from '../../constants/styleVariables';

export const Container = styled.div`
  transition: 0.1s;
  cursor: pointer;
`;
export const ToolTip = styled.div`
  position: absolute;
  z-index: 999;
  padding: 0px 8px;
  display: flex;
  margin-bottom: 20px;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-size: 12px;
  color: rgb(255, 255, 255);
  height: 36px;
  background-color: ${variables.colors.black_87};
  border-radius: 4px;

  &:after {
    content: '';
    position: absolute;
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    transform: rotate(180deg);
    border-color: ${variables.colors.black_87} transparent transparent transparent;
  }
`;
