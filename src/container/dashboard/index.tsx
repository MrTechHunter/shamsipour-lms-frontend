import React from 'react';
import { Card, CardBody, CardHeader, HeaderTitle } from '../../components/card';

const Dashboard = () => {
  return (
    <Card>
      <CardBody>
        <div className="m-9">
          <div className="w-full border-2 h-20 rounded-lg border-dashed border-secondary_200 flex justify-center items-center text-center ">
            <p>درحال حاضر رویدادی یافت نشد</p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Dashboard;
