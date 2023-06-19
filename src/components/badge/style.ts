import styled from 'styled-components';
import variables from '../../constants/styleVariables';

interface IContainer {
  textTransform?: any;
  type?: any;
}

export const Container = styled.div<IContainer>`
  min-width: 33px;
  height: 25px;
  background: ${variables.colors.white};
  box-shadow: 0 0 2px rgba(9, 30, 66, 0.15);
  border-radius: 4px;
  font-size: ${variables.fontSize.h5};
  text-transform: ${(props) => props.textTransform};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 6px;
  margin: 4px;
  color: ${(props) => {
    switch (props.type) {
      case 'success':
        return variables.colors.green;
      case 'danger':
        return variables.colors.error;
      case 'warning':
        return variables.colors.warning;
      case 'info':
        return variables.colors.secondary_400;
      case 'primary':
        return variables.colors.primary;
      case 'secondary':
        return variables.colors.secondary;
      case 'dark':
        return variables.colors.black_87;
      case 'expired':
        return variables.colors.expired;
      default:
        return variables.colors.blue_200;
    }
  }};
`;
