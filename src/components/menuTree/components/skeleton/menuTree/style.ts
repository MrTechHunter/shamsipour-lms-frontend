import styled from 'styled-components';
import variables from '../../constants/styleVariables';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 400px);
  border-radius: 8px;
  background-color: ${variables.colors.white};
  position: relative;
  overflow-x: hidden;
  padding: 50px 5px 16px 5px;
`;
export const Header = styled.div`
  width: calc(100% - 20px);
  height: 50px;
  border-bottom: 1px solid ${variables.colors.black_850};
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;
export const Title = styled.div`
  width: 114px;
  height: 24px;
  background: ${variables.colors.black_850};
  border-radius: 4px;
`;
export const IconContainer = styled.div`
  width: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Icon = styled.div`
  background: ${variables.colors.black_850};
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;
export const MenuTreeWrapper = styled.div`
  height: 100%;
  .tree-menu-ul {
    border-right: 1px solid ${variables.colors.black_800};
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
    height: 36px;
    .right-side {
      height: 36px;
      display: flex;
      justify-content: flex-start !important;
      align-items: center !important;
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
          color: ${variables.colors.black_800};
        }
      }
      .horizontal-line {
        content: ' ';
        position: absolute;
        right: -18px;
        top: 18px;
        height: 1px;
        width: 7px;
        background-color: ${variables.colors.black_800};
        &:after {
          content: ' ';
          position: absolute;
          left: -5px;
          top: calc(50% - 2px);
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: ${variables.colors.black_800};
        }
      }
      .horizontal-line-leaves {
        content: ' ';
        position: absolute;
        right: -18px;
        top: 18px;
        height: 1px;
        width: 2.6%;
        background-color: ${variables.colors.black_800};
        &:after {
          content: ' ';
          position: absolute;
          left: -2px;
          top: calc(50% - 3px);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: ${variables.colors.white};
          border: 1px solid ${variables.colors.black_800};
        }
      }
    }
  }
  .show {
    transform: rotate(-90deg);
    transition: transform 0.2s linear;
  }
`;
export const TreeMenuTitle = styled.div`
  min-width: 30px;
  width: ${(props: { width: number }) => `${props.width}px`};
  max-width: 150px;
  min-height: 20px;
  margin-right: 38px;
  background: ${variables.colors.black_850};
  border-radius: 4px;
`;
