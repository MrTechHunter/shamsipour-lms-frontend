import styled from 'styled-components';
import variables from '../../../constants/styleVariables';

interface I_DropList {
  location: boolean;
}

interface I_DropDownContainer {
  ref: any;
}

export const Container = styled.div`
  height: 24px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 16px;
`;
export const MonitoringContainer = styled.div`
  min-width: 83px;
  width: auto;
  min-height: 19px;
  height: inherit;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const Text = styled.div`
  color: ${variables.colors.black_87};
  font-size: 12px;
  font-weight: 500;
  margin-left: 4px;
`;

export const DropdownContainer = styled.div<I_DropDownContainer>`
  position: relative;
`;
export const DropdownValueWrapper = styled.div`
  width: 53px;
  height: 24px;
  border-radius: 4px;
  background-color: #ffffff;
  border: 1px solid ${variables.colors.black_87};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  cursor: pointer;
`;
export const DropdownValue = styled.div`
  font-size: 12px;
  color: ${variables.colors.black_87};
  text-align: right;
`;
export const DropdownIcon = styled.i`
  width: 6px;
  height: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    font-size: 6px;
  }
`;
export const DropdownList = styled.div<I_DropList>`
  max-height: 130px;
  height: 100%;
  overflow-y: auto;
  width: 60px;
  background: ${variables.colors.white};
  box-shadow: 0 2px 4px #b6c3d1;
  border-radius: 4px;
  position: absolute;
  ${(props) => {
    if (props.location) {
      return 'top : 24px;';
    } else {
      return 'bottom : 24px ;';
    }
  }}
  right: -2px;
  min-height: 130px;
  z-index: 99999;
  padding-top: 1px;
  padding-bottom: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
interface I_Item {
  selected: boolean;
}
export const Item = styled.div`
  padding: 6px 16px;
  width: 100%;
  height: 32px;
  background: ${variables.colors.white};
  color: ${(props: I_Item) => (props.selected ? variables.colors.primary : variables.colors.black_87)};
  font-weight: ${(props: I_Item) => (props.selected ? 700 : 400)};
  &:hover {
    background: ${variables.colors.secondary};
    box-shadow: 0 0 2px #d4d8dd;
  }
  &:last-child {
    margin-bottom: 0;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
