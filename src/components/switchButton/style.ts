import styled from 'styled-components';
import Variables from '../../constants/styleVariables';

interface IBox {
  size: string;
  status: boolean;
  disable: boolean;
}

export const Box = styled.div<IBox>`
  width: ${(props) => (props.size === 'sm' ? '20px' : '36px')};
  height: ${(props) => (props.size === 'sm' ? '16px' : '20px')};
  position: relative;
  cursor: ${(props) => (props.disable ? 'default' : 'pointer')};
  opacity: ${(props) => (props.disable ? '0.5' : '1')};
  &:before {
    width: ${(props) => (props.size === 'sm' ? '20px' : '36px')};
    height: ${(props) => (props.size === 'sm' ? '8px' : '10px')};
    border-radius: 8px;
    display: block;
    content: '';
    position: absolute;
    top: ${(props) => (props.size === 'sm' ? '5px' : '9px')};
    right: 3px;
  }
  &:after {
    transition: 0.3s;
    content: '';
    position: absolute;
    width: ${(props) => (props.size === 'sm' ? '10px' : '20px')};
    height: ${(props) => (props.size === 'sm' ? '10px' : '20px')};
    border-radius: 50%;
    box-shadow: 0 0 2px 0 #cccccc;
    top: 3px;
  }
  ${(props) => {
    if (props.status) {
      return `
				&:before {
					background-color: ${Variables.colors.primary};
					opacity: 0.4;
				}
				&:after {
					background-color: ${Variables.colors.primary};
					right: 0;
				}
		`;
    } else {
      if (props.disable) {
        return `
				&:before {
					background-color: rgba(0, 0, 0, 0.06);
				}
				&:after {
					background-color: rgba(0, 0, 0, 0.38);
					right: ${props.size === 'sm' ? '14px' : '21px'};
				}
		`;
      } else {
        return `
				&:before {
					background-color: rgba(33, 33, 33, 0.08);
				}
				&:after {
					background-color: ${Variables.colors.white};
					right: ${props.size === 'sm' ? '14px' : '21px'};
				}
		`;
      }
    }
  }}
  span {
    position: relative;
    cursor: ${(props) => (props.disable ? 'default' : 'pointer')};
    opacity: ${(props) => (props.disable ? '0.5' : '1')};
    z-index: 10;
    display: block;
    &:after {
      content: '';
      position: absolute;
      width: ${(props) => (props.size === 'sm' ? '10px' : '20px')};
      height: ${(props) => (props.size === 'sm' ? '10px' : '20px')};
      border-radius: 50%;
      top: 3px;
    }
    ${(props) => {
      if (props.status) {
        return `
        &:hover:after {
					box-shadow: 0px 0px 0px 10px rgba(40, 53, 147, 0.04);
          transition: 0.3s;
				}
        &:active:after {
					box-shadow: 0px 0px 0px 10px rgba(40, 53, 147, 0.1);
				}
		`;
      } else {
        return `
				&:after {
					right: ${props.size === 'sm' ? '14px' : '21px'};
        }
				&:hover:after {
          box-shadow: 0px 0px 0px 10px rgba(0, 0, 0, 0.04);
					right: ${props.size === 'sm' ? '14px' : '21px'};
          transition: 0.3s;
				}
        &:active:after {
					box-shadow: 0px 0px 0px 10px rgba(0, 0, 0, 0.12);
				}
		`;
      }
    }}
  }
`;
