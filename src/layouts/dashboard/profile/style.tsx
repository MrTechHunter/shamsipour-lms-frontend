import styled from 'styled-components';
import variables from '../../../constants/styleVariables';

interface userName {
  isOpen?: boolean;
  limitedText?: any;
}

export const Container = styled.div`
  cursor: pointer;
  max-width: fit-content;
  min-height: 66px;
  height: inherit;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;
export const UserProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const User = styled.div`
  height: 44px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Avatar = styled.i`
  width: 54px;
  height: 44px;
  border-radius: 8px;
  background-color: ${variables.colors.white};
  padding: 9px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
  &:before {
    font-size: 25px;
    margin: 0;
    color: ${variables.colors.primary};
  }
`;
export const Username = styled.div<userName>`
  width: 100%;
  font-size: ${variables.fontSize.h5};
  font-weight: ${variables.fontWeight.bold};
  color: ${(props) => (props.isOpen ? `${variables.colors.white}` : `${variables.colors.primary}`)};
`;
export const Role = styled.div<userName>`
  width: 100%;
  font-size: ${variables.fontSize.h6};
  font-weight: ${variables.fontWeight.bold};
  color: ${(props) => (props.isOpen ? `${variables.colors.white}` : `${variables.colors.primary}`)};
  ${(props) => {
    if (props.limitedText) {
      return `
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				max-width: 140px;	
			`;
    }
  }};
`;

export const Badge = styled.div`
  content: ' ';
  min-width: 16px;
  min-height: 16px;
  border-radius: 50%;
  background-color: ${variables.colors.error};
  color: ${variables.colors.primary};
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
  max-width: max-content;
  height: 190px;
  background-color: #ffffff;
  border-radius: 8px;
  position: absolute;
  top: 0px;
  right: -17px;
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
    right: 5px;
    top: 0;
    -ms-transform: rotate(119deg);
    transform: rotate(119deg);
  }
`;
export const SubMenu = styled.div`
  min-width: 230px;
  max-width: max-content;
  height: auto;
  background-color: #ffffff;
  border-radius: 8px;
  position: absolute;
  padding: 8px 12px;
  top: 75%;
  right: 104%;
  z-index: 99999;
  font-size: 12px;
  cursor: default;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  &:before {
    content: ' ';
    background: transparent url('/assets/triangle.svg') bottom -8px left -9px no-repeat;
    width: 50px;
    height: 50px;
    z-index: -1;
    right: -48px;
    top: 10px;
    position: absolute;
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
  }
`;
export const MenuHeader = styled.div`
  max-width: 100%;
  height: 72px;
  background-color: ${variables.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  border-radius: 8px 8px 0 0;
`;
export const MenuContent = styled.div`
  padding: 8px 8px;
  overflow-y: auto;
  height: 112px;
`;
export const MenuFooter = styled.div`
  height: 44px;
  border-top: 1px solid ${variables.colors.blue_500};
  width: 100%;
  display: flex;
  align-items: center;
  padding: 8px 8px;
  background-color: ${variables.colors.white};
  border-radius: 0 0 8px 8px;
`;

export const MenuItem = styled.div`
  position: relative;
  width: 100%;
  height: 28px;
  background-color: ${({ active }: any) => (active ? variables.colors.surface : variables.colors.white)};
  border-radius: 4px;
  margin-bottom: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background-color: ${variables.colors.blue_050};
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
    color: ${({ active }: any) => (active ? variables.colors.primary_variant : variables.colors.black_87)};
    padding: 4px 12px;
    &:hover {
      color: ${variables.colors.black_87};
    }
    &:active,
    &:focus {
      color: ${variables.colors.primary_variant};
    }
    line-height: 20px;
    text-align: right;
  }
`;
export const SubMenuItem = styled.div`
  position: relative;
  width: 100%;
  height: 28px;
  border-radius: 4px;
  margin-bottom: 4px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    background-color: ${variables.colors.blue_050};
  }
  .profile-sub-menu-items {
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    width: 100%;
    height: inherit;
    border-radius: 4px;
    font-size: ${variables.fontSize.h6};
    color: ${({ isActiveRole }: any) => isActiveRole && variables.colors.primary_variant};
    background-color: ${({ isActiveRole }: any) => isActiveRole && variables.colors.blue_050};
    padding: 4px 12px;
    line-height: 20px;
    text-align: right;
  }
`;

export const MenuIcon = styled.small`
  font-size: 16px;
  border-radius: 8px;
  z-index: 1;
  transform: rotate(90deg);
  transition: 0.2s;
`;
