import styled from 'styled-components';
import variables from '../../../../constants/styleVariables';

interface IField_IconWrapper {
  labelOnTop?: boolean;
  error?: boolean;
  disabled?: boolean;
  isFilled?: boolean;
}

interface IMessageWrapper {
  labelOnTop?: boolean;
  disabled?: boolean;
  type?: string;
  isFilled?: boolean;
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
  height: 40px;
  margin-bottom: 2vh;
  position: relative;
`;
export const OutlinedFormField = styled.div<IField_IconWrapper>`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  background-color: ${variables.colors.white};
  border: 1px solid
    ${(props) =>
      props.error
        ? `${variables.colors.error}`
        : props.labelOnTop
        ? `${variables.colors.primary}`
        : `${variables.colors.black_12}`} !important;
  border-radius: 4px;
  padding: 8px 16px;
`;
export const MessageWrapper = styled.div<IMessageWrapper>`
  font-size: 9px;
  color: ${(props) =>
    props.type === 'error'
      ? `${variables.colors.error}`
      : props.labelOnTop
      ? `${variables.colors.primary}`
      : `${variables.colors.black_87}`};
  text-align: right;
  margin-top: 4px;
  padding-right: 16px;
`;
export const OutlineLabel = styled.label<ILabel>`
  z-index: 1;
  position: absolute;
  top: 12px;
  right: ${(props) => {
    if (props.rightIcon) {
      return '40px';
    } else {
      return '12px';
    }
  }};
  font-size: 14px;
  color: ${(props) =>
    props.error
      ? variables.colors.error
      : props.labelOnTop
      ? `${variables.colors.primary}`
      : `${variables.colors.black_60}`};
  transition: 0.1s;
  height: 17px;
  background-color: ${variables.colors.white};
  ${(props) => {
    if (props.labelOnTop || props.isFilled) {
      return `
				top: -8px;
				font-size: 10px;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
			`;
    }
  }};
`;
