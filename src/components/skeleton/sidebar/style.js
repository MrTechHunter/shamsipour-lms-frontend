import styled from 'styled-components';
import variables from '../../../constants/styleVariables';

export const SidebarContainer = styled.div`
  position: relative;
  cursor: default;
  width: 240px;
  height: calc(100vh - 72px);
  background-color: ${variables.colors.white};
  overflow-x: hidden;
`;
export const Avatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background-color: ${variables.colors.white_100};
`;
export const Header = styled.div`
  width: 100%;
  height: 72px;
  background-color: ${variables.colors.black_850};
  padding: 0 5.1%;
  position: relative;
  display: flex;
  align-items: center;
`;
export const Close = styled.i`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  position: absolute;
  left: 22px;
  top: calc(50% - 15px);
  background-color: ${variables.colors.white};
`;
export const Menu = styled.div`
  height: calc(100vh - 72px);
  max-height: calc(100vh - 72px);
  width: 100%;
  overflow-y: auto;
  padding: 26px 18px;
`;
export const MenuItem = styled.div`
  min-width: 94px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${variables.colors.black_850};
  border-radius: 4px;
  margin-bottom: 18px;
`;
export const UserProfile = styled.div`
  width: calc(100% - 80px);
  height: 44px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const User = styled.div`
  height: 28px;
  width: 168px;
  background-color: ${variables.colors.white};
  border-radius: 4px;
  margin-right: 12px;
`;
