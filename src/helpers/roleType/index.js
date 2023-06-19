import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UserAction } from '../../actions';

const GetRole = () => {
	const dispatch = useDispatch();
	const { data } = useSelector(store => store.User.getUserInfo);
	const getUserInfo = useCallback(() => dispatch(UserAction.getUserInfo()), [dispatch]);
	const [role, setRole] = useState(false);
	useEffect(() => {
		if (data && data.length === 0) {
			// getUserInfo();
		} else {
			setRole(data.roleType);
		}
	}, [data]);
	return role;
};
// todo: use suspense to handle api loading and return boolean after fetching data
const IsAdmin = () => {
	return GetRole() === 'ADMIN';
};

const IsSysAdmin = () => {
	return GetRole() === 'SYSADMIN';
};

const IsClient = () => {
	return GetRole() === 'OWNER_REAL' && GetRole() === 'OWNER_LEGAL';
};

export default {
	isAdmin: IsAdmin,
	isSysAdmin: IsSysAdmin,
	isClient: IsClient,
};
