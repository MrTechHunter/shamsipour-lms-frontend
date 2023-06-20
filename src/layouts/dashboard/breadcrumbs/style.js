import styled from 'styled-components';
import variables from '../../../constants/styleVariables';

export const Container = styled.div`
  div.breadcrumbs-item {
    width: fit-content;
    position: relative;
    &:before {
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: ${variables.colors.black_60};
      content: ' ';
      position: absolute;
      right: -4px;
      top: calc(50% - 2px);
    }
    &:first-child {
      margin-right: 4px;
    }
    padding-right: 4px;
    margin-right: 12px;
  }
  div.items-container {
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    display: flex;
    height: 62px;
    width: fit-content;
  }
  a.breadcrumbs-link {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    width: fit-content;
  }
  height: 62px;
  min-height: 62px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${variables.colors.surface};
  width: 100%;
  padding-right: 64px;
  padding-left: 64px;
  margin: 0 auto;
  color: ${variables.colors.black_60};
  @media only screen and (max-width: 1023px) {
    justify-content: flex-start;
    align-items: flex-start;
    div.items-container {
      justify-content: space-around;
      padding-top: 4px;
      padding-bottom: 4px;
    }
  }
  @media only screen and (max-width: 1030px) {
    padding-right: 20px;
    padding-left: 20px;
  }
  div.description-container {
    height: 62px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const PageTitleContainer = styled.div`
  border-right: 1px solid ${variables.colors.black_38};
  height: 30px;
  margin-right: 12px;
  padding-right: 12px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  @media only screen and (max-width: 1023px) {
    border-right: 1px solid ${variables.colors.black_38};
    padding-right: 12px;
    margin-right: 12px;
  }
`;
