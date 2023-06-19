import styled from 'styled-components';
import variables from '../../../../constants/styleVariables';

interface IMenuItems {
  width: number;
  height: number;
}

export const SidebarContainer = styled.div`
  position: relative;
  cursor: default;
  width: 100%;
  height: calc(100vh - 72px);
  background-color: ${variables.colors.white};
  overflow-x: hidden;
  direction: ltr;
  overflow-y: auto;
  @media only screen and (max-width: 1023px) {
    width: 72px;
    float: right;
  }
`;

export const Menu = styled.div`
  width: 100%;
  direction: rtl;
  padding: 26px 18px;
  @media only screen and (max-width: 1023px) {
    width: 72px;
  }
`;
export const MenuItem = styled.div<IMenuItems>`
  min-width: 94px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${variables.colors.black_850};
  border-radius: 4px;
  margin-bottom: 18px;
  @media only screen and (max-width: 1023px) {
    min-width: 24px;
    width: 24px;
    height: 24px;
    margin: 0 auto 32px auto;
  }
`;
