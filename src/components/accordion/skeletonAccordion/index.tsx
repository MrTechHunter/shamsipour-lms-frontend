import React from 'react';
import {
  Container,
  Date,
  Header,
  HeaderTitle,
  Icon,
  Item,
  Message,
  Text,
  Title,
  MessageContainer,
  NotificationIcon,
  NotificationTitle,
} from './style';
import Shimmer from './shimmer';

const AccordionSkeleton = ({ notification, array = Array }: any) => {
  return (
    <Container>
      <Shimmer />
      {!notification && (
        <Header>
          <HeaderTitle />
        </Header>
      )}
      <MessageContainer className={'no-select'}>
        {array.map((item: number) => {
          return (
            <Item notification key={item}>
              {notification && <NotificationIcon />}
              {!notification && <Icon />}
              {notification && <NotificationTitle />}
              <Message notification>
                {!notification && <Title />}
                <Text notification />
              </Message>
              <Date notification />
            </Item>
          );
        })}
      </MessageContainer>
    </Container>
  );
};

export default AccordionSkeleton;

const Array = [1, 2, 3];
