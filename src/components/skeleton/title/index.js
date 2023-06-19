import React from 'react';
import { Container } from './style';
import Shimmer from '../shimmer';

const TitleSkeleton = () => {
	return (
		<Container>
			<Shimmer />
		</Container>
	);
};

export default TitleSkeleton;
