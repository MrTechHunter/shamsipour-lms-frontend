import React from 'react';
import Table from '../../../components/table';
import mockData from '../mockData';
import ErrorHandler from '../../../helpers/ErrorHandler';

const CourseTable = () => {
  const columnDefs = [
    {
      field: 'courseName',
      headerName: 'نام کلاس',
      skeletonType: 'text',
    },
    { field: 'courseDescription', headerName: 'توضیحات', skeletonType: 'badge' },
    {
      field: 'userName',
      headerName: 'نام استاد',
      skeletonType: 'badge',
      cellRenderer: ({ data }: any) => {
        return <div>{data.createdAt.userName}</div>;
      },
    },
    {
      field: ' ',
      skeletonType: 'icon',
      cellRenderer: () => {
        return (
          <div className="cursor-pointer w-fit hover:bg-white p-1" onClick={() => ErrorHandler()}>
            شرکت در کلاس
          </div>
        );
      },
    },
  ];
  return (
    <div className="h-[400px]">
      <Table columnDefs={columnDefs} data={mockData.courses} />
    </div>
  );
};

export default CourseTable;
