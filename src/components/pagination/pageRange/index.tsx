import React, { useState, useEffect, useRef } from 'react';
import {
  Container,
  MonitoringContainer,
  Text,
  DropdownContainer,
  DropdownIcon,
  DropdownList,
  Item,
  DropdownValue,
  DropdownValueWrapper,
} from './style';
import CloseArea from '../../../components/closeableArea';
import { useLocation } from 'react-router-dom';
import { useAddQueryToUrl } from '../../../hooks/useAddQueryToUrl';

interface IPageRange {
  currentPage: number;
  totalPage: number;
  pageRangeHandler: (page: number) => number;
  pageSize: number;
}

const PageRange = ({ currentPage, totalPage, pageRangeHandler, pageSize: passedPageSize }: IPageRange) => {
  const ref = useRef<any>();
  const { search } = useLocation();
  const { addQueryToUrl } = useAddQueryToUrl();
  const [showList, setShowList] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [hasSpace, setHasSpace] = useState<boolean>(true);
  useEffect(() => {
    if (!pageRangeHandler && passedPageSize) {
      const pageSize = new URLSearchParams(search).get('ps');
      setPageSize(Number(pageSize) || 10);
    } else {
      setPageSize(passedPageSize);
    }
  }, [search]);
  const clickHandler = (item: number) => {
    if (!pageRangeHandler) {
      addQueryToUrl(item, 'record');
    } else {
      pageRangeHandler(item);
    }
    setPageSize(item);
    setShowList(false);
  };
  return (
    <Container>
      <MonitoringContainer>
        <Text>نمایش صفحه</Text>
        <Text>{(currentPage || 0) + 1}</Text>
        <Text>از</Text>
        <Text>{totalPage}</Text>
      </MonitoringContainer>

      <DropdownContainer ref={ref}>
        <DropdownValueWrapper
          onClick={() => {
            const element = ref.current;
            const space = window.innerHeight - element.offsetTop + (element.offsetHeight + 128);
            if (space < 310) {
              setHasSpace(false);
            } else {
              setHasSpace(true);
            }
            setShowList(!showList);
          }}
        >
          <DropdownValue>{pageSize}</DropdownValue>
          <DropdownIcon className="pag-bottom" />
        </DropdownValueWrapper>
        {showList && (
          <>
            <CloseArea onClick={() => setShowList(false)} />
            <DropdownList location={hasSpace}>
              {[10, 20, 50, 100].map((item) => (
                <Item selected={pageSize === item} key={item} onClick={() => clickHandler(item)}>
                  {item}
                </Item>
              ))}
            </DropdownList>
          </>
        )}
      </DropdownContainer>
    </Container>
  );
};

export default PageRange;
