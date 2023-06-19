import React from 'react';
import Badge from '../components/badge';

export const getMethods = method => {
	switch (method) {
		case 'GET':
			return <Badge type="info">{method}</Badge>;
		case 'POST':
			return <Badge type="success">{method}</Badge>;
		case 'PUT':
			return <Badge type="warning">{method}</Badge>;
		case 'DELETE':
			return <Badge type="danger">{method}</Badge>;
	}
};
export const getMethodColors = method => {
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
export const getColor = status => {
	if (status) {
		return 'success';
	} else {
		return 'danger';
	}
};
export const getLabel = (status, fieldName) => {
	if (status) {
		return fieldName === 'publicAccess' ? 'عمومی' : 'فعال';
	} else {
		return fieldName === 'publicAccess' ? 'خصوصی' : 'غیر‌فعال';
	}
};
