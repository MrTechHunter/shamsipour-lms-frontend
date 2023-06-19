import React, { useState, useEffect } from 'react';
import Tag from '../../tag';
import { CONFIGURATION_TYPES, ACTIVATION } from '../../../constants/dropDownOptions';
import { useAddQueryToUrl } from '../../../hooks/useAddQueryToUrl';
import { timeStampToString } from '../../../helpers/dateFormatter';
import { useNavigate, useLocation } from 'react-router';
// import initialValues from '../../../container/channels/filterInitialValues';

interface I_Filter {
  [key: string]: any;
}
interface I_Tags {
  filters: I_Filter;
  setFilters: any;
}
const Tags = ({ filters, setFilters }: I_Tags) => {
  const [tags, setTags] = useState<any>({});
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { addQueryToUrl } = useAddQueryToUrl();
  useEffect(() => {
    const _configurationType = filters.configurationType
      ? CONFIGURATION_TYPES.find((item: { label: string; value: string }) => item.value === filters.configurationType)
          ?.label
      : '';
    const _active = filters.status
      ? ACTIVATION.find((item: { label: string; value: string }) => item.value === filters.status)?.label
      : '';
    setTags({
      ...filters,
      configurationType: _configurationType,
      status: _active,
      startDate: timeStampToString(filters.startDate),
      endDate: timeStampToString(filters.endDate),
    });
  }, [filters]);
  const tagDeleteHandler = (item: any) => {
    delete tags[item];
    setTags({ ...tags });
    delete filters[item];
    if (item === 'contractCode') {
      setFilters({ ...filters, contractCode: '' });
    } else {
      setFilters({ ...filters });
    }
    addQueryToUrl(item === 'page' ? 'p' : item === 'pageSize' ? 'ps' : item, 'remove');
  };

  const deleteAllTagsHandler = () => {
    // setFilters({ ...initialValues });
    navigate(`${pathname}`);
  };
  const removePropertyFromFilters = () => {
    const filtered = { ...filters };
    delete filtered.page;
    delete filtered.pageSize;
    if (filtered.contractCode === '') delete filtered.contractCode;
    return Object.keys(filtered);
  };
  return (
    <>
      {removePropertyFromFilters().length !== 0 && (
        <>
          <div className="text-xs font-normal text-black_87 ml-3 w-28 text-right ">فیلتر های اعمال شده:</div>
          <div className="min-h-9 w-[calc(100%_-_8.5rem)] flex justify-between flex-wrap">
            <div className="min-h-9 w-[calc(100%_-_8.5rem)] flex justify-start flex-wrap">
              {Object.keys(tags).map((item?: any, key?: number) => {
                if (tags[item] && item !== 'page' && item !== 'pageSize') {
                  return (
                    <Tag key={key} onClick={() => tagDeleteHandler(item)} bordered>
                      {tags[item]}
                    </Tag>
                  );
                }
                return <div key={key} />;
              })}
            </div>
            <div>
              <Tag onClick={() => deleteAllTagsHandler()} bordered>
                حذف همه
              </Tag>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Tags;
