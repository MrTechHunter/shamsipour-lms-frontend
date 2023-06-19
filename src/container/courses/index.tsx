import React from 'react';
import { Card, CardBody, CardHeader, HeaderTitle } from '../../components/card';
import CourseTable from './grid';

const Courses = () => {
  return (
    <Card>
      <CardHeader>
        <HeaderTitle>درس ها</HeaderTitle>
        <CardBody>
          <CourseTable />
        </CardBody>
      </CardHeader>
    </Card>
  );
};

export default Courses;
