import React, { useEffect } from 'react';
import Table from '../../../../components/table';
import mockData from '../mockData';
import ErrorHandler from '../../../../helpers/ErrorHandler';
import Icon from '../../../../components/tableIcon';
import { useGetCourseMutation } from '../../../../redux/services/courseApi';

const CourseTable = () => {
  const [getCourses, { data, isLoading }] = useGetCourseMutation();

  useEffect(() => {
    getCourses({});
  }, []);
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
          <div className="cursor-pointer w-fit p-1 flex">
            <Icon icon="lms-exclamation-circle scale-110" title="جزئیات دوره" onClick={() => ErrorHandler()} />
            <Icon icon="lms-times-square scale-110" title="حذف دوره" onClick={() => ErrorHandler()} />
          </div>
        );
      },
    },
  ];
  console.log(data);
  return (
    <div className="h-[400px]">
      <Table columnDefs={columnDefs} data={data?.courses} />
    </div>
  );
};

export default CourseTable;
