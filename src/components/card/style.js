import styled from 'styled-components';
import variables from '../../constants/styleVariables';

export const CellRenderContainer = styled.div`
	min-height: 47px;
	width: 100%;
	display: flex;
	justify-content: ${props => (props.justifyContent ? props.justifyContent : 'flex-start')};
	align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
	flex-wrap: ${props => (props.flexWrap ? props.flexWrap : 'nowrap')};
	flex-direction: ${props => (props.flexDirection ? props.flexDirection : 'row')};
`;
export const Icon = styled.i`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	border-radius: 8px;
	background: transparent;
	cursor: ${props => (props.onClick ? 'pointer' : '')};
	&:hover {
		background: ${variables.colors.black_400};
	}
	&:before {
		font-size: ${props => (props.size ? `${props.size}px` : '18px')};
		color: ${props => (props.color ? variables.colors[props.color] : variables.colors.black_600)};
	}
`;
