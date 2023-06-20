import styled from 'styled-components';
import variables from '../../constants/styleVariables';

interface I_RadioButtonWrapper {
  checked?: boolean;
  disabled?: boolean;
}

export const RadioButtonWrapper = styled.div<I_RadioButtonWrapper>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${variables.colors.black_87};
  font-size: ${variables.fontSize.h5};
  padding-left: 22px;
  padding-right: 3px;
  position: relative;
  height: 24px;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  margin-left: 5px;
  &:before {
    content: ' ';
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid;
    margin-top: 3px;
    border-color: ${variables.colors.primary};
    background-color: ${variables.colors.white};
  }

  ${(props) => {
    if (props.checked) {
      return `
				&:after {
					content: ' ';
					position: absolute;
					left: 4px;
					top: 7px;
					width: 8px;
					height: 8px;
					border-radius: 50%;
				}
        ${
          props.disabled
            ? ` &:before, &:hover:before{
            box-shadow: none;
          }`
            : `&:after{
            background-color: ${variables.colors.primary};
          }
          &:hover:before{
            box-shadow: 0px 0px 0px 10px ${variables.colors.blue_800}0A;
          }
          &:active:before{
            box-shadow: 0px 0px 0px 10px ${variables.colors.blue_800}1A;
          }`
        }
			`;
    } else if (!props.checked) {
      return `
      &:before{
        border-color: ${variables.colors.black_60};
      }
      ${
        props.disabled
          ? `
      &:hover:before, &:active:before{
        box-shadow: none;
      }`
          : `
        &:hover:before{
          box-shadow: 0px 0px 0px 10px rgba(0, 0, 0, 0.04);
          background-color:rgba(0, 0, 0, 0.04);
        }
        &:active:before{
          box-shadow: 0px 0px 0px 10px rgba(0, 0, 0, 0.1);
          background-color: rgba(0, 0, 0, 0.1);
        }
        `
      }`;
    }
  }}
  ${(props) => {
    if (props.disabled) {
      return `
      cursor: default;
      &:before {
        border-color:${props.checked ? variables.colors.primary : variables.colors.black_38} ;
        opacity: 0.38;
      }
      &:after{
        background-color:${variables.colors.primary};
        opacity: 0.38;
      }
      `;
    }
  }}
`;
