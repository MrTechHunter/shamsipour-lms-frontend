import styled from 'styled-components';

export const Item = styled.div`
  width: ${() => Math.floor(Math.random() * (104 - 35 + 1) + 35) + 'px'};
  background: rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  height: 20px;
  position: relative;
  overflow-x: hidden;
`;
