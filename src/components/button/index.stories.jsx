import React from 'react';
import Button from './index';

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		color: {
			options: [
				'primary',
				'primary-outline',
				'secondary',
				'secondary-outline',
				'info',
				'info-outline',
			],
			control: { type: 'select' },
		},
		size: {
			options: ['sm', 'sm-wide', 'md', 'md-wide', 'lg', 'lg-wide'],
			control: { type: 'select' },
		},
	},
};
const clickHandler = () => alert('You have just clicked me.');
export const Primary = args => <Button {...args} />;
Primary.args = {
	size: 'md',
	color: 'primary',
	onClick: clickHandler,
	type: 'button',
	loading: false,
	disabled: false,
	children: 'click me!',
};
export const Secondary = args => <Button {...args} />;
Secondary.args = {
	size: 'md',
	color: 'secondary',
	onClick: clickHandler,
	type: 'button',
	loading: false,
	disabled: false,
	children: 'click me!',
};
export const Info = args => <Button {...args} />;
Info.args = {
	size: 'md',
	color: 'info',
	onClick: clickHandler,
	type: 'button',
	loading: false,
	disabled: false,
	children: 'click me!',
};
