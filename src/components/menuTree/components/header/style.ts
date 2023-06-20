import styled from 'styled-components';
import variables from '../constants/styleVariables';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${variables.colors.tertiary};
  width: 100%;
  height: 50px;
  padding: 10px;
  box-sizing: border-box;
`;
export const Title = styled.div`
  height: 40px;
  width: fit-content;
  min-height: 24px;
  font-style: normal;
  font-weight: ${variables.fontWeight.bold};
  font-size: ${variables.fontSize.h5};
  line-height: 24px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  color: ${variables.colors.secondary};
`;
export const ButtonContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 8px;
`;

interface IInputWrapper {
  showSearchBox?: boolean;
}
export const InputWrapper = styled.div<IInputWrapper>`
  width: ${(props) => (props.showSearchBox ? 'calc(100% - 60px)' : '60px')};
  height: 40px;
  border: 1px solid;
  border-color: ${(props) => (props.showSearchBox ? `${variables.colors.tertiary}` : '#fff')};
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 8px;
  transition: width 1s, border-color 1s;
`;
interface IInput {
  showSearchBox: any;
}
export const Input = styled.input<IInput>`
  height: 38px;
  border-radius: 4px;
  font-size: ${variables.fontSize.h6};
  color: ${variables.colors.blue_200};
  border: unset !important;
  outline: 0 !important;
  width: ${(props) => (props.showSearchBox ? '100%' : '0')};
  min-width: 0;
  padding: 0 8px;
  text-align: right;
  direction: rtl;
`;
interface IIconWrapper {
  closeIcon?: boolean;
}
export const IconWrapper = styled.div<IIconWrapper>`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: linear-gradient(90deg, rgba(234, 234, 238, 0.4) 0%, rgba(234, 234, 238, 0.4) 100%);
  }
`;

export const SearchResultContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid ${variables.colors.tertiary};
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
  margin-bottom: 12px;
`;
export const ResultMessage = styled.div`
  width: fit-content;
`;
export const ResultMessageLabel = styled.span`
  width: fit-content;
  min-height: 20px;
  font-style: normal;
  font-weight: ${variables.fontWeight.normal};
  font-size: ${variables.fontSize.h6};
  line-height: 20px;
  text-align: right;
  color: ${variables.colors.black_600};
  margin-left: 8px;
`;
export const ResultMessageText = styled.span`
  width: fit-content;
  min-height: 20px;
  font-style: normal;
  font-weight: ${variables.fontWeight.high};
  font-size: ${variables.fontSize.h6};
  line-height: 20px;
  text-align: right;
  color: ${variables.colors.black_500};
`;
export const ButtonsContainer = styled.div`
  width: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 52px;
`;
