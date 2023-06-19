import styled from 'styled-components';
import variables from '../../../../constants/styleVariables';

interface IMessageWrapper {
  labelOnTop?: boolean;
  disabled?: boolean;
  type?: string;
}
interface IOutlinedInputWrapper {
  onFocus?: (e: any) => void;
  error?: boolean;
  labelOnTop?: boolean;
  disabled?: boolean;
  type?: string;
}
interface IField_IconWrapper {
  labelOnTop?: boolean;
  error?: boolean;
  disabled?: boolean;
}
interface ILabel {
  error?: boolean;
  labelOnTop?: boolean;
  disabled?: boolean;
  isFilled?: boolean;
}

interface IText {
  selected: any;
  disabled?: boolean;
}

const InputContainer = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
`;
export const OutlinedInputContainer = styled(InputContainer)`
  margin-bottom: 2vh;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 2fr));
`;
export const OutlinedInputWrapper = styled.input<IOutlinedInputWrapper>`
  z-index: 1;
  background-color: transparent;
  border: unset !important;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  align-self: flex-start;
  border-radius: 0;
  color: ${variables.colors.black_87};
  ${(props) => props.disabled && `color: ${variables.colors.black_38} !important`};
  min-height: 17px;
  width: 100%;
`;
export const OutlinedFormField = styled.div<IField_IconWrapper>`
  height: 40px;
  width: 100%;
  grid-row: 1;
  grid-column: span 3 / span 3;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  background-color: ${variables.colors.white};
  border: 1px solid
    ${(props) =>
      props.error
        ? `${variables.colors.error} !important`
        : props.labelOnTop
        ? `${variables.colors.primary} !important`
        : `${variables.colors.black_12}`};
  border-radius: 4px;
  padding: 8px 16px;
  ${(props) =>
    props.disabled &&
    `background: linear-gradient(90deg, rgba(234, 234, 238, 0.4) 0%, rgba(234, 234, 238, 0.4) 100%) !important`}
  ${(props) =>
    !props.labelOnTop &&
    `&: hover {
    border: 1px solid ${variables.colors.black_38}}`}
    & i {
    color: ${(props) => (props.disabled ? variables.colors.black_38 : variables.colors.black_60)} !important;
  }
`;
export const MessageWrapper = styled.div<IMessageWrapper>`
  grid-row: 2;
  grid-column: span 4 / span 4;
  font-weight: 400;
  font-size: 10px;
  line-height: 17px;
  color: ${(props) =>
    props.type === 'error'
      ? variables.colors.error
      : props.labelOnTop
      ? variables.colors.primary
      : variables.colors.black_60};
  ${(props) => props.disabled && `color: ${variables.colors.black_38} !important`};
  text-align: right;
  margin-top: 4px;
  padding-right: 16px;
  width: inherit;
`;
export const OutlineLabel = styled.label<ILabel>`
  font-size: 14px;
  position: absolute;
  top: 12px;
  right: 14px;
  z-index: 1;
  font-size: 14px;
  color: ${(props) =>
    props.error ? variables.colors.error : props.labelOnTop ? variables.colors.primary : variables.colors.black_60};
  transition: 0.1s;
  height: 17px;
  background-color: ${(props) =>
    props.disabled
      ? props.labelOnTop || props.isFilled
        ? variables.colors.white
        : 'transparent'
      : props.labelOnTop || props.isFilled
      ? variables.colors.white
      : 'transparent'};
  ${(props) => props.disabled && `color: ${variables.colors.black_38} !important`};
  ${(props) => {
    if (props.labelOnTop || props.isFilled) {
      return `
        padding: 0 4px;
				top: -8px;
				font-size: 10px;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
			`;
    }
  }};
`;

export const OptionContainer = styled.div`
  grid-row: 1;
  margin: 0 6px 0 0;
  height: 40px;
  min-width: fit-content;
  justify-self: end;
  width: fit-content;
  max-width: 144px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 4px;
  display: flex;
  gap: 4px;
  text-align: center;
  justify-content: center;
  border-radius: 4px;
  align-items: center;
`;

export const TextContainer = styled.div<IText>`
  background-color: ${(props) => {
    if (props.disabled) {
      return '#A951F740 !important';
    } else {
      if (props.selected) {
        return variables.colors.secondary_400;
      } else {
        return variables.colors.white;
      }
    }
  }};
  color: ${(props) => {
    if (props.disabled) {
      return variables.colors.black_38;
    } else {
      if (props.selected) {
        return variables.colors.white;
      } else {
        return variables.colors.black_60;
      }
    }
  }};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')} !important;
  ${(props) =>
    !props.disabled &&
    `
  &: hover {
    background-color: ${variables.colors.secondary_400};
    color: ${variables.colors.white};
    opacity: 0.4;
  }`}
  border-radius: 2px;
  padding: 4px;
  height: 32px;
  min-width: 28px;
  width: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const OptionText = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;

export const Seprator = styled.div`
  width: 10px;
  height: 24px;
  &::after {
    display: inline-block;
    content: '';
    background-color: rgba(0, 0, 0, 0.12);
    width: 1px;
    height: 24px;
  }
  &:last-child {
    display: none;
  }
`;
