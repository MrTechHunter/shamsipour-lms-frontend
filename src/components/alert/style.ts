import styled from 'styled-components';
import variables from '../../constants/styleVariables';
interface AlertInterface {
  type: any;
}
interface ContainerInterface {
  type: any;
  show: boolean;
}
export const Container = styled.div<ContainerInterface>`
  width: 100%;
  min-height: 40px;
  background: ${variables.colors.white};
  box-shadow: 0 0 8px 5px rgba(214, 220, 230, 0.25);
  border-radius: 4px;
  border-right: 4px solid;
  padding-bottom: 8px;
  border-right-color: ${(props) => {
    switch (props.type) {
      case 'info':
        return variables.colors.blue_800;
      case 'warning':
        return variables.colors.yellow;
      default:
        return variables.colors.gray_200;
    }
  }};
  display: ${(props) => (props.show ? 'flex' : 'none')};
  justify-content: flex-start;
`;
export const Text = styled.div`
  width: -webkit-fill-available;
  color: ${variables.colors.gray_200};
  min-height: 24px;
  font-style: normal;
  font-weight: ${variables.fontWeight.normal};
  font-size: ${variables.fontSize.h5};
  line-height: 24px;
  text-align: right;
  margin-top: 8px;
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Icon = styled.i<AlertInterface>`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 8px;
  margin-left: 8px;
  margin-top: 8px;
  &:before {
    font-size: 24px;
    color: ${(props) => {
      switch (props.type) {
        case 'info':
          return variables.colors.blue_800;
        case 'warning':
          return variables.colors.yellow;
        default:
          return variables.colors.gray_200;
      }
    }};
  }
`;
export const CloseButton = styled.button<AlertInterface>`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${variables.colors.white};
  border-radius: 50%;
  margin-right: 8px;
  margin-left: 8px;
  margin-top: 8px;
  outline: none;
  cursor: pointer;
  border: 1px solid
    ${(props) => {
      switch (props.type) {
        case 'info':
          return variables.colors.blue_800;
        case 'warning':
          return variables.colors.yellow;
        default:
          return variables.colors.gray_200;
      }
    }};
`;
export const CloseButtunIcon = styled.i<AlertInterface>`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:before {
    font-size: 17px;
    font-weight: 700;
    color: ${(props) => {
      switch (props.type) {
        case 'info':
          return variables.colors.blue_800;
        case 'warning':
          return variables.colors.yellow;
        default:
          return variables.colors.gray_200;
      }
    }};
  }
`;
