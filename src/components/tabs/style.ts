import styled from 'styled-components';
import variables from '../../constants/styleVariables';

export const Container = styled.div`
	width: 100%;
	height: auto;
`;
export const TabList = styled.ol`
	border-bottom: 1px solid rgba(62, 63, 68, 0.2);
	padding-left: 0;
	padding-right: 0;
`;
export const TabContent = styled.div`
	width: 100%;
	height: auto;
`;

export const TabListItem = styled.li`
	display: inline-block;
	list-style: none;
	margin-bottom: -1px;
	padding: 17px;
	cursor: pointer;
	min-height: 27px;
	font-style: normal;
	font-weight: ${variables.fontWeight.bold};
	font-size: ${variables.fontSize.h4};
	line-height: 27px;
	text-align: right;
	color: ${variables.colors.black_87};
	&:hover {
		color: ${variables.colors.primary};
		border-bottom: 2px solid ${variables.colors.primary};
	}
`;
export const TabListActive = styled(TabListItem)`
	background-color: white;
	color: ${variables.colors.primary};
	border-bottom: 2px solid ${variables.colors.primary};
`;
