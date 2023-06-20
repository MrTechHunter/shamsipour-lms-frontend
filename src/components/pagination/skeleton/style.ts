import styled from 'styled-components';
import variables from '../../../constants/styleVariables';

export const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 252px;
  width: fit-content;
  height: 24px;
  position: relative;
  overflow-x: hidden;
`;
export const Next = styled.div`
  width: 62px;
  height: 24px;
  background: ${variables.colors.black_850};
  border-radius: 4px 0 0 4px;
`;
export const Prev = styled.div`
  width: 62px;
  height: 24px;
  background: ${variables.colors.black_850};
  border-radius: 0 4px 4px 0;
`;
export const Page = styled.div`
  width: 24px;
  height: 24px;
  background: ${variables.colors.black_850};
  border-radius: 50%;
`;
