import styled from 'styled-components';
import variables from '../../../../constants/styleVariables';

export const Container = styled.div`
  position: relative;
  cursor: pointer;
  height: inherit;
  min-height: 66px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 16px;
  &:last-child {
    margin-left: 0;
  }
`;
export const Icon = styled.i`
  width: 26px;
  height: 26px;
  padding: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:before {
    font-size: 28px;
    color: ${variables.colors.primary};
  }
`;
export const Menu = styled.div`
  min-width: 230px;
  max-width: 230px;
  height: 370px;
  background-color: #ffffff;
  border-radius: 8px 8px 0 0;
  position: absolute;
  top: 72px;
  left: -16px;
  z-index: 9999;
  cursor: default;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  &:before {
    content: ' ';
    background: transparent url('/assets/triangle.svg') bottom -8px left -9px no-repeat;
    width: 50px;
    height: 50px;
    z-index: -1;
    position: absolute;
    left: 12px;
    top: 0;
    -ms-transform: rotate(119deg);
    transform: rotate(119deg);
  }
`;
export const MenuHeader = styled.div`
  height: 63px;
  background-color: ${variables.colors.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 16px;
  border-radius: 8px 8px 0 0;
`;
export const HeaderTitle = styled.div`
  color: ${variables.colors.white};
  font-size: ${variables.fontSize.h4};
  font-weight: ${variables.fontWeight.bold};
`;
export const MenuContent = styled.div`
  padding: 8px 0 8px 0;
  overflow-y: auto;
  height: 204px;
  max-height: 228px;
`;
export const MenuItem = styled.div`
  position: relative;
  width: 100%;
  height: 28px;
  background-color: ${(props) => (props.active ? variables.colors.yellow_50 : variables.colors.white)};
  border-radius: 4px;
  margin-bottom: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background-color: ${variables.colors.yellow_50};
  }
  .profile-menu-items {
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    width: 100%;
    height: inherit;
    border-radius: 4px;
    font-size: ${variables.fontSize.h6};
    color: ${variables.colors.black_700};
    padding: 4px 12px;
    &:hover {
      color: ${variables.colors.black_600};
    }
    &:active,
    &:visited,
    &:focus {
      color: ${variables.colors.black_700};
    }
    line-height: 20px;
    text-align: right;
  }
`;
