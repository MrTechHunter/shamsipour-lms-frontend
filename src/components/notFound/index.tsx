import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="w-full h-screen bg-notFound flex justify-start items-center flex-col">
      <img src="/assets/404.svg" alt="not-found" />
      <div className="flex justify-end items-center flex-col h-full pb-20">
        <h3 className="text-xl font-bold text-black_87 mb-12">متاسفیم، صفحه مورد نظر شما پیدا نشد!</h3>
        <Link to={'/'} className="text-white w-48 font-bold text-center bg-primary rounded-full p-3 mt-6 text-xs">
          بازگشت به مبوکا
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
