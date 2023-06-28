import React from 'react';
import CourseTable from './grid';
import Button from '../../../components/button';
import { Card, CardBody, CardHeader, HeaderTitle } from '../../../components/card';

const Courses = () => {
  return (
    <Card>
      <CardHeader>
        <HeaderTitle>درس ها</HeaderTitle>
        <Button color="primary">افزودن درس</Button>
        <CardBody>
          <CourseTable />
        </CardBody>
      </CardHeader>
    </Card>
  );
};

export default Courses;
