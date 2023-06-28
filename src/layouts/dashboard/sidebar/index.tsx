import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarContainer, Menu, Ul, Li, ItemText, CloseableAreaWrapper, ItemIcon } from './style';
import SidebarSkeleton from './skeleton';
import { teacherMenu, adminMenu, studentMenu } from '../../../constants/menuData';
import { getLocalStorage } from '../../../helpers/storage';
import useWindowSize from '../../../helpers/useWindowSize';

const Sidebar = () => {
  const { pathname } = useLocation();
  const [width] = useWindowSize();
  const [showMenu, setShowMenu] = useState<number[] | any>([]);
  const dropDownClickHandler = (parentId: number | null, id: number, level: number) => {
    if (level > 1) {
      if (showMenu.indexOf(id) === -1) {
        setShowMenu([...showMenu, id]);
      } else {
        setShowMenu(showMenu.filter((showMenuId: number) => showMenuId !== id && showMenuId !== null));
      }
    } else {
      if (showMenu.indexOf(id) === -1) {
        setShowMenu([id, parentId]);
      } else {
        setShowMenu([]);
      }
    }
  };
  const menuEngine = (data: any, level: number | undefined = 1) => {
    const leaf = level !== 1;
    return (
      <Ul leaf={leaf} level={level}>
        {data.map((item: any) => {
          const showSubMenu = showMenu.indexOf(item.id) !== -1;
          const active = pathname === item.to;
          if (showMenu.length === 0 && active && !showSubMenu) {
            setShowMenu([item.id, item.parentId]);
          }
          const hasChildren = item['_children'] !== null;

          return (
            <Li key={item.key} leaf={leaf} active={active} showSubMenu={showSubMenu}>
              <Link
                className="menu-item"
                to={hasChildren ? '#' : item.to}
                onClick={() => {
                  hasChildren ? dropDownClickHandler(item.parentId, item.id, level) : setShowMenu([]);
                }}
              >
                <ItemText leaf={leaf} active={active} showSubMenu={showSubMenu}>
                  <i className={`item-icon ${item.icon}`} />
                  <span className="item-text">{item.name}</span>
                </ItemText>
              </Link>
              {hasChildren && (
                <ItemIcon
                  onClick={() => dropDownClickHandler(item.parentId, item.id, level)}
                  active={active}
                  showSubMenu={showSubMenu}
                  className="lms-Caret-down"
                  level={level}
                />
              )}
              {showSubMenu && item._children && item._children.length !== 0 && (
                <>
                  <CloseableAreaWrapper
                    show={showMenu && level <= 1 && width < 1024}
                    onClick={(e) => {
                      e.preventDefault();
                      return setShowMenu([]);
                    }}
                  />

                  {menuEngine(item._children, level + 1)}
                </>
              )}
            </Li>
          );
        })}
      </Ul>
    );
  };
  return (
    <SidebarContainer>
      {getLocalStorage('userInfo').role === 'Teacher' && <Menu>{menuEngine(teacherMenu)}</Menu>}
      {getLocalStorage('userInfo').role === 'Admin' && <Menu>{menuEngine(adminMenu)}</Menu>}
      {getLocalStorage('userInfo').role === 'Student' && <Menu>{menuEngine(studentMenu)}</Menu>}
      {false && <SidebarSkeleton />}
    </SidebarContainer>
  );
};

export default React.memo(Sidebar);
