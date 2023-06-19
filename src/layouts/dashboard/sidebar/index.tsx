import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarContainer, Menu, Ul, Li, ItemText } from './style';
import SidebarSkeleton from './skeleton';
import mockData from './mockData';

interface IData {
  id: number;
  parentId: number | null;
  to: string;
  name: string;
  key: string;
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
  const [showMenu, setShowMenu] = useState<number[] | any>([]);
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

          return (
            <Li key={item.key} leaf={leaf} active={active} showSubMenu={showSubMenu}>
              <Link
                className="menu-item"
                to={item.to}
                onClick={() => {
                  setShowMenu([]);
                }}
              >
                <ItemText leaf={leaf} active={active} showSubMenu={showSubMenu}>
                  <i className={`item-icon ${item.icon}`} />
                  <span className="item-text">{item.name}</span>
                </ItemText>
              </Link>
            </Li>
          );
        })}
      </Ul>
    );
  };
  return (
    <SidebarContainer>
      {mockData && <Menu>{menuEngine(mockData)}</Menu>}
      {false && <SidebarSkeleton />}
    </SidebarContainer>
  );
};

export default React.memo(Sidebar);
