import React, { useState, useEffect } from 'react';
import { Container, Icon, Badge, Menu, MenuHeader, HeaderTitle, MenuContent, AllMessagesLink } from './style';
import CloseableArea from '../../../../components/closeableArea';
// import Accordion from '../../../../components/accordion';
// import { connect } from 'react-redux';
// import { MessageAction, UserAction } from '../../../../../actions';
// import { providerTypes } from '../../../../constants/messagesControllerTypes';
import { Link } from 'react-router-dom';

const Notifications = (props) => {
  // const {
  //   getUserMessagesCountData,
  //   getUserMessagesCountLoading,
  //   getUserMessagesByFilterData,
  //   getUserMessagesByFilterLoading,
  //   getUserMessagesCount,
  //   getUserMessagesByFilter,
  //   getUserInfoFailure,
  // } = props;
  const [menu, toggleMenu] = useState(false);
  // useEffect(() => {
  //   getUserMessagesCount(false);
  //   getUserMessagesByFilter({ page: 1, messageProviderType: providerTypes.NOTIFICATION });
  //   return () => getUserInfoFailure();
  // }, []);
  return (
    <Container>
      <Icon onClick={() => toggleMenu(!menu)} className="lms-Chat" title={'پیام‌ها'}>
        {/*{!getUserMessagesCountLoading && !!getUserMessagesCountData && <Badge>{getUserMessagesCountData}</Badge>}*/}
      </Icon>
      {menu && (
        <>
          <CloseableArea onClick={() => toggleMenu(!menu)} />
          <Menu>
            {/*<MenuHeader>*/}
            {/*  <HeaderTitle>پیام‌های شما</HeaderTitle>*/}
            {/*  <Icon className="g-envelope" />*/}
            {/*</MenuHeader>*/}
            <MenuContent>
              {/*<Accordion*/}
              {/*  notification*/}
              {/*  loading={getUserMessagesByFilterLoading}*/}
              {/*  data={getUserMessagesByFilterData?.collection}*/}
              {/*/>*/}
            </MenuContent>
            {/*<AllMessagesLink>*/}
            {/*  <Link className={'see-all-messages-link'} to={'/messages'}>*/}
            {/*    مشاهده همه پیام‌ها*/}
            {/*  </Link>*/}
            {/*</AllMessagesLink>*/}
          </Menu>
        </>
      )}
    </Container>
  );
};

// const mapStateToProps = (store) => {
//   return {
//     getUserMessagesCountData: store.Message.getUserMessagesCount.data,
//     getUserMessagesCountLoading: store.Message.getUserMessagesCount.loading,
//     getUserMessagesByFilterData: store.Message.getUserMessagesByFilter.data,
//     getUserMessagesByFilterLoading: store.Message.getUserMessagesByFilter.loading,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     getUserMessagesCount: (isRead) => dispatch(MessageAction.getUserMessagesCount(isRead)),
//     getUserMessagesByFilter: (filters) => dispatch(MessageAction.getUserMessagesByFilter(filters)),
//     getUserInfoFailure: () => dispatch(UserAction.getUserInfoFailure()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
export default Notifications;
