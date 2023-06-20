import { timeStampToString } from './dateFormatter';

const getFilterTagValue = (fieldType, formValue) => {
	if (formValue === '') {
		return formValue;
	}
	switch (fieldType) {
		case 'date':
			return timeStampToString(formValue);
		case 'select':
			return formValue.map(item => item.label).toString();
		case 'switchButton':
			return formValue.key;
		default:
			return formValue;
	}
};

const filterTagEngine = (formValues, filterTag, setFilterTag, FIELDS) => {
	Object.keys(formValues).forEach(fieldName => {
		if (JSON.stringify(filterTag[fieldName]?.value) !== JSON.stringify(formValues[fieldName])) {
			setFilterTag({
				...filterTag,
				...{
					[fieldName]: {
						key: FIELDS[fieldName].label,
						title: getFilterTagValue(FIELDS[fieldName].type, formValues[fieldName]),
						value: formValues[fieldName],
					},
				},
			});
		}
	});
};

export default filterTagEngine;
