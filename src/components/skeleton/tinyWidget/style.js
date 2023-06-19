import styled from 'styled-components';
import variables from '../../../constants/styleVariables';

export const Container = styled.div`
	width: 100%;
	min-height: 200px;
	border-radius: 8px;
	background-color: ${variables.colors.black_850};
	position: relative;
	overflow-x: hidden;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	padding-bottom: 19px;
`;
export const Header = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	margin: 3%;
	position: absolute;
	top: 0;
	right: 0;
`;
export const Title = styled.div`
	height: 24px;
	width: 82px;
	border-radius: 4px;
	font-weight: bold;
	font-size: 14px;
	line-height: 24px;
	text-align: right;
	background-color: #ffffff;
`;
export const Icon = styled.i`
	margin-left: 11px;
	width: 24px;
	height: 24px;
	border-radius: 50%;
	background-color: #ffffff;
`;
export const PieChart = styled.div`
	width: 130px;
	height: 130px;
	border-radius: 50%;
	border: 11px solid #fff;
	position: relative;
	&:before {
		content: ' ';
		width: 48px;
		height: 24px;
		position: absolute;
		top: calc(50% - 12px);
		right: calc(50% - 24px);
		background: #ffffff;
		border-radius: 4px;
	}
	&:after {
		content: ' ';
		width: 65px;
		height: 65px;
		position: absolute;
		top: -8px;
		right: -11px;
		background-image: url('/assets/pieChartSkeletonBG.svg');
		background-position: top;
		background-size: contain;
		background-repeat: no-repeat;
	}
`;
