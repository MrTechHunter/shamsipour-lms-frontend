import * as yup from 'yup';

export default () =>
	yup.object({
		password: yup.string().required('رمز عبور اجباریست!'),
		username: yup
			.string()
			.required('نام کاربری اجباریست!')
			.matches(/^[0-9a-zA-Z\\-_.@]{3,20}$/, 'نام کاربری معتبر نمی باشد.'),
	});
