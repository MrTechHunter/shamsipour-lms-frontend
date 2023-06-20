import React from 'react';
import Shimmer from '../shimmer';
import { Avatar, Role, User, Username, UserProfile } from './style';

const ProfileSkeleton = () => {
	return (
		<UserProfile>
			<Shimmer />
			<Avatar className="g-user-fill" />
			<User>
				<Username />
				<Role />
			</User>
		</UserProfile>
	);
};

export default ProfileSkeleton;
