import styled from 'styled-components';
import variables from '../../../../constants/styleVariables';

interface IMessageWrapper {
  labelOnTop?: boolean;
  disabled?: boolean;
  type?: string;
}
interface IInputWrapper {
  leftIcon?: string;
  rightIcon?: string;
  onFocus?: (e: any) => void;
  error?: boolean;
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
export const InputContainer = styled.div`
  width: 100%;
  min-height: 48px;
  /* margin-bottom: 2vh; */
  position: relative;
`;
export const OutlinedInputWrapper = styled.input<IInputWrapper>`
  width: ${(props) => {
    if (props.leftIcon && props.rightIcon) {
      return 'calc(100% - 40px)';
    } else if (!props.leftIcon && props.rightIcon) {
      return 'calc(100% - 20px)';
    } else if (props.leftIcon && !props.rightIcon) {
      return 'calc(100% - 20px)';
    } else {
      return 'calc(100% - 20px)';
    }
  }};
  z-index: 2;
  background-color: transparent;
  border: unset !important;
  font-size: 14px;
  align-self: flex-start;
  border-radius: 0;
  color: ${(props) =>
    props.error ? variables.colors.error : props.labelOnTop ? variables.colors.primary : variables.colors.blue_200};
  min-height: 17px;
`;
export const OutlinedFormField = styled.div`
  min-height: 48px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: nowrap;
  background-color: ${variables.colors.white};
  padding: 12px 0px;
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
  position: absolute;
  top: 12px;
  right: ${(props) => {
    if (props.rightIcon) {
      return '40px';
    } else {
      return '22px';
    }
  }};
  z-index: 1;
  font-size: 14px;
  color: ${(props) =>
    props.error ? variables.colors.error : props.labelOnTop ? variables.colors.primary : variables.colors.blue_200};
  transition: 0.1s;
  height: 17px;
  background-color: ${variables.colors.white};
  ${(props) => {
    if (props.labelOnTop || props.isFilled) {
      return `
				top: -8px;
				font-size: 10px;
			`;
    }
  }};
`;
