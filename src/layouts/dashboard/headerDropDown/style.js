import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  left: 32px;
  @media only screen and (max-width: 1024px) {
    left: 16px;
  }
`;
