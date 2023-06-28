import React, { useEffect } from 'react';
import { Card, CardBody, CardHeader, HeaderTitle } from '../../../../components/card';
import Table from '../../../../components/table';
import { useStudentManagementMutation } from '../../../../redux/services/userManagementApi';
import Button from '../../../../components/button';
import ErrorHandler from '../../../../helpers/ErrorHandler';

const AdminStudentManagement = () => {
  const [getStudent, { data, isLoading }] = useStudentManagementMutation();

  useEffect(() => {
    getStudent({});
  }, []);

  const colDef = [
    { field: 'userName', headerName: 'نام کاربری' },
    { field: 'email', headerName: 'ایمیل' },
  ];

  return (
    <Card>
      <CardHeader>
        <HeaderTitle>مدیریت دانشجویان</HeaderTitle>
        <Button color="primary" onClick={() => ErrorHandler(true)}>
          افزودن دانشجو
        </Button>
      </CardHeader>
      <CardBody>
        <div className="h-[250px]">
          <Table data={data} columnDefs={colDef} />
        </div>
      </CardBody>
    </Card>
  );
};

export default AdminStudentManagement;
