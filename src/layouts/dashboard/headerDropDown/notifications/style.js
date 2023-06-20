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
export const Badge = styled.div`
  content: ' ';
  min-width: 16px;
  min-height: 16px;
  border-radius: 50%;
  background-color: ${variables.colors.red};
  color: ${variables.colors.white};
  font-size: ${variables.fontSize.h7};
  font-weight: ${variables.fontWeight.normal};
  position: absolute;
  top: -4px;
  right: -6px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
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
  padding-bottom: 40px;
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
  overflow-y: auto;
  max-height: 267px;
`;
export const AllMessagesLink = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 40px;
  background-color: #fff;
  text-align: center;
  font-weight: 400;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
  a.see-all-messages-link {
    text-decoration: none;
    color: ${variables.colors.black_600};
    &:hover,
    &:active,
    &:focus {
      color: ${variables.colors.black_600};
    }
  }
`;
