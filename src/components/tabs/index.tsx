import React, { useState } from 'react';
import { Container, TabList, TabContent } from './style';
import TabItem from './tab';

export const Tabs = ({ children }: { children?: any }) => {
	const [activeTab, toggleTab] = useState(children[0]?.props?.label);
	return (
		<Container>
			<TabList>
				{children && children.map((child: any) => {
					const { label } = child.props;
					return <TabItem activeTab={activeTab} key={label} label={label} onClick={() => toggleTab(label)} />;
				})}
			</TabList>
			<TabContent>
				{children && children.map((child: any) => {
					if (child.props.label !== activeTab) return undefined;
					return child.props.children;
				})}
			</TabContent>
		</Container>
	);
};

export const Tab = ({ label, children }: { label?: any; children: any }) => <TabItem label={label}>{children}</TabItem>;
