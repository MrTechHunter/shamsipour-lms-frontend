import React, { useState, useEffect } from 'react';
import {
  MenuTreeWrapper,
  LabelIcon,
  TreeMenuTitle,
  MenuTreeMainContainer,
  Header,
  Title,
  ButtonContainer,
  InputWrapper,
  Input,
  Icon,
  SearchIcon,
  Container,
} from './style';
// import MenuTreeIcons from '../../constants/menuTreeIcons';
import highlighter from './helpers/highlighter';
import Checkbox from '../../components/checkbox';
import MenuTreeSkeleton from '../../components/skeleton/menuTree';

const MenuTree = (props: any) => {
  const {
    data,
    leftSideWidget,
    fontColor,
    hasItemIcon,
    onChange,
    disabled = false,
    hasCheckedBox = false,
    onClick,
    highlightItemId,
    title = '',
    loading,
  } = props;
  const [menuItems, setMenuItems] = useState([]);
  const [hiddenIds, setHiddenIds] = useState<any>([]);
  const [searchValue, setSearchValue] = useState('');
  const [parentIds, setParentIds] = useState([]);
  const [showSearchBox, toggleShowSearchBox] = useState(false);
  useEffect(() => {
    setMenuItems(data);
    setSearchValue('');
    toggleShowSearchBox(false);
  }, [data]);
  const toggle = (id: any) => {
    if (hiddenIds.indexOf(id) !== -1) {
      setHiddenIds(hiddenIds.filter((hiddenId: any) => hiddenId !== id));
    } else {
      setHiddenIds(hiddenIds.concat([id]));
    }
  };
  const onChangeHandler = (id: any, status: any) => {
    const items = JSON.parse(JSON.stringify(menuItems));
    const originItems = data;
    const modifiedResult = toggleCheckbox(items, id, status);
    const originResult = toggleCheckbox(originItems, id, status);
    setMenuItems(modifiedResult);
    onChange(originResult);
  };
  const searchChangeHandler = (e: any) => {
    let keyword = e.target.value.replace(/\\/g, '\\\\');
    /* eslint-disable no-useless-escape */
    keyword = keyword.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '');
    setSearchValue(keyword);
    const matches: any = [];
    const finder = (data: any) => {
      if (data) {
        data.forEach((item: any) => {
          const regex = new RegExp(keyword, 'g');
          item.title = item.title.split('<b class="title-tag">').join('');
          item.title = item.title.split('</b>').join('');
          if (item.title.toString().match(regex)) {
            item.title = highlighter(keyword, item.title, 'title');
            matches.push(item);
          }
          finder(item.children);
        });
      }
      if (matches) {
        setMenuItems(matches);
      }
    };
    finder(JSON.parse(JSON.stringify(data)));
    if (!keyword) {
      setMenuItems(JSON.parse(JSON.stringify(data)));
    }
  };
  const resetChangeHandler = () => {
    toggleShowSearchBox(!showSearchBox);
    setMenuItems(data);
    setSearchValue('');
  };
  let IDs: any = parentIds;
  const toggleCheckbox = (array: any, id: any, status: any) => {
    setSearchValue('');
    toggleShowSearchBox(false);
    if (array) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].id === id) {
          array[i].checked = !status;
          array[i].parentChecked = !status;
          if (array[i].checked && !IDs.find((item: any) => item.id === array[i].id)) {
            IDs.push({ id: array[i].id, parentId: array[i].parentId });
          }
          if (!array[i].checked && IDs.find((item: any) => item.id === array[i].id)) {
            IDs = IDs.filter((item: any) => item.id !== array[i].id);
          }
          if (array[i].children && array[i].children.length !== 0) {
            for (let j = 0; j < array[i].children.length; j++) {
              toggleCheckbox(array[i].children, array[i].children[j].id, status);
            }
          }
        } else {
          toggleCheckbox(array[i].children, id, status);
        }
      }
    }
    setParentIds(IDs);
    return array;
  };
  const clickHandler = (item: any) => {
    onClick({
      ...item,
      title: item.title.split('<b class="title-tag">').join('').split('</b>').join(''),
      active: item.active ? 'active' : 'deactive',
      publicMenu: item.publicMenu ? 'public' : 'private',
      parentId: item.parentId ? item.parentId : '',
    });
  };
  const closeAll = () => {
    if (hiddenIds.length === 0) {
      const ids: any = [];
      const finder = (data: any) => {
        if (data) {
          data.forEach((item: any) => {
            ids.push(item.id);
            finder(item.children);
          });
        }
      };
      finder(JSON.parse(JSON.stringify(data)));
      setHiddenIds(ids);
    } else {
      setHiddenIds([]);
    }
  };
  const menuEngine = (menuItems: any) => {
    return (
      <MenuTreeWrapper>
        <ul className="tree-menu-ul">
          {menuItems.map((item: any, index: any) => {
            const status = item.children && item.children.length !== 0 && hiddenIds.indexOf(item.id) === -1;
            const hasChildren = item.children && item.children.length !== 0;
            const parentChecked = !!parentIds.find((parentItems: any) => parentItems.parentId === item.id);
            const { children, ...exceptChildren } = item;
            return (
              <React.Fragment key={item.id}>
                {hasChildren && index === 0 && <span className="vertical-line-of-first-node" />}
                <li className="tree-menu-li">
                  <div className="right-side">
                    {hasChildren && (
                      <>
                        <i
                          onClick={() => toggle(item.id)}
                          className={`arrow-icon g-triangle-left ${status ? 'show' : 'hide'}`}
                        />
                        <span className="horizontal-line" />
                      </>
                    )}
                    {!hasChildren && (
                      <>
                        <span className="horizontal-line-leaves" />
                      </>
                    )}
                    {hasCheckedBox && (
                      <Checkbox
                        className="tree-menu-checkbox"
                        checked={item.checked}
                        parentChecked={parentChecked}
                        disabled={disabled}
                        onSelect={() => (onChange ? onChangeHandler(item.id, item.checked) : false)}
                      />
                    )}
                    {/* {hasItemIcon && (
                      <LabelIcon
                        className={`sitemap-icon ${(item.type && MenuTreeIcons[item.type].icon) || 'ri-node-tree'}`}
                        iconColor={(item.type && MenuTreeIcons[item.type].color) || ''}
                      />
                    )} */}
                    <TreeMenuTitle
                      title={item.description || item.title}
                      fontColor={fontColor}
                      onClick={() => (onClick ? clickHandler(item) : false)}
                      highlight={Number(highlightItemId) === Number(item.id)}
                    >
                      <span dangerouslySetInnerHTML={{ __html: item.title }} />
                      {searchValue !== '' && (
                        <div>
                          <small className="menu-tree-item-address">
                            {item.description ? item.description.split(':').join('>') : 'آدرسی برای این آیتم پیدا نشد!'}
                          </small>
                        </div>
                      )}
                    </TreeMenuTitle>
                  </div>
                  {leftSideWidget && <div className="left-side">{leftSideWidget(exceptChildren)}</div>}
                </li>
                {status && menuEngine(item.children)}
              </React.Fragment>
            );
          })}
        </ul>
      </MenuTreeWrapper>
    );
  };
  return (
    <>
      {!loading && (
        <Container>
          {data.length !== 0 && (
            <Header>
              {title && <Title>{title}</Title>}
              <ButtonContainer>
                <InputWrapper showSearchBox={showSearchBox}>
                  <Input showSearchBox={showSearchBox} type="text" onChange={searchChangeHandler} value={searchValue} />
                  <SearchIcon
                    closeIcon={showSearchBox}
                    className={showSearchBox ? 'g-times-square' : 'g-search-fill'}
                    onClick={showSearchBox ? resetChangeHandler : () => toggleShowSearchBox(!showSearchBox)}
                    title="بازنشانی"
                  />
                </InputWrapper>
                <Icon
                  onClick={closeAll}
                  className={`pointer ${hiddenIds.length === 0 ? 'g-collapse' : 'g-expand'}`}
                  title={hiddenIds.length !== 0 ? 'بازکردن همه' : 'بستن همه'}
                />
              </ButtonContainer>
            </Header>
          )}
          <MenuTreeMainContainer>{menuEngine(menuItems)}</MenuTreeMainContainer>
        </Container>
      )}
      {loading && <MenuTreeSkeleton />}
    </>
  );
};

export default MenuTree;
