import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarContainer, Menu, Ul, Li, ItemIcon, ItemText, CloseableAreaWrapper } from './style';
import SidebarSkeleton from './skeleton';
// import { useGetSidebarMenuMutation } from '../../../redux/services/menuApi';
import useWindowSize from '../../../helpers/useWindowSize';

interface IData {
  id: number;
  parentId: number | null;
  to: string;
  name: string;
  key: string;
  _children: IData[] | null;
  _tag: string;
  badge: {
    color: string | null;
    text: string | null;
  };
  icon: string;
  sort: number;
  enable: boolean | null;
  warning: boolean | null;
  warningMessage: string | null;
  notificationCount: number | null;
}

const Sidebar = () => {
  const { pathname } = useLocation();
  const [width] = useWindowSize();
  // const [getSidebarMenu, { data, isLoading }] = useGetSidebarMenuMutation();
  // useEffect(() => {
  //   getSidebarMenu('WEB_MAIN');
  // }, []);
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
  const menuEngine = (data: IData[], level: number | undefined = 1) => {
    const leaf = level !== 1;
    return (
      <Ul leaf={leaf} level={level}>
        {data.map((item) => {
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
                  <i className={`item-icon ${'me-Filter'}`} />
                  <span className="item-text">{item.name}</span>
                </ItemText>
              </Link>
              {hasChildren && (
                <ItemIcon
                  onClick={() => dropDownClickHandler(item.parentId, item.id, level)}
                  active={active}
                  showSubMenu={showSubMenu}
                  className="me-Caret-down"
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
      {/* {!isLoading && data && <Menu>{menuEngine(data)}</Menu>}
      {isLoading && <SidebarSkeleton />} */}
    </SidebarContainer>
  );
};

export default React.memo(Sidebar);
