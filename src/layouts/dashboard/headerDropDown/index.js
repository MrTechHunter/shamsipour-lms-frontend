import React from 'react';
import { Container } from './style';
import Notifications from './notifications';
import Settings from './settings';

const HeaderDropDown = () => {
  return (
    <Container>
      <Settings />
      <Notifications />
    </Container>
  );
};

export default HeaderDropDown;
