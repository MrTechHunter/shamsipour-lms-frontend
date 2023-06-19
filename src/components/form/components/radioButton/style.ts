import styled from 'styled-components';
import variables from '../../../../constants/styleVariables';

interface IMessageWrapper {
  labelOnTop?: boolean;
  disabled?: boolean;
  type?: string;
}
interface ILabel {
  rightIcon?: string;
  error?: boolean;
  labelOnTop?: boolean;
  disabled?: boolean;
  isFilled?: boolean;
}

interface IContainer {
  mB?: string;
}

interface IOutline {
  pyLess?: boolean;
}

export const InputContainer = styled.div<IContainer>`
  width: 100%;
  height: 48px;
  margin-bottom: ${({ mB }) => (mB ? mB : '2vh')};
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;
export const OutlinedFormField = styled.div<IOutline>`
  height: 48px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  background-color: ${variables.colors.white};
  padding: 12px ${({ pyLess }) => (pyLess ? '0px' : '16px')};
`;
export const MessageWrapper = styled.div<IMessageWrapper>`
  font-size: 9px;
  color: ${(props) =>
    props.type === 'error'
      ? variables.colors.error
      : props.labelOnTop
      ? variables.colors.primary
      : variables.colors.blue_200};
  text-align: right;
  margin-top: 4px;
  padding-right: 16px;
`;
export const OutlineLabel = styled.label<ILabel>`
  min-width: 55px;
  width: auto;
  font-size: 14px;
  color: ${(props) =>
    props.error ? variables.colors.error : props.labelOnTop ? variables.colors.primary : variables.colors.blue_600};
  height: 21px;
  margin-left: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
