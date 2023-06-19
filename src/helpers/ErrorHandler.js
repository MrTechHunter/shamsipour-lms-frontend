import React from 'react';
import { toast } from 'react-toastify';

export default (error) => {
  if (error && error.response && error.response.meta) {
    error.response.meta.errors.forEach((item) => {
      toast.error(item.message.toString());
    });
    return true;
  } else if (error && error.data && error.data.meta) {
    error.data.meta.errors.forEach((item) => {
      toast.error(item.message.toString());
    });
    return true;
  } else {
    console.log(error);
    toast.error('Something went wrong!');
    return true;
  }
};
