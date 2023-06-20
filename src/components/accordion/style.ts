import styled from 'styled-components';
import variables from '../../constants/styleVariables';

interface I_Container {
  height?: string;
  isContract?: boolean;
}

export const Container = styled.div<I_Container>`
  width: 100%;
  overflow: auto;
  min-height: ${({ height }) => (height ? height : '28px')};
  border: 1px solid
    ${(props) =>
      props.color === 'primary'
        ? variables.colors.primary
        : props.isContract
        ? variables.colors.blue_800
        : variables.colors.secondary_400};
  border-radius: 4px;
  padding: 8px 10px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-bottom: 8px;
  margin-top: 8px;
`;
