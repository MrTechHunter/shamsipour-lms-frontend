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
import { clearLocalStorage, getLocalStorage } from '../../../helpers/storage';
import { useLocation, Link } from 'react-router-dom';
import ProfileSkeleton from '../../../components/skeleton/profile';

const Profile = () => {
  const { pathname } = useLocation();
  const [menu, toggleMenu] = useState(false);
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
            <Username>{getLocalStorage('userInfo').userName}</Username>
            <Role>{getLocalStorage('userInfo').role === 'Student' && 'دانشجو'}</Role>
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
                  <Username isOpen={menu}>{getLocalStorage('userInfo').userName}</Username>
                  <Role isOpen={menu}>{getLocalStorage('userInfo').role === 'Student' && 'دانشجو'}</Role>
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
