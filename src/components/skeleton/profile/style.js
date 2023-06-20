import styled from 'styled-components';
import variables from '../../../constants/styleVariables';

export const UserProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${variables.colors.blue_050};
  width: 160px;
  height: 60px;
  border-radius: 4px;
  position: relative;
  overflow-x: hidden;
  padding: 0 12px;
`;
export const User = styled.div`
  height: 50px;
  width: calc(100% - 44px);
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding-right: 8px;
`;
export const Avatar = styled.div`
  width: 44px;
  height: 44px;
  background-color: ${variables.colors.white};
  border-radius: 8px;
  padding: 9px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    font-size: 25px;
    margin: 0;
    color: ${variables.colors.white_300};
  }
`;
export const Username = styled.div`
  height: 14px;
  width: 77px;
  background-color: ${variables.colors.white};
  border-radius: 4px;
  margin-bottom: 3px;
`;
export const Role = styled.div`
  height: 12px;
  width: 56px;
  background-color: ${variables.colors.white};
  border-radius: 4px;
`;
