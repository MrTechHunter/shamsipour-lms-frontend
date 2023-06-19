import styled from 'styled-components';
import variables from '../../constants/styleVariables';

interface ILabel {
  iconColor: string;
}
interface ITitle {
  fontColor: any;
  highlight: any;
}
interface IInput {
  showSearchBox: any;
}
interface IIcon {
  closeIcon: any;
}
export const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  padding-top: 50px;
`;
export const MenuTreeMainContainer = styled.div`
  height: 100%;
  max-height: calc(100vh - 450px);
  overflow-y: auto;
  .title-tag {
    background-color: ${variables.colors.gray_200};
    border-radius: 2px;
    color: ${variables.colors.blue_200};
    padding: 0 1px;
  }
`;
export const MenuTreeWrapper = styled.div`
  height: 100%;
  .tree-menu-ul {
    border-right: 1px solid ${variables.colors.primary};
    direction: rtl;
    padding: 0 18px 0 0;
    position: relative;
    .vertical-line-of-first-node {
      position: absolute;
      top: 0;
      right: -1px;
      height: 18px;
      width: 1px;
      content: ' ';
      background-color: ${variables.colors.white};
    }
    &:after {
      position: absolute;
      bottom: 0;
      right: -1px;
      height: 17px;
      width: 1px;
      content: ' ';
      background-color: ${variables.colors.white};
    }
  }
  .tree-menu-li {
    list-style: none;
    position: relative;
    margin-bottom: 5px;
    height: 36px;
    .right-side {
      height: 36px;
      display: flex;
      justify-content: flex-start !important;
      align-items: center !important;
      .tree-menu-checkbox {
        margin-left: 0;
        margin-right: 10px;
        margin-bottom: 0;
      }
      .arrow-icon {
        position: absolute;
        right: -9px;
        top: calc(50% - 9px);
        width: 18px;
        min-height: 18px !important;
        box-sizing: border-box;
        padding: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        &:before {
          font-size: 10px;
          color: ${variables.colors.primary};
        }
      }
      .horizontal-line {
        content: ' ';
        position: absolute;
        right: -18px;
        top: 18px;
        height: 1px;
        width: 7px;
        background-color: ${variables.colors.primary};
        &:after {
          content: ' ';
          position: absolute;
          left: -5px;
          top: calc(50% - 2px);
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: ${variables.colors.primary};
        }
      }
      .horizontal-line-leaves {
        content: ' ';
        position: absolute;
        right: -18px;
        top: 18px;
        height: 1px;
        width: 2.6%;
        background-color: ${variables.colors.primary};
        &:after {
          content: ' ';
          position: absolute;
          left: -2px;
          top: calc(50% - 3px);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: ${variables.colors.white};
          border: 1px solid ${variables.colors.primary};
        }
      }
    }
    .left-side {
      position: absolute;
      left: 8px;
      top: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 36px;
    }
  }
  .show {
    transform: rotate(-90deg);
    transition: transform 0.2s linear;
  }
  .hide {
    transform: rotate(0deg);
    transition: transform 0.2s linear;
  }
  .tree-menu-label {
    height: inherit;
    padding: 8px 20px;
    font-size: 14px;
    text-transform: uppercase;
    border-radius: 4px;
  }
  .tree-menu-label-success {
    color: #3dd598;
    background-color: #3dd5980d;
  }
  .tree-menu-label-warning {
    color: #ff974a;
    background-color: #ff974a0d;
  }
`;
export const LabelIcon = styled.i<ILabel>`
  margin: 0 5px !important;
  &:before {
    color: ${(props) => (props.iconColor ? props.iconColor : '#FF974A')};
  }
`;
export const TreeMenuTitle = styled.div<ITitle>`
  padding: 1px 3px;
  border-radius: 4px;
  cursor: pointer;
  color: ${(props) => (props.fontColor ? props.fontColor : variables.colors.black_600)};
  background-color: ${(props) => (props.highlight ? 'yellow' : '')};
  color: ${(props) => (props.highlight ? 'black' : '')};
  font-size: ${variables.fontSize.h8};
  .menu-tree-item-address {
    min-height: 14px;
    display: block;
    color: ${(props) => (props.fontColor ? props.fontColor : variables.colors.error)};
    font-size: ${variables.fontSize.h8};
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${variables.colors.error};
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 50px;
  padding-bottom: 10px;
`;
export const Title = styled.div`
  height: 40px;
  width: 30%;
  min-height: 24px;
  font-style: normal;
  font-weight: ${variables.fontWeight.bold};
  font-size: ${variables.fontSize.h5};
  line-height: 24px;
  display: flex;
  align-items: center;
  text-align: right;
  color: ${variables.colors.error};
`;
export const ButtonContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 8px;
`;
export const InputWrapper = styled.div<IInput>`
  width: ${(props) => (props.showSearchBox ? 'calc(100% - 48px)' : '40px')};
  height: 40px;
  border: 1px solid;
  border-color: ${(props) => (props.showSearchBox ? `rgba(1, 77, 64, 0.3)` : '#fff')};
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: 8px;
  transition: width 1s, border-color 1s;
`;
export const Input = styled.input<IInput>`
  height: 35px;
  border-radius: 4px;
  font-size: ${variables.fontSize.h6};
  color: ${variables.colors.blue_200};
  border: unset !important;
  width: ${(props) => (props.showSearchBox ? '100%' : '0')};
  min-width: 0;
  padding: 0 8px;
`;
export const SearchIcon = styled.i<IIcon>`
  width: 37px;
  height: 38px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:before {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid;
    border-color: #fff;
    width: 28px;
    height: 28px;
    border-radius: 6px;
    font-size: 19px;
    color: ${variables.colors.error};
    ${(props) => {
      if (props.closeIcon) {
        return `
					width: 20px;
    				height: 20px;
					font-size: 24px;
				`;
      }
    }}
  }
`;
export const Icon = styled.i`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    font-size: 32px;
    color: ${variables.colors.error};
  }
`;
