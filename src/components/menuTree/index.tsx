import React, { useState, useEffect, useRef } from 'react';
import './components/fonts/fonts.css';
import {
  MenuTreeMainContainer,
  Container,
  UL,
  LI,
  ArrowIcon,
  RightSide,
  LeftSide,
  Description,
  NodeContainer,
  TagsContainer,
  TreeTitle,
  Icon,
  SPAN,
} from './style';
import CheckBox from './components/checkbox';
import Badge from './components/badge';
import MenuTreeSkeleton from './components/skeleton/menuTree';
import Header from './components/header';
import { ParentArrow } from './components/icons';
import highlighter from './components/helpers/highlighter';
import findCheckedItems from './components/helpers/findCheckedItems';
import USING_PROPERTY from './components/constants/usingProperty';

interface IMenuTree {
  data: any;
  leftSideWidget?: any;
  hasCheckBox?: boolean;
  loading: boolean;
  title: string;
  headerLess?: boolean;
  disabled?: boolean;
  onClick: (...params: any) => void;
  usingProperty?:
    | any
    | {
        id: string;
        parentId: string;
        title: string;
        tags: string;
        description: string;
        iconName: string;
        children: string;
        checked: string;
      };
}
const MenuTree = (props: IMenuTree) => {
  const {
    data,
    leftSideWidget,
    hasCheckBox = false,
    loading,
    title = 'unknown',
    headerLess,
    disabled = false,
    onClick,
    usingProperty = null,
  } = props;
  const nodeRef = useRef([]);
  const [menuItems, setMenuItems] = useState<[]>([]);
  const [hiddenIds, setHiddenIds] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchResult, setSearchResult] = useState<any>([]);
  const [selectedNode, setSelectedNode] = useState('');

  useEffect(() => {
    setMenuItems(JSON.parse(JSON.stringify(data)));
  }, [data]);

  const getProperty = (property: any) => {
    if (usingProperty && usingProperty[property]) {
      return usingProperty[property];
    }
    return USING_PROPERTY[property as keyof typeof USING_PROPERTY];
  };

  const toggle = (id: never) => {
    if (hiddenIds.indexOf(id) !== -1) {
      setHiddenIds(hiddenIds.filter((hiddenId) => hiddenId !== id));
    } else {
      setHiddenIds(hiddenIds.concat([id]));
    }
  };
  const checkboxClickHandler = (selectedId: any) => {
    toggleChecked(selectedId);
    if (onClick) {
      onClick(menuItems, findCheckedItems(menuItems, usingProperty));
    }
  };
  const toggleChecked = (selectedId: any, dataArray = menuItems, leafShouldBeChecked?: any) => {
    const result: any = dataArray.map((item: any) => {
      if (!selectedId) {
        item[getProperty('checked') as any] = leafShouldBeChecked;
        if (item[getProperty('children') as any].length) {
          toggleChecked(null, item[getProperty('children') as any], leafShouldBeChecked);
        }
      } else if (item[getProperty('id') as any] === selectedId) {
        item[getProperty('checked') as any] = item[getProperty('checked') as any] === 'FULL' ? 'NOT' : 'FULL';
        if (item[getProperty('parentId') as any]) {
          toggleHalfChecked(menuItems, item[getProperty('parentId') as any]);
        }
        if (item[getProperty('children') as any].length) {
          toggleChecked(null, item[getProperty('children') as any], item[getProperty('checked') as any]);
        }
      } else if (item[getProperty('children') as any].length) {
        toggleChecked(selectedId, item[getProperty('children') as any], null);
      }
      return item;
    });
    setMenuItems(result);
  };
  const toggleHalfChecked = (dataArray: any[] = menuItems, parentId: number) => {
    const result: any = dataArray.map((dataArrayItem) => {
      if (dataArrayItem[getProperty('id') as any] === parentId) {
        if (dataArrayItem[getProperty('children') as any].length) {
          let checkedCount = 0;
          let halfCheckedCount = 0;
          dataArrayItem[getProperty('children') as any].forEach((child: any) => {
            if (child[getProperty('checked') as any] === 'FULL') {
              checkedCount += 1;
            }
            if (child[getProperty('checked') as any] === 'HALF') {
              halfCheckedCount += 1;
            }
          });
          if (dataArrayItem[getProperty('children') as any].length === checkedCount) {
            dataArrayItem[getProperty('checked') as any] = 'FULL';
          } else {
            dataArrayItem[getProperty('checked') as any] = 'HALF';
          }
          if (!checkedCount && !halfCheckedCount && dataArrayItem[getProperty('checked') as any] === 'HALF') {
            dataArrayItem[getProperty('checked') as any] = 'NOT';
          }
          toggleHalfChecked(menuItems, dataArrayItem[getProperty('parentId') as any]);
        }
        if (
          dataArrayItem[getProperty('checked') as any] !== 'HALF' &&
          dataArrayItem[getProperty('checked') as any] &&
          parentId !== null
        ) {
          toggleHalfChecked(menuItems, dataArrayItem[getProperty('parentId') as any]);
        }
      }
      toggleHalfChecked(dataArrayItem[getProperty('children') as any], parentId);
    });
    setMenuItems(result);
  };
  const getHighlightedString = (id: never, string: string, type: string) => {
    switch (type) {
      case 'title':
        return (
          <SPAN
            dangerouslySetInnerHTML={{
              __html:
                searchResult.length && searchResult.indexOf(id) !== -1 ? highlighter(searchInputValue, string) : string,
            }}
          />
        );
      case 'description':
        return (
          <Description
            hasCheckBox={hasCheckBox}
            dangerouslySetInnerHTML={{
              __html:
                searchResult.length && searchResult.indexOf(id) !== -1 ? highlighter(searchInputValue, string) : string,
            }}
          />
        );
      case 'tag':
        return (
          <SPAN
            dangerouslySetInnerHTML={{
              __html:
                searchResult.length && searchResult.indexOf(id) !== -1 ? highlighter(searchInputValue, string) : string,
            }}
          />
        );
    }
  };
  const nodeClickHandler = (item: any) => {
    setSelectedNode((prevSelectedNode) => {
      if (prevSelectedNode !== item[getProperty('id') as any]) {
        onClick(item, item[getProperty('id') as any]);
        return item[getProperty('id') as any];
      } else {
        onClick(null, null);
        return '';
      }
    });
  };
  const menuEngine = (menuItems: []) => {
    return (
      <UL>
        {menuItems.map((item: never, index: number) => {
          const hasChildren =
            item[getProperty('children') as any] && (item[getProperty('children') as any] as any).length !== 0;
          const showChildren = !!(hasChildren && hiddenIds.indexOf(item[getProperty('id') as any]) === -1);
          const { children, ...exceptChildren }: any = item;
          return (
            <LI
              key={Math.random() * Number(item[getProperty('id') as any])}
              ref={(el: never) => (nodeRef.current[item[getProperty('id') as any]] = el)}
              // index={index}
            >
              <NodeContainer selectedNode={selectedNode === item[getProperty('id') as any]}>
                {hasChildren && (
                  <ArrowIcon onClick={() => toggle(item[getProperty('id') as any])} show={showChildren}>
                    <ParentArrow />
                  </ArrowIcon>
                )}
                <RightSide
                  hasCheckBox={hasCheckBox}
                  onClick={() => (!hasCheckBox && !disabled ? nodeClickHandler(item) : false)}
                >
                  {hasCheckBox && (
                    <CheckBox
                      size="sm"
                      checked={item[getProperty('checked') as any]}
                      onSelect={() => checkboxClickHandler(item[getProperty('id') as any])}
                      disabled={disabled}
                    >
                      <TreeTitle>
                        {item[getProperty('iconName') as any] && (
                          <Icon className={item[getProperty('iconName') as any]} />
                        )}
                        {getHighlightedString(
                          item[getProperty('id') as any],
                          item[getProperty('title') as any],
                          'title'
                        )}
                      </TreeTitle>
                    </CheckBox>
                  )}
                  {!hasCheckBox && (
                    <TreeTitle>
                      {item[getProperty('iconName') as any] && (
                        <Icon className={item[getProperty('iconName') as any]} />
                      )}
                      {getHighlightedString(item[getProperty('id') as any], item[getProperty('title') as any], 'title')}
                    </TreeTitle>
                  )}
                  {leftSideWidget &&
                    item[getProperty('tags') as any] &&
                    (item[getProperty('tags') as any] as []).length && (
                      <TagsContainer hasCheckBox={hasCheckBox}>
                        {(item[getProperty('tags') as any] as any)?.map((tag: any, index: number) => {
                          return (
                            <Badge key={Math.random() + index}>
                              {getHighlightedString(item[getProperty('id') as any], tag, 'tag')}
                            </Badge>
                          );
                        })}
                      </TagsContainer>
                    )}
                  {item[getProperty('description') as any] &&
                    getHighlightedString(
                      item[getProperty('id') as any],
                      item[getProperty('description') as any],
                      'description'
                    )}
                </RightSide>
                {!leftSideWidget &&
                  item[getProperty('tags') as any] &&
                  typeof item[getProperty('tags') as any] === 'object' &&
                  (item[getProperty('tags') as any] as any).length && (
                    <LeftSide>
                      {(item[getProperty('tags') as any] as any).map((tag: any, index: number) => {
                        return (
                          <Badge key={Math.random() + index}>
                            {getHighlightedString(item[getProperty('id') as any], tag, 'tag')}
                          </Badge>
                        );
                      })}
                    </LeftSide>
                  )}
                {!leftSideWidget &&
                  item[getProperty('tags') as any] &&
                  typeof item[getProperty('tags') as any] === 'string' && (
                    <LeftSide>
                      <Badge>
                        {getHighlightedString(item[getProperty('id') as any], item[getProperty('tags') as any], 'tag')}
                      </Badge>
                    </LeftSide>
                  )}
                {leftSideWidget && <LeftSide>{leftSideWidget(exceptChildren)}</LeftSide>}
              </NodeContainer>

              {showChildren && menuEngine(item[getProperty('children') as any])}
            </LI>
          );
        })}
      </UL>
    );
  };

  return (
    <div className={'scrollable'}>
      {!loading && (
        <Container>
          {!headerLess && (
            <Header
              usingProperty={usingProperty}
              nodeRef={nodeRef}
              setSearchInputValue={setSearchInputValue}
              setSearchResult={setSearchResult}
              title={title}
              hiddenIds={hiddenIds}
              searchInputValue={searchInputValue}
              searchResult={searchResult}
              data={data}
              setHiddenIds={setHiddenIds}
              setMenuItems={setMenuItems}
              menuItems={menuItems}
            />
          )}
          <MenuTreeMainContainer className={'scrollable'}>{menuEngine(menuItems)}</MenuTreeMainContainer>
        </Container>
      )}
      {loading && <MenuTreeSkeleton />}
    </div>
  );
};

export default MenuTree;
