import React, { useEffect, useState } from 'react';
import {
  ButtonContainer,
  Input,
  InputWrapper,
  IconWrapper,
  Title,
  HeaderContainer,
  SearchResultContainer,
  ResultMessage,
  ButtonsContainer,
  ResultMessageLabel,
  ResultMessageText,
} from './style';
import { Close, Collapse, Down, Expand, Search, Up } from '../icons';
import scrollIntoView from 'scroll-into-view';
import USING_PROPERTY from '../constants/usingProperty';

const scrollIntoViewSetting = {
  time: 500,
  align: {
    top: 0,
    right: 0,
    topOffset: 0,
    leftOffset: 0,
    lockX: true,
    lockY: false,
  },
  validTarget: function (target: any) {
    return target !== window && target.matches('.scrollable');
  },
  isScrollable: function (target: any, defaultIsScrollable: any) {
    return defaultIsScrollable(target) || (target !== window && ~target.className.indexOf('scrollable'));
  },
  debug: false,
};

interface IHeader {
  nodeRef: any;
  hiddenIds: string[];
  searchInputValue: string;
  title: string;
  searchResult: string;
  data: string;
  setHiddenIds: any;
  setMenuItems: React.Dispatch<React.SetStateAction<[]>>;
  setSearchInputValue: React.Dispatch<React.SetStateAction<any>>;
  menuItems: any;
  setSearchResult: (value: any) => void;
  usingProperty: any;
}

const Header = (props: IHeader) => {
  const {
    nodeRef,
    hiddenIds,
    searchInputValue,
    title,
    searchResult,
    data,
    setHiddenIds,
    setMenuItems,
    setSearchInputValue,
    menuItems,
    setSearchResult,
    usingProperty,
  } = props;
  const [showSearchBox, toggleShowSearchBox] = useState(false);
  const [searchItemCounter, setSearchItemCounter] = useState(0);
  useEffect(() => {
    if (searchResult.length) {
      scrollIntoView(nodeRef.current[searchResult[0]], scrollIntoViewSetting);
    } else {
      scrollIntoView(nodeRef.current[menuItems[0]?.id], scrollIntoViewSetting);
    }
  }, [searchResult, showSearchBox]);
  const searchedItemClickHandler = (state: any) => {
    if (hiddenIds.length) {
      setHiddenIds([]);
    }
    if (searchResult.length) {
      if (state === 'down') {
        if (searchItemCounter >= searchResult.length - 1) {
          scrollIntoView(nodeRef.current[searchResult[0]], scrollIntoViewSetting);

          setSearchItemCounter(0);
        } else {
          scrollIntoView(nodeRef.current[searchResult[searchItemCounter + 1]], scrollIntoViewSetting);

          setSearchItemCounter(searchItemCounter + 1);
        }
      }
      if (state === 'up') {
        if (searchItemCounter <= 0) {
          scrollIntoView(nodeRef.current[searchResult[searchResult.length - 1]], scrollIntoViewSetting);

          setSearchItemCounter(searchResult.length - 1);
        } else {
          scrollIntoView(nodeRef.current[searchResult[searchItemCounter - 1]], scrollIntoViewSetting);

          setSearchItemCounter(searchItemCounter - 1);
        }
      }
    }
    return false;
  };
  const closeAllNodes = () => {
    const ids: number[] = [];
    const finder = (data: any) => {
      if (data) {
        data.forEach((item: any) => {
          ids.push(item[getProperty('id')]);
          finder(item[getProperty('children')]);
        });
      }
    };
    finder(JSON.parse(JSON.stringify(data)));
    setHiddenIds(ids);
  };
  const openAllNodes = () => {
    setHiddenIds([]);
  };
  const resetChangeHandler = () => {
    setSearchResult([]);
    setSearchInputValue([]);
    toggleShowSearchBox(!showSearchBox);
    setMenuItems(JSON.parse(JSON.stringify(data)));
  };
  const getProperty = (property: any) => {
    if (usingProperty && usingProperty[property]) {
      return usingProperty[property];
    }
    return USING_PROPERTY[property as keyof typeof USING_PROPERTY];
  };
  const searchChangeHandler = (e: any) => {
    let keyword = e.target.value.replace(/\\/g, '\\\\');
    //eslint-disable-next-line
    keyword = keyword.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '');
    setSearchInputValue(keyword);
    const finder = (data: any) => {
      data.forEach((item: any) => {
        const regex = new RegExp(keyword, 'g');
        if (keyword) {
          if (
            (item[getProperty('title')] && item[getProperty('title')].toString().match(regex)) ||
            (item[getProperty('description')] && item[getProperty('description')].toString().match(regex)) ||
            (item[getProperty('tags')] && item[getProperty('tags')].toString().match(regex))
          ) {
            if (searchResult.indexOf(item[getProperty('id')]) === -1) {
              setHiddenIds((prevHiddenIds: []) => prevHiddenIds.filter((id: number) => id !== item[getProperty('id')]));
              setSearchResult((prevSearchResult: []) => [...prevSearchResult, item[getProperty('id')]]);
            }
          } else {
            setSearchResult((prevSearchResult: []) =>
              prevSearchResult.filter((id: number) => id !== item[getProperty('id')])
            );
          }
        } else {
          setSearchResult([]);
        }
        if (item[getProperty('children')].length) {
          finder(item[getProperty('children')]);
        }
      });
    };
    finder(menuItems);
  };
  return (
    <>
      <HeaderContainer>
        <ButtonContainer>
          {hiddenIds.length !== 0 ? (
            <IconWrapper onClick={openAllNodes} title={'بازکردن همه'}>
              <Collapse />
            </IconWrapper>
          ) : (
            <IconWrapper onClick={closeAllNodes} title={'بستن همه'}>
              <Expand />
            </IconWrapper>
          )}
          <InputWrapper showSearchBox={showSearchBox}>
            <IconWrapper
              closeIcon={showSearchBox}
              onClick={
                showSearchBox
                  ? resetChangeHandler
                  : () => {
                      toggleShowSearchBox(!showSearchBox);
                    }
              }
              title="بازنشانی"
            >
              <IconWrapper>{showSearchBox ? <Close /> : <Search />}</IconWrapper>
            </IconWrapper>
            <Input showSearchBox={showSearchBox} type="text" onChange={searchChangeHandler} value={searchInputValue} />
          </InputWrapper>
        </ButtonContainer>
        {title && <Title>{title}</Title>}
      </HeaderContainer>
      {!!searchResult?.length && (
        <SearchResultContainer>
          <ButtonsContainer>
            <IconWrapper onClick={() => searchedItemClickHandler('up')}>
              <Up />
            </IconWrapper>
            <IconWrapper onClick={() => searchedItemClickHandler('down')}>
              <Down />
            </IconWrapper>
          </ButtonsContainer>
          <ResultMessage>
            <ResultMessageLabel>تعداد نتایج:</ResultMessageLabel>
            <ResultMessageText>{`${searchItemCounter + 1}/${searchResult?.length}`}</ResultMessageText>
            <ResultMessageText>نتیجه</ResultMessageText>
          </ResultMessage>
        </SearchResultContainer>
      )}
    </>
  );
};

export default Header;
