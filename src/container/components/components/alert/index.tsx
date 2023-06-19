import React from 'react';
import Alert from '../../../../components/alert';
import { Card, CardBody, CardHeader } from '../../../../components/card';

const AlertBox = () => {
  return (
    <Card>
      <CardHeader>Alert </CardHeader>
      <CardBody>
        <div className="my-5">
          <Alert closeable icon={'me-info-circle'} type="info">
            <div>
              توجه نمایید که در صورت ویرایش یک سطر، تمامی سطر ها غیرفعال میشوند و زمانی که تغییرات را ذخیره میکنید به
              حالت قبل بازمیگردند.
            </div>
          </Alert>
        </div>
        <div className="my-5">
          <Alert closeable={false} icon={'me-info-circle'} type="info">
            <div>
              توجه نمایید که در صورت ویرایش یک سطر، تمامی سطر ها غیرفعال میشوند و زمانی که تغییرات را ذخیره میکنید به
              حالت قبل بازمیگردند.
            </div>
          </Alert>
        </div>
        <div className="my-5">
          <Alert closeable icon={'me-info-circle'} type="warning">
            <div>
              توجه نمایید که در صورت ویرایش یک سطر، تمامی سطر ها غیرفعال میشوند و زمانی که تغییرات را ذخیره میکنید به
              حالت قبل بازمیگردند.
            </div>
          </Alert>
        </div>
        <div className="my-5">
          <Alert closeable={false} icon={'me-info-circle'} type="warning">
            <div>
              توجه نمایید که در صورت ویرایش یک سطر، تمامی سطر ها غیرفعال میشوند و زمانی که تغییرات را ذخیره میکنید به
              حالت قبل بازمیگردند.
            </div>
          </Alert>
        </div>
        <div className="my-5">
          <Alert closeable icon={'me-info-circle'}>
            <div>
              توجه نمایید که در صورت ویرایش یک سطر، تمامی سطر ها غیرفعال میشوند و زمانی که تغییرات را ذخیره میکنید به
              حالت قبل بازمیگردند.
            </div>
          </Alert>
        </div>
        <div className="my-5">
          <Alert closeable={false} icon={'me-info-circle'}>
            <div>
              توجه نمایید که در صورت ویرایش یک سطر، تمامی سطر ها غیرفعال میشوند و زمانی که تغییرات را ذخیره میکنید به
              حالت قبل بازمیگردند.
            </div>
          </Alert>
        </div>
      </CardBody>
    </Card>
  );
};

export default AlertBox;
