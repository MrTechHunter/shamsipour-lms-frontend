import React from 'react';
import { Card, CardBody } from '../../../components/card';

const StudentDashboard = () => {
  return (
    <>
      <Card>
        <CardBody>
          <div className="m-9">
            <div className="w-full border-2 h-20 rounded-lg border-dashed border-secondary_200 flex justify-center items-center text-center p-2 ">
              <p className="max-sm:font-light">درحال حاضر رویدادی یافت نشد</p>
            </div>
          </div>
        </CardBody>
      </Card>
      <div className="flex max-md:flex-wrap mt-2">
        <Card>
          <CardBody>
            <div className="m-9">
              <div className="w-full border-2 h-20 rounded-lg border-dashed border-secondary_200 flex justify-center items-center text-center p-2 ">
                <p className="max-sm:font-light">اخربن بروزرسانی های سایت</p>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <div className="m-9 ">
              <div className="w-full border-2 h-20 rounded-lg border-dashed border-secondary_200 flex justify-center items-center text-center p-2 ">
                <p className="max-sm:font-light">اخرین بروزرسانی های سایت</p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default StudentDashboard;
