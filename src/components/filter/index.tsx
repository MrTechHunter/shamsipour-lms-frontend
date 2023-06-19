import React from 'react';
import FilterForm from './form';
import Tags from './tags';
import { useAddQueryToUrl } from '../../hooks/useAddQueryToUrl';

interface I_Filter {
  [key: string]: any;
}
const Filter = ({ filters, setFilters, isLoading }: { filters: I_Filter; setFilters: any; isLoading: boolean }) => {
  const { addQueryToUrl } = useAddQueryToUrl();
  const submitHandler = (values: any) => {
    addQueryToUrl(values);
  };
  return (
    <>
      <div className="w-full h-full mb-2">
        <div className="flex justify-start items-center">
          <i className="lms-Filter-3 h-9 w-auto ml-3 before:content-['\e90f'] before:text-2xl flex justify-center items-center mb-2" />
          <FilterForm submitHandler={submitHandler} initialValues={filters} isLoading={isLoading} />
        </div>
      </div>
      <div className="flex justify-start items-center mb-3">
        <Tags filters={filters} setFilters={setFilters} />
      </div>
    </>
  );
};

export default Filter;
