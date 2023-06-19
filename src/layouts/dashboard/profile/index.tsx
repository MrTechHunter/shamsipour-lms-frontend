import React, { useState, useEffect } from 'react';
import {
  Avatar,
  Role,
  User,
  Username,
  Container,
  Menu,
  MenuContent,
  MenuHeader,
  UserProfile,
  MenuItem,
  MenuFooter,
  SubMenu,
  MenuIcon,
  SubMenuItem,
} from './style';
import CloseableArea from '../../../components/closeableArea';
import { clearLocalStorage } from '../../../helpers/storage';
import { useLocation, Link } from 'react-router-dom';
import ProfileSkeleton from '../../../components/skeleton/profile';
// import { useGetProfileMenuMutation } from '../../../redux/services/menuApi';
// import {
//   useChangeRoleApiMutation,
//   useGetRolesApiMutation,
//   useUserInfoApiQuery,
// } from '../../../redux/services/userProfile';
import { toast } from 'react-toastify';

const Profile = () => {
  const { pathname } = useLocation();
  const [menu, toggleMenu] = useState(false);
  // const [getProfileMenu, { data }] = useGetProfileMenuMutation();
  // const { currentData: userInfo, isFetching: isLoading } = useUserInfoApiQuery();
  // const [getRoles, { data: roles, isLoading: getRoleLoading }] = useGetRolesApiMutation();
  // const [changeRole] = useChangeRoleApiMutation();
  const [isHovered, setIsHovered] = useState(false);
  // useEffect(() => {
  //   getProfileMenu('WEB_USER');
  //   getRoles();
  // }, []);
  useEffect(() => {
    toggleMenu(false);
  }, [window.location.href]);

  const handleLogOut = () => {
    clearLocalStorage();
    window.location.href = '/login';
  };

  const isLoading = false;
  const getRoleLoading = false;
  return (
    <Container>
      {!isLoading && !getRoleLoading && (
        <UserProfile onClick={() => toggleMenu(!menu)} title={'حساب کاربری'}>
          <Avatar className="me-user" />
          <User>
            {/* <Username>{userInfo?.firstName + ' ' + userInfo?.lastName}</Username>
            <Role>{`${userInfo?.roleTitle || ''} (${userInfo?.organizationTitle || ''})`}</Role> */}
          </User>
        </UserProfile>
      )}
      {isLoading && <ProfileSkeleton />}
      {menu && (
        <>
          <CloseableArea onClick={() => toggleMenu(!menu)} />
          <Menu>
            <MenuHeader>
              <UserProfile onClick={() => toggleMenu(!menu)} title={'حساب کاربری'}>
                <Avatar className="me-user" />
                <User>
                  {/* <Username isOpen={menu}>{userInfo?.firstName + ' ' + userInfo?.lastName}</Username>
                  <Role isOpen={menu}>{`${userInfo?.roleTitle || ''} (${userInfo?.organizationTitle || ''})`}</Role> */}
                </User>
              </UserProfile>
            </MenuHeader>
            <MenuContent></MenuContent>
            <MenuFooter>
              <MenuItem onClick={handleLogOut}>
                <div className="profile-menu-items">خروج</div>
              </MenuItem>
            </MenuFooter>
          </Menu>
        </>
      )}
    </Container>
  );
};

export default Profile;
