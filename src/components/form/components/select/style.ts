import styled from 'styled-components';
import variables from '../../../../constants/styleVariables';

interface IMessageWrapper {
  type: string;
  labelOnTop: boolean;
}
interface ILabel {
  rightIcon?: string;
  error?: boolean;
  labelOnTop?: boolean;
  disabled?: boolean;
  isFilled?: boolean;
}

export const MessageWrapper = styled.div<IMessageWrapper>`
  font-size: 10px;
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
export const InputContainer = styled.div`
  width: 100%;
  height: 48px;
  margin-bottom: 2vh;
  position: relative;
  background-color: transparent;
`;
export const InputLabel = styled.label<ILabel>`
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 0;
  color: ${(props) =>
    props.error
      ? variables.colors.error
      : props.labelOnTop
      ? variables.colors.primary
      : props.disabled
      ? variables.colors.black_38
      : variables.colors.black_60};
  transition: 0.1s;
  height: 17px;
  font-size: 14px;
  background-color: ${(props) =>
    props.disabled
      ? props.labelOnTop || props.isFilled
        ? variables.colors.white
        : 'transparent'
      : props.labelOnTop || props.isFilled
      ? variables.colors.white
      : 'transparent'};
  ${(props) => props.disabled && `color: ${variables.colors.black_12} !important`};
  ${(props) => {
    if (props.labelOnTop || props.isFilled) {
      return `
        padding: 0 4px;
				top: -8px;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        z-index:1;
			`;
    }
  }};
`;
export const TinyInputContainer = styled.div`
  width: 100%;
  min-height: 28px;
  position: relative;
  margin-bottom: 0.5rem;
`;
