import styled from 'styled-components';
import variables from '../../../../constants/styleVariables';

interface IDatePicker {
  error?: boolean;
  labelOnTop?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  disabled?: boolean;
  isFilled?: boolean;
  type?: string;
}

const InputContainer = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
`;
export const FilledInputContainer = styled(InputContainer)`
  margin-bottom: 5vh;
`;
export const OutlinedInputContainer = styled(InputContainer)`
  margin-bottom: 2vh;
`;
export const FilledFormField = styled.div<IDatePicker>`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  background-color: ${variables.colors.white_100};
  border: unset !important;
  border-bottom: 1px solid
    ${(props) =>
      props.error
        ? variables.colors.error
        : props.labelOnTop
        ? variables.colors.primary
        : variables.colors.black_87} !important;
  border-radius: 8px 8px 0 0;
`;
export const OutlinedFormField = styled.div<IDatePicker>`
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
        ? variables.colors.error
        : props.labelOnTop
        ? `${variables.colors.primary} !important`
        : variables.colors.black_12};
  border-radius: 4px;
  padding: 0;
  ${(props) =>
    !props.disabled &&
    `&:hover {
    border: 1px solid ${() =>
      props.error
        ? variables.colors.error
        : props.labelOnTop
        ? `${variables.colors.primary} !important`
        : variables.colors.black_12};
  }`}
`;
export const MessageWrapper = styled.div<IDatePicker>`
  font-weight: 400;
  font-size: 10px;
  line-height: 17px;
  color: ${(props) =>
    props.type === 'error'
      ? variables.colors.error
      : props.labelOnTop
      ? variables.colors.primary
      : variables.colors.black_87};
  text-align: right;
  margin-top: 4px;
  padding-right: 16px;
`;
export const FilledIconWrapper = styled.div<IDatePicker>`
  width: 52px;
  height: 40px;
  padding-top: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  i {
    &:before {
      color: ${(props) =>
        props.error
          ? variables.colors.error
          : props.labelOnTop
          ? variables.colors.primary
          : variables.colors.black_87} !important;
      font-size: 20px;
    }
  }
`;
export const OutlinedIconWrapper = styled.div<IDatePicker>`
  width: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  i {
    &:before {
      color: ${(props) =>
        props.error
          ? variables.colors.error
          : props.labelOnTop
          ? variables.colors.primary
          : props.disabled
          ? variables.colors.black_38
          : variables.colors.black_60} !important;
      font-size: 20px;
    }
  }
  i[class*='leftIcon']:before {
    ${(props) => props.labelOnTop && `color: ${variables.colors.primary} !important;`}
  }
`;
export const FilledLabel = styled.label<IDatePicker>`
  position: absolute;
  top: 16px;
  //z-index: 1;
  font-size: 14px;
  color: ${(props) =>
    props.error ? variables.colors.error : props.labelOnTop ? variables.colors.primary : variables.colors.black_87};
  transition: 0.1s;
  ${(props) => {
    if (props.labelOnTop && props.rightIcon) {
      return `
				top: 0;
				right: 50px;
				font-size: 9px;
				padding-top: 4px;
			`;
    } else if (!props.labelOnTop && !props.rightIcon) {
      return `
				right: 22px;
			`;
    } else if (props.labelOnTop && !props.rightIcon) {
      return `
				top: 0;
				right: 16px;
				font-size: 9px;
				padding-top: 4px;
			`;
    } else if (!props.labelOnTop && props.rightIcon) {
      return `
				right: 50px;
			`;
    }
  }};
`;
export const OutlinedLabel = styled.label<IDatePicker>`
  position: absolute;
  top: 12px;
  right: ${(props) => {
    if (props.rightIcon) {
      return '48px';
    } else {
      return '12px';
    }
  }};
  //z-index: 1;
  font-size: 14px;
  color: ${(props) =>
    props.error
      ? variables.colors.error
      : props.labelOnTop
      ? variables.colors.primary
      : props.disabled
      ? variables.colors.black_38
      : variables.colors.black_60} !important;
  transition: 0.1s;
  height: 17px;
  background-color: ${variables.colors.white};
  padding: 0 4px;
  ${(props) => {
    if (props.labelOnTop || props.isFilled) {
      return `
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
				top: -8px;
			`;
    }
  }};
`;
export const FilledDatePickerInputWrapper = styled.div<IDatePicker>`
  width: ${(props) => {
    if (props.leftIcon && props.rightIcon) {
      return 'calc(100% - 80px)';
    } else if (!props.leftIcon && props.rightIcon) {
      return 'calc(100% - 40px)';
    } else if (props.leftIcon && !props.rightIcon) {
      return 'calc(100% - 40px)';
    } else {
      return 'calc(100% - 44px)';
    }
  }};
  z-index: 2;
  background-color: transparent;
  border: unset !important;
  font-size: ${(props) => (!props.labelOnTop ? '14px' : '12px')};
  align-self: flex-start;
  border-radius: 8px 8px 0 0;
  min-height: 17px;
  .customDatePicker {
    color: ${(props) =>
      props.error ? variables.colors.error : props.labelOnTop ? variables.colors.primary : variables.colors.black_87};
    min-height: 17px;
    height: 40px;

    padding: ${(props) => {
      if (props.leftIcon && props.rightIcon) {
        return '14px 0 3px 0';
      } else if (!props.leftIcon && props.rightIcon) {
        return '14px 0 3px 16px';
      } else if (props.leftIcon && !props.rightIcon) {
        return '14px 16px 3px 0';
      } else {
        return '14px 22px 3px 16px';
      }
    }};
    ${(props) => {
      if (props.labelOnTop) {
        return `
				padding-top: 22px;
			`;
      }
    }};
    border: unset;
    background-color: transparent;
    width: 100% !important;
    text-align: right;
    margin: 0;
    cursor: pointer;
  }
`;

export const OutlinedDatePickerInputWrapper = styled.div<IDatePicker>`
  width: ${(props) => {
    if (props.leftIcon && props.rightIcon) {
      return 'calc(100% - 32px)';
    } else if (!props.leftIcon && props.rightIcon) {
      return 'calc(100% - 16px)';
    } else if (props.leftIcon && !props.rightIcon) {
      return 'calc(100% - 16px)';
    } else {
      return 'calc(100% - 18px)';
    }
  }};
  z-index: 2;
  background-color: transparent;
  border: unset !important;
  font-size: 14px;
  align-self: flex-start;
  min-height: 17px;
  .customDatePicker {
    color: ${(props) =>
      props.error ? variables.colors.error : props.disabled ? variables.colors.black_38 : variables.colors.black_87};
    min-height: 30px;
    height: 40px;
    border: unset;
    border-radius: 3px;
    background-color: transparent;
    width: 100% !important;
    text-align: right;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: ${(props) => {
      if (props.leftIcon && props.rightIcon) {
        return '16px 0 9px 0';
      } else if (!props.leftIcon && props.rightIcon) {
        return '16px 0 9px 16px';
      } else if (props.leftIcon && !props.rightIcon) {
        return '16px 16px 9px 0';
      } else {
        return '16px 16px 9px 16px';
      }
    }};
    margin: 0;
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  }
`;

export const TinyInputContainer = styled(InputContainer)`
  margin-bottom: 0.5rem;
  height: 28px;
`;
export const TinyLabel = styled.label<IDatePicker>`
  position: absolute;
  top: 5px;
  right: ${(props) => {
    if (props.rightIcon) {
      return '36px';
    } else {
      return '16px';
    }
  }};
  //z-index: 1;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: ${(props) =>
    props.error ? variables.colors.error : props.labelOnTop ? variables.colors.primary : variables.colors.black_87};
  transition: 0.1s;
  height: 17px;
  background-color: ${variables.colors.white};
  ${(props) => {
    if (props.labelOnTop || props.isFilled) {
      return `
				// top: -8px;
				// font-size: 10px;
				display: none;
			`;
    }
  }};
`;
export const TinyFormField = styled.div<IDatePicker>`
  height: 28px;
  width: 195px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: nowrap;
  background-color: ${variables.colors.white};
  border: 1px solid
    ${(props) =>
      props.error ? variables.colors.error : props.labelOnTop ? variables.colors.primary : variables.colors.black_12};
  border-radius: 16px;
  padding: 0;
  ${(props) =>
    props.disabled &&
    `background: linear-gradient(90deg, rgba(234, 234, 238, 0.4) 0%, rgba(234, 234, 238, 0.4) 100%) !important`}
  &:hover {
    border: 1px solid ${(props) => (props.labelOnTop ? variables.colors.primary : variables.colors.black_38)};
  }
`;
export const TinyIconWrapper = styled.div<IDatePicker>`
  width: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  i {
    &:before {
      color: ${(props) =>
        props.error
          ? variables.colors.error
          : props.labelOnTop
          ? variables.colors.primary
          : variables.colors.black_60} !important;
      font-size: 20px;
    }
  }
  i[class*='leftIcon']:before {
    ${(props) => props.labelOnTop && `color: ${variables.colors.primary} !important;`}
  }
`;
export const TinyDatePickerInputWrapper = styled.div<IDatePicker>`
  width: ${(props) => {
    if (props.leftIcon && props.rightIcon) {
      return 'calc(100% - 32px)';
    } else if (!props.leftIcon && props.rightIcon) {
      return 'calc(100% - 16px)';
    } else if (props.leftIcon && !props.rightIcon) {
      return 'calc(100% - 16px)';
    } else {
      return 'calc(100% - 18px)';
    }
  }};
  z-index: 2;
  background-color: transparent;
  border: unset !important;
  font-size: 14px;
  align-self: flex-start;
  min-height: 17px;
  .customDatePicker {
    color: ${(props) =>
      props.error ? variables.colors.error : props.labelOnTop ? variables.colors.primary : variables.colors.black_87};
    min-height: 28px;
    height: 28px;
    border: unset;
    border-radius: 8px;
    background-color: transparent;
    width: 100% !important;
    text-align: right;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 4px 8px;
    margin: 0;
    cursor: pointer;
  }
`;
