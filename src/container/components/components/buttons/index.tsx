import React from 'react';
import Button from '../../../../components/button';
import { Card, CardBody, CardHeader, HeaderTitle } from '../../../../components/card';

const Buttons = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <HeaderTitle>Buttons</HeaderTitle>
        </CardHeader>
        <CardBody>
          <section className="border-2 border-solid border-black_38/30 pl-8 pr-8 pt-4 pb-4 rounded-md mb-8">
            <h3 className="">Right Icon</h3>
            <hr className="mb-6 text-black_38/10" />
            <div className={`grid grid-cols-2 gap-x-8`}>
              <Button type="submit" size="md" color="primary" rightIcon="me-Paper-Plus">
                عنوان
              </Button>
              <Button type="submit" size="md" color="primary" rightIcon="me-Paper-Plus" disabled>
                عنوان
              </Button>
            </div>
          </section>
          <section className="border-2 border-solid border-black_38/30 pl-8 pr-8 pt-4 pb-4 rounded-md mb-8">
            <h3 className="">Two Icons</h3>
            <hr className="mb-6 text-black_38/10" />
            <div className={`grid grid-cols-2 gap-x-8`}>
              <Button type="submit" size="md" color="primary" rightIcon="me-Paper-Plus" leftIcon="me-Caret-down">
                عنوان
              </Button>
              <Button
                type="submit"
                size="md"
                color="primary"
                rightIcon="me-Paper-Plus"
                leftIcon="me-Caret-down"
                disabled
              >
                عنوان
              </Button>
            </div>
          </section>
          <section className="border-2 border-solid border-black_38/30 pl-8 pr-8 pt-4 pb-4 rounded-md mb-8">
            <h3 className="">Danger</h3>
            <hr className="mb-6 text-black_38/10" />
            <div className={`grid grid-cols-2 gap-x-8`}>
              <Button type="submit" size="md" color="danger">
                حذف
              </Button>
              <Button type="submit" size="md" color="danger" disabled>
                حذف
              </Button>
            </div>
          </section>
          <section className="border-2 border-solid border-black_38/30 pl-8 pr-8 pt-4 pb-4 rounded-md mb-8">
            <h3 className="">Default Outlined</h3>
            <hr className="mb-6 text-black_38/10" />
            <div className={`grid grid-cols-2 gap-x-8`}>
              <Button type="submit" size="md" color="default-outline">
                حذف
              </Button>
              <Button type="submit" size="md" color="default-outline" disabled>
                حذف
              </Button>
            </div>
          </section>
          <section className="border-2 border-solid border-black_38/30 pl-8 pr-8 pt-4 pb-4 rounded-md mb-8">
            <h3 className="">Primary Outlined</h3>
            <hr className="mb-6 text-black_38/10" />
            <div className={`grid grid-cols-2 gap-x-8`}>
              <Button color="primary-outline" type="button" size="sm">
                انصراف
              </Button>
              <Button color="primary-outline" type="button" size="sm" disabled>
                انصراف
              </Button>
            </div>
          </section>
          <section className="border-2 border-solid border-black_38/30 pl-8 pr-8 pt-4 pb-4 rounded-md mb-8">
            <h3 className="">Primary Outlined With Icon</h3>
            <hr className="mb-6 text-black_38/10" />
            <div className={`grid grid-cols-2 gap-x-8`}>
              <Button color="primary-outline" type="button" size="sm" rightIcon="me-Paper-Plus">
                عنوان
              </Button>
              <Button color="primary-outline" type="button" size="sm" rightIcon="me-Paper-Plus" disabled>
                عنوان
              </Button>
            </div>
          </section>
        </CardBody>
      </Card>
    </>
  );
};

export default Buttons;
