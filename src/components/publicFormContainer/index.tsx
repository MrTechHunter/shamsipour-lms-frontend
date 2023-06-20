import React from 'react';
import Logo from '../logo';
import useWindowSize from '../../helpers/useWindowSize';

const PublicFormContainer = ({ children, title }: Record<string, { title: string } | any>) => {
  const [width] = useWindowSize();
  return (
    <div className="w-80 2xl:w-136.75 h-[calc(100%_-_2rem)] 2xl:h-[calc(100%_-_4rem)] text-right 2xl:my-12 my-4 bg-white rounded-3xl absolute top-0 right-1 left-1 px-8 pt-10 2xl:px-12 2xl:pt-15">
      <div className="flex justify-start items-start">
        {width < 1024 && <Logo width={80} height={70} />}
        {width >= 1024 && <Logo />}
      </div>
      <div className="md:text-sm font-bold text-2xl text-blue_800 text-right mt-6 mb-8 2xl:mt-14 2xl:mb-12">
        {title}
      </div>
      {children}
    </div>
  );
};

export default PublicFormContainer;
