const getFilterFormInitialValue = data => {
	let obj = {};
	Object.keys(data).forEach(item => {
		if (data[item] && data[item].tagKey !== undefined && data[item].tagLabel !== undefined) {
			if (data[item] && data[item].value) {
				obj = { ...obj, [item]: data[item].value };
			} else {
				obj = { ...obj, [item]: '' };
			}
		} else {
			obj = { ...obj, [item]: data[item] };
		}
	});
	return obj;
};

export default getFilterFormInitialValue;
