import React from 'react';

import CardBody from './body';
import CardHeader from './header';
import CardFooter from './footer';
import HeaderTitle from './header/headerTitle';

const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className="rounded-lg bg-white min-h-96 mx-auto px-2 py-4">{children}</div>;
};

export { Card, CardBody, CardFooter, CardHeader, HeaderTitle };
