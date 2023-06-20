import styled from "styled-components";
import variables from "../constants/styleVariables";

export const Container = styled.div`
  min-width: 33px;
  min-height: 16px;
  width: fit-content;
  height: fit-content;
  background: ${variables.colors.white_50};
  box-shadow: 0 0 2px ${variables.colors.black_901};
  border-radius: 4px;
  font-size: 8px;
  font-weight: 400;
  line-height: 12px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 4px;
  margin-left: 4px;
  margin-bottom: 4px;
  color: ${variables.colors.gray_600};
`;
