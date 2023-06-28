import React, { useEffect } from 'react';
import { Card, CardBody, CardHeader, HeaderTitle } from '../../../../components/card';
import Table from '../../../../components/table';
import { useTeachersManagementMutation } from '../../../../redux/services/userManagementApi';
import Button from '../../../../components/button';
import ErrorHandler from '../../../../helpers/ErrorHandler';

const AdminUserManagement = () => {
  const [getTeachers, { data, isLoading }] = useTeachersManagementMutation();

  useEffect(() => {
    getTeachers({});
  }, []);

  const colDef = [
    { field: 'userName', headerName: 'نام کاربری' },
    { field: 'email', headerName: 'ایمیل' },
  ];

  return (
    <Card>
      <CardHeader>
        <HeaderTitle>مدیریت مدرسین</HeaderTitle>
        <Button color="primary" onClick={() => ErrorHandler(true)}>
          افزودن مدرس
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

export default AdminUserManagement;
