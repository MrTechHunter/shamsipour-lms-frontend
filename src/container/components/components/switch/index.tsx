import React, { useState } from 'react';
import { Card, CardBody, CardHeader, HeaderTitle } from '../../../../components/card';
import CheckBox from '../../../../components/checkbox';
import SwitchButton from '../../../../components/switchButton';

const Switch = () => {
  const [status, setStatus] = useState(false);
  return (
    <Card>
      <CardHeader>
        <HeaderTitle>Switch Control</HeaderTitle>
      </CardHeader>
      <CardBody>
        <section className="border-2 border-solid border-black_38/30 pl-8 pr-8 pt-4 pb-4 rounded-md mb-8">
          <h3 className="">Checkbox</h3>
          <hr className="mb-6 text-black_38/10" />
          <div className={`grid grid-cols-2 gap-x-8`}>
            <div className="">
              <CheckBox size={'md'} checked={status} onSelect={() => setStatus(!status)} className="mt-1 2xl:mt-2" />
            </div>
          </div>
        </section>
        <section className="border-2 border-solid border-black_38/30 pl-8 pr-8 pt-4 pb-4 rounded-md mb-8">
          <h3 className="">Switch</h3>
          <hr className="mb-6 text-black_38/10" />
          <div className={`grid grid-cols-2 gap-x-8`}>
            <div className="">
              <SwitchButton
                size={'md'}
                value={status}
                onChange={() => setStatus(!status)}
                title={''}
                disabled={false}
              />
            </div>
          </div>
        </section>
      </CardBody>
    </Card>
  );
};

export default Switch;
