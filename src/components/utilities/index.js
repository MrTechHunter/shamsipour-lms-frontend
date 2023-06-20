import React from 'react';

export const getMethods = (method) => {
  switch (method) {
    case 'GET':
      return <div color="info">{method}</div>;
    case 'POST':
      return <div color="success">{method}</div>;
    case 'PUT':
      return <div color="warning">{method}</div>;
    case 'DELETE':
      return <div color="danger">{method}</div>;
  }
};
export const getListGroupItemColor = (method) => {
  switch (method) {
    case 'GET':
      return 'info';
    case 'POST':
      return 'success';
    case 'PUT':
      return 'warning';
    case 'DELETE':
      return 'danger';
  }
};
export const getListItemColor = (status) => {
  switch (status) {
    case 'CONFIRMED':
      return 'success';
    case 'REJECTED':
      return 'danger';
    case 'AWAITING_CONFIRMATION':
    case 'SENDING_RECEIPT':
      return 'primary';
  }
};
export const getColor = (status) => {
  if (status === 'ACTIVE') {
    return 'success';
  } else {
    return 'danger';
  }
};
export const getLabel = (status, fieldName) => {
  if (status) {
    return fieldName === 'publicAccess' ? 'عمومی' : 'فعال';
  } else {
    return fieldName === 'publicAccess' ? 'خصوصی' : 'غیرفعال';
  }
};
