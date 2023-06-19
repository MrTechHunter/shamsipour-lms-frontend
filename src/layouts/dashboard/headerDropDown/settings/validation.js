import * as yup from 'yup';

export default () =>
	yup.object({
		confirmPhrase: yup.string(),
		resetRoles: yup.array(),
	});
