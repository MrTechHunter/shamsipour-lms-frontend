import React from 'react';
import Logo from '../../components/logo';
import Sidebar from './sidebar';
import Profile from './profile';
import HeaderDropDown from './headerDropDown';
import useWindowSize from '../../helpers/useWindowSize';
import Breadcrumbs from './breadcrumbs';

const Dashboard = ({ children }: Record<string, any>) => {
  const [width] = useWindowSize();
  return (
    <div className="h-screen w-full box-border flex justify-between items-start overflow-hidden">
      <div
        className="lg:w-64 lg:shadow-sideBar w-full h-full max-h-screen overflow-y-auto bg-transparent flex justify-start items-end flex-col absolute top-0 right-0"
        style={{ direction: 'ltr' }}
      >
        <div className="h-18 py-3 md:py-1 hidden lg:block w-64">
          <Logo height={62} width={72} />
        </div>
        <div className="h-18 py-3 md:py-3 md:block lg:hidden w-16 flex justify-center items-center">
          <Logo small height={46} width={32} />
        </div>
        <Sidebar />
      </div>
      <div
        className="lg:w-[calc(100%)] w-[calc(100%)] h-full flex justify-between items-center flex-col overflow-y-auto overflow-x-hidden"
        style={{ paddingRight: width < 1024 ? '72px' : '256px' }}
      >
        <header className="mx-auto shadow-header bg-amber-100 w-full bg-blue_050 h-18 min-h-18 px-4 lg:px-8 relative">
          <Profile />
          <HeaderDropDown />
        </header>
        <Breadcrumbs />
        <div className="w-full h-full pb-3 bg-surface mx-auto">
          <div className="w-auto mx-5 md:mx-5 lg:mx-16 xl:mx16 2xl:mx-16">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
