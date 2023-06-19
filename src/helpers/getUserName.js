import React from 'react';

const getUserName = (data) => {
  if (data?.firstName !== null && data?.lastName !== null) {
    return `${data?.firstName} ${data?.lastName}`;
  } else if (data?.firstName !== null) {
    return `${data?.firstName}`;
  } else if (data?.lastName !== null) {
    return `${data?.lastName}`;
  } else {
    return ``;
  }
};

export default getUserName;
