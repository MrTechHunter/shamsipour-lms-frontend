import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ width = 128, height = 110, small = false }: { small?: boolean; width?: number; height?: number }) => {
  return (
    <div className="text-right flex justify-center items-start lg:justify-center lg:items-center">
      {!small && (
        <Link to="/login">
          <img src="" alt="logo" width={width} height={height} />
        </Link>
      )}
      {small && (
        <Link to="/login">
          <img src="" alt="logo" width={width} height={height} />
        </Link>
      )}
    </div>
  );
};

export default Logo;
