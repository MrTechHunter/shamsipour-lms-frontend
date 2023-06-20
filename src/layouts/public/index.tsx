import React from 'react';
import Particle from '../../components/particles';

const Public = ({ children }: Record<string, any>) => {
  return (
    <Particle>
      <div className="h-screen w-full box-border flex justify-between items-start flex-col">
        <div className="w-full h-screen max-h-screen">{children}</div>
      </div>
    </Particle>
  );
};

export default Public;
