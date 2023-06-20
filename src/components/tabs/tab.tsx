import React from 'react';
import { TabListItem, TabListActive } from './style';

const TabItem = ({ activeTab, label, onClick }: any) => {
	if (activeTab === label) {
		return (
			<TabListActive className="no-select" onClick={() => onClick(label)}>
				{label}
			</TabListActive>
		);
	}
	return (
		<TabListItem className="no-select" onClick={() => onClick(label)}>
			{label}
		</TabListItem>
	);
};

export default TabItem;
