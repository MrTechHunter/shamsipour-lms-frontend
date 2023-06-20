import React from 'react';
import { Container, Header, Icon, Title, PieChart } from './style';
import Shimmer from '../shimmer';

const TableSkeleton = () => {
	return (
		<Container>
			<Shimmer />
			<Header>
				<Icon />
				<Title />
			</Header>
			<PieChart />
		</Container>
	);
};

export default TableSkeleton;
