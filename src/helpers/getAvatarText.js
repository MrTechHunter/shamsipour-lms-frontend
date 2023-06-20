export const GetAvatarText = (name, family) => {
	let _name = name && name.toString() !== 'null' ? name.substring(0, 1) : '';
	let _family = family && family.toString() !== 'null' ? family.substring(0, 1) : '';
	return `${_name} ${_family}`;
};
