import styled from 'styled-components';
import variables from '../../constants/styleVariables';

interface ICheckboxWrapper {
  parentChecked?: boolean;
  checked: boolean;
  size: string;
  disabled: boolean;
}

export const CheckboxWrapper = styled.div<ICheckboxWrapper>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${variables.colors.black_300};
  font-size: ${variables.fontSize.h5};
  padding-right: ${(props) => (props.size === 'md' ? '21px' : '8px')};
  position: relative;
  height: ${(props) => (props.size === 'md' ? '20px' : '12px')};
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  /* margin-bottom: 8px; */
  /* &:last-child {
    margin-bottom: 8px;
  } */
  &:before {
    content: ' ';
    overflow: hidden;
    position: absolute;
    right: 0;
    top: 0;
    width: ${(props) => (props.size === 'md' ? '19px' : '10px')};
    height: ${(props) => (props.size === 'md' ? '19px' : '10px')};
    border-radius: ${(props) => (props.size === 'md' ? '7px' : '2px')};
    border: 2px solid;
    ${(props) => {
      if (props.checked) {
        return `
					border-color: ${variables.colors.primary};
					background-color: ${variables.colors.primary};
				`;
      } else if (props.parentChecked) {
        return `
					border-color: ${variables.colors.primary};
					background-color: ${variables.colors.primary};
				`;
      } else {
        return `
					border-color: ${variables.colors.primary};
					background-color: ${variables.colors.white};
				`;
      }
    }}
  }
  ${(props) => {
    if (props.checked) {
      return `
				&:after {
					content: ' ';
					position: absolute;
					right: ${props.size === 'md' ? '7px' : '3px'};
					top: ${props.size === 'md' ? ' 2px' : '0px'};
					width: ${props.size === 'md' ? '5px' : '3px'};
					height: ${props.size === 'md' ? '12px' : '7px'};
					border-right: 2px solid ${variables.colors.white};
					border-bottom: 2px solid ${variables.colors.white};
					background-color: transparent;
					-webkit-transform: rotate(45deg);
					-moz-transform: rotate(45deg);
					-ms-transform: rotate(45deg);
					-o-transform: rotate(45deg);
					transform: rotate(45deg);
				}
        &:hover:before {
          box-shadow: 0px 0px 0px 10px ${variables.colors.blue_800}0a;
        }
        &:active:before {
          box-shadow: 0px 0px 0px 10px ${variables.colors.blue_800}1a;
        }`;
    } else if (!props.checked && !props.disabled) {
      return `
        &:hover:before {
          box-shadow: 0px 0px 0px 10px rgba(0, 0, 0, 0.04);
          background-color:rgba(0, 0, 0, 0.04);
        }
        &:active:before {
          box-shadow: 0px 0px 0px 10px rgba(0, 0, 0, 0.1);
          background-color:rgba(0, 0, 0, 0.1);
        }
			`;
    }
    if (props.parentChecked) {
      return `
				&:after {
					content: ' ';
					position: absolute;
					right: 2px;
					top: 5px;
					width: 8px;
					height: 2px;
					background-color: ${variables.colors.white};
				}
			`;
    }
  }}
  ${(props) => {
    if (props.disabled) {
      return `
      &:before {
        border-color: ${props.checked ? variables.colors.primary : variables.colors.black_60};
        background-color: ${props.checked ? variables.colors.primary : '#fff'};
        box-shadow: 0 0 0 0 !important;
        opacity: 0.38;
        cursor: default;
      }
      `;
    }
  }}
`;
export const Label = styled.div`
  margin-right: 12px;
`;
