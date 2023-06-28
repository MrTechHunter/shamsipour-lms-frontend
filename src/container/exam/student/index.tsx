import React from 'react';
import { Card, CardBody, CardHeader, HeaderTitle } from '../../../components/card';
import Table from '../../../components/table';
import Icon from '../../../components/tableIcon';

const StudentExams = () => {
  const colDef = [
    {
      field: 'name',
      headerName: 'نام درس',
    },
    {
      field: 'data',
      headerName: 'تاریخ',
    },
    {
      field: 'duration',
      headerName: 'مدت زمان',
    },
    {
      field: 'score',
      headerName: 'نمره',
    },
    {
      field: '',
      headerName: '',
      cellRenderer: () => {
        return <Icon icon="lms-books" />;
      },
    },
  ];
  return (
    <Card>
      <CardHeader>
        <HeaderTitle>امتحانات</HeaderTitle>
      </CardHeader>
      <CardBody>
        <div className="h-[500px]">
          <Table data={[]} columnDefs={colDef} />
        </div>
      </CardBody>
    </Card>
  );
};

export default StudentExams;
