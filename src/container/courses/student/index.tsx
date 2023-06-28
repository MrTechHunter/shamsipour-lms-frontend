import React from 'react';
import { Card, CardBody, CardHeader, HeaderTitle } from '../../../components/card';
import Table from '../../../components/table';
import Icon from '../../../components/tableIcon';
import ErrorHandler from '../../../helpers/ErrorHandler';

const StudentCourse = () => {
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
          </div>
        );
      },
    },
  ];
  return (
    <Card>
      <CardHeader>
        <HeaderTitle>دوره های من</HeaderTitle>
      </CardHeader>
      <CardBody>
        <div className="h-[400px]">
          <Table columnDefs={columnDefs} data={[]} />
        </div>
      </CardBody>
    </Card>
  );
};

export default StudentCourse;
