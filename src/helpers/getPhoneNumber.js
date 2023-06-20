export default phoneNumber => {
	let validNumber = phoneNumber;
	if (phoneNumber && (phoneNumber.substring(0, 3) === '+98' || phoneNumber.substring(0, 3) === '+۹۸')) {
		validNumber = phoneNumber.substring(3, phoneNumber.length);
	}
	return Number(validNumber);
};
