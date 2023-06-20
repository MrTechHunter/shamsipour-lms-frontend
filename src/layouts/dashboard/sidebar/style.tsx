import styled from 'styled-components';
import variables from '../../../constants/styleVariables';

export const SidebarContainer = styled.div`
  width: 100%;
  height: calc(100vh - 72px);
  max-height: calc(100vh - 72px);
  overflow-y: auto;
  direction: ltr;
`;

export const Menu = styled.div`
  width: 100%;
  direction: rtl !important;
  height: inherit;
`;

interface IUl {
  leaf: boolean;
  level: number;
}
export const Ul = styled.ul<IUl>`
  z-index: 9999;
  list-style: none;
  padding: 0;
  @media only screen and (max-width: 1023px) {
    position: absolute;
    &:last-child {
      padding-bottom: 8px;
    }
    ${(props) => {
      if (props.level > 1) {
        return `
          z-index: 9999;
          // box-shadow: 0 3px 5px rgba(9, 30, 66, 0.2), 0 0 1px rgba(9, 30, 66, 0.31);     
        `;
      }
    }};
    width: 66px;
    ${(props) => {
      if (props.level > 2) {
        return `
          right: 0;
          width: 220px;
        `;
      }
      if (props.leaf) {
        return `
          filter: drop-shadow(0px 8px 12px rgba(9, 30, 66, 0.15)) drop-shadow(0px 0px 1px rgba(9, 30, 66, 0.31));
          right: 82px;
          top: 0;
          width: 220px;
          &:before {
            content: ' ';
            background: url(/assets/triangle.svg);
            position: absolute;
            top: 19px;
            right: -14px;
            width: 20px;
            height: 20px;
            background-repeat: no-repeat;
            background-position: center;
            transform: rotate(90deg);
            z-index: -1;
          }
          margin-top: 5px;
          margin-bottom: 5px;
        `;
      }
    }};
  }
`;
export const Badge = styled.small`
  position: absolute;
  left: 3px;
  top: calc(50% - 9px);
  background-color: ${variables.colors.secondary};
  color: ${variables.colors.blue_400};
  border-radius: 4px;
  padding: 1px 3px;
  font-size: ${variables.fontSize.h8};
`;

interface IMenuItem {
  leaf?: boolean;
  active?: boolean;
  showSubMenu?: boolean;
}

export const Li = styled.li<IMenuItem>`
  position: relative;
  width: auto;
  max-width: 100%;
  min-height: 56px;
  ${(props) => {
    if (props.leaf) {
      return `
        background: white;
      `;
    }
  }};
  a.menu-item {
    padding-right: ${(props) => (props.leaf ? '22px' : '4px')};
    display: block;
    min-height: 56px;
    text-decoration: none;
    font-size: ${(props) => (props.leaf ? variables.fontSize.h6 : variables.fontSize.h5)};
    font-weight: ${(props) => (!props.leaf ? variables.fontWeight.medium : variables.fontWeight.medium)};
    color: ${(props) => (!props.leaf ? variables.colors.primary : variables.colors.blue_400)};
    &:focus,
    &:visited,
    &:active {
      color: ${(props) => (!props.leaf ? variables.colors.primary : variables.colors.blue_400)};
      font-weight: ${variables.fontWeight.bold};
    }
    &:hover {
      font-weight: ${variables.fontWeight.bold};
      color: ${variables.colors.primary};
      &:after {
        content: ' ';
        background: linear-gradient(90deg, rgba(169, 81, 247, 0) 0%, rgba(169, 81, 247, 0.1) 117.12%);
        height: 56px;
        width: calc(100% - 1px);
        position: absolute;
        right: 0;
        top: calc(50% - 28px);
        z-index: 1;
        border-right: 4px solid ${variables.colors.primary};
      }
    }
    @media only screen and (max-width: 1023px) {
      padding-right: 0;
      &:focus,
      &:visited,
      &:active {
        color: ${variables.colors.white};
      }
      &:hover {
        color: ${variables.colors.white};
        &:after {
          border-right: 0;
          background: unset;
          &:before {
            color: ${variables.colors.primary} !important;
          }
        }
      }
      ${(props) => {
        if (props.leaf) {
          return `
            padding: 5px 20px;
            width: 210px;
            margin-right: 20px;
            background: transparent;
            &:focus,
            &:visited,
            &:active {
              color: ${variables.colors.primary};
            }
            &:hover {
              color: ${variables.colors.primary} !important;
              &:after {
                z-index: 5;
                border-right: 4px solid ${variables.colors.primary};
                background: unset;
              }
            }
          `;
        }
        if (props.leaf && props.showSubMenu) {
          return `border-right: 4px solid ${variables.colors.primary}`;
        }
      }};
    }
    ${(props) => {
      if (props.active) {
        return `
					color: ${variables.colors.primary} !important;
					&:after {
						content: ' ';
						background: linear-gradient(90deg, rgba(169, 81, 247, 0) 0%, rgba(169, 81, 247, 0.1) 117.12%);
						height: 56px;
						width: calc(100% - 1px);
						position: absolute;
						right: 0;
						top: calc(50% - 28px);
						// z-index: -1;
						border-right: 4px solid ${variables.colors.primary};
					}
					@media only screen and (max-width: 1023px) {
					  color: ${variables.colors.primary} !important;
            &:after {
              border-right: 0;
              background: transparent;
            }
					}
				`;
      }
    }};
    width: 100%;
    position: relative;
  }
  @media only screen and (max-width: 1023px) {
    ${(props) => {
      if (props.leaf) {
        return `
          &:after {
            content: ' ';
            height: 66px;
            width: 4px;
            position: absolute;
            right: 20px;
            top: 0px;
            bottom: 10px;
            z-index: 1;
            border-right: 4px solid ${variables.colors.black_200};
          }
        `;
      }
    }};
  }
`;

interface IItemText {
  leaf: boolean;
  active: boolean;
  showSubMenu: boolean;
}

export const ItemText = styled.span<IItemText>`
  position: relative;
  min-height: 56px;
  right: 46px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: auto;
  max-width: 100%;
  .item-text {
    width: calc(100% - 46px);
  }
  .item-icon {
    & {
      font-size: 16px;
    }
    @media only screen and (max-width: 1023px) {
      & {
        font-size: 24px;
      }
    }
  }
  ${(props) => {
    if (!props.leaf) {
      return `
        .item-icon {
          position: absolute;
          right: -46px;
          top: calc(50% - 28px);
          min-height: 56px;
          width: 46px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
    `;
    }
    return `.item-icon {
      display: none;
    }`;
  }};
  @media only screen and (max-width: 1023px) {
    right: 0;
    ${(props) => {
      if (props.leaf) {
        return `
          width: 100%;
          top: 0;
        `;
      } else {
        return `
          width: 72px;
        `;
      }
    }};
    .item-icon {
      width: 72px;
      position: static;
      &:before {
        color: ${(props) =>
          props.active
            ? variables.colors.primary
            : props.showSubMenu
            ? variables.colors.primary
            : variables.colors.blue_300};
      }
      &:hover {
        &:before {
          color: ${variables.colors.primary};
        }
      }
    }
    .item-text {
      ${(props) => {
        if (props.leaf) {
          return `
            
          `;
        } else {
          return `
            display: none;
          `;
        }
      }};
    }
  }
`;

interface IItemIcon {
  showSubMenu?: boolean;
  active?: boolean;
  level: number;
}
export const ItemIcon = styled.small<IItemIcon>`
  cursor: pointer;
  position: absolute;
  left: 12px;
  top: 17px;
  color: ${variables.colors.white};
  border-radius: 8px;
  padding: 2px 5px;
  z-index: 1;
  transform: rotate(90deg);
  &:before {
    font-size: 18px;
    color: ${(props) => (props.active ? variables.colors.blue_400 : variables.colors.primary)};
  }
  transition: 0.2s;
  ${(props) => {
    if (props.showSubMenu) {
      return `
				-o-transform: rotate(0deg);
				-ms-transform: rotate(0deg);
				-moz-transform: rotate(0deg);
				-webkit-transform: rotate(0deg);
				transform: rotate(0deg);
			`;
    }
  }};
  @media only screen and (max-width: 1023px) {
    ${(props) => {
      if (props.level <= 1) {
        return `
          display: none;
        `;
      } else {
        return `
          top: calc(50% - 12px);
          left: 20px;
          z-index: 1;
        `;
      }
    }};
  }
`;
interface ICloseableAreaWrapper {
  show: boolean;
}
export const CloseableAreaWrapper = styled.div<ICloseableAreaWrapper>`
  background-color: rgba(0, 0, 0, 0.19);
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  ${(props) => {
    if (props.show) {
      return `display: block`;
    } else {
      return `display: none`;
    }
  }}
`;
