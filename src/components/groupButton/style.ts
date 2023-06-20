import styled from 'styled-components';
import variables from '../../constants/styleVariables';
import IconSrc from './icon/chevron-down.svg';
import IconSrcTiny from './icon/chevron-downTiny.svg';

interface IIcon {
  type: string;
  showMenu: boolean;
}

interface IIconTiny {
  type: string;
  visible: boolean;
}

export const Container = styled.div`
  min-width: 180px;
  height: 36px;
  position: relative;
`;
export const TinyContainer = styled.div`
  min-width: 40px;
  height: 40px;
  position: relative;
`;
export const Button = styled.button`
  min-width: max-content;
  height: 36px;
  border-radius: 4px;
  padding: 10px 16px 10px 47px;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  cursor: pointer;
  text-align: right;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${(props) => {
    switch (props.color) {
      case 'primary':
        return `
				border: 1px solid ${variables.colors.secondary};
				color: ${variables.colors.white};
				background: linear-gradient(90deg, #3F50B5 0%, #1A237E 100%);
			`;
      case 'outline':
        return `
				border: 1px solid ${variables.colors.primary};
				color: ${variables.colors.primary};
				background: ${variables.colors.white};
			`;
    }
  }};
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:hover {
    box-shadow: 0 0 12px 4px #e8eaf6;
  }
`;
export const TinyButton = styled.button`
  height: 40px;
  border-radius: 4px;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  text-align: right;
  position: relative;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(255, 255, 255);
  background: inherit;
  ${(props) => {
    switch (props.color) {
      case 'primary':
        return `
				border: none;
				color: ${variables.colors.white};
				background: linear-gradient(90deg, inherit 0%, inherit 100%);
			`;
      case 'outline':
        return `
				border: 1px solid ${variables.colors.primary};
				color: ${variables.colors.primary};
				background: ${variables.colors.white};
			`;
    }
  }};
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  &:hover {
    box-shadow: 0 0 12px 4px #e8eaf6;
  }
  > i:nth-of-type(1) {
    &::before {
      right: 4px;
      position: absolute;
    }
  }
`;

export const Icon = styled.i<IIcon>`
  width: 18px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 12px;
  top: calc(50% - 9px);
  &:before {
    content: ' ';
    background-image: url(${IconSrc});
    background-position: center;
    background-repeat: no-repeat;
    width: 12px;
    height: 12px;
    position: absolute;
    top: calc(50% - 6px);
    left: 0px;
    ${(props) => {
      if (props.showMenu) {
        return `
				-o-transform: rotate(-180deg);
				-ms-transform: rotate(-180deg);
				-moz-transform: rotate(-180deg);
				-webkit-transform: rotate(-180deg);
				transform: rotate(-180deg);
			`;
      }
    }};
  }
  transition: 0.2s;
`;
export const TinyIcon = styled.i<IIconTiny>`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: absolute;
  left: 0;
  transition: all 0.2s ease 0s;
  &:before {
    content: ' ';
    background-image: url(${IconSrcTiny});
    background-position: center center;
    background-repeat: no-repeat;
    width: 8px;
    height: 13px;
    position: absolute;
    top: calc(50% - 8px);
    left: 5px;
    ${(props) => {
      if (props.visible) {
        return `
				-o-transform: rotate(-180deg);
				-ms-transform: rotate(-180deg);
				-moz-transform: rotate(-180deg);
				-webkit-transform: rotate(-180deg);
				transform: rotate(-180deg);
			`;
      }
    }};
  }
  transition: 0.2s;
`;
export const Menu = styled.div`
  box-shadow: 0 2px 4px #e8eaf6;
  min-width: 175px;
  position: absolute;
  top: 48px;
  right: 0;
  z-index: 99999;
  background-color: ${variables.colors.white};
  border-radius: 8px;
  overflow-y: auto;
  padding: 10px 8px;
`;
export const TinyMenu = styled.div`
  box-shadow: 0 2px 4px #e8eaf6;
  min-width: 128px;
  position: absolute;
  /* top: 48px;
  right: 0px; */
  z-index: 99999;
  background-color: ${variables.colors.white};
  border-radius: 8px;
  overflow-y: auto;
  padding: 0px 0px;
`;
export const Item = styled.div`
  color: ${variables.colors.primary_variant};
  width: 100%;
  min-width: 159px;
  height: 36px;
  font-size: ${variables.fontSize.h5};
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  text-align: right;
  &:hover {
    box-shadow: 0 0 2px #e8eaf6;
    background: linear-gradient(90deg, ${variables.colors.surface} 0%, ${variables.colors.surface} 100%);
  }
`;
export const TinyItem = styled.div`
  color: ${variables.colors.black_87};
  width: 100%;
  min-width: 128px;
  height: 32px;
  font-size: 12px;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  text-align: right;
  &:hover {
    box-shadow: 0 0 2px #e8eaf6;
    background: linear-gradient(90deg, ${variables.colors.surface} 0%, ${variables.colors.surface} 100%);
  }
`;
