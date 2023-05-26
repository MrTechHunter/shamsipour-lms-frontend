import React from "react";
import loginImage from "../../App/assets/login.png";

const PublicLayer = ({ children }) => {
  return (
    <div className="flex flex-nowrap justify-between ">
      <div className="w-2/5">{children}</div>
      <img src={loginImage} className="hidden sm:block md:w-6/12" alt="login" />
    </div>
  );
};

export default PublicLayer;
