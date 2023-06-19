export const dropDownNormalizer = (data) => {
  if (data && data.length !== 0) {
    const result = [{ label: '-- لطفا انتخاب کنید --', value: ' ' }];
    const _data = data.map((item) => {
      return {
        label: item.title,
        value: item.id === 0 ? '0' : item.id,
      };
    });
    return result.concat(_data);
  }
  return [];
};
export const configurationTypeDropDownNormalizer = (data) => {
  if (data && data.length !== 0) {
    const result = [];
    const _data = data.map((item) => {
      return {
        label: item.name,
        value: item.userId === 0 ? '0' : item.userId,
      };
    });
    return result.concat(_data);
  }
  return [];
};

export const reactSelectNormalizer = (data) => {
  if (data) {
    const _data = data.map((item) => {
      return {
        label: item.title,
        value: item.id,
      };
    });
    return _data;
  }
  return [];
};

export const dropDownNormalizerPaidDate = (data) => {
  if (data && data.length !== 0) {
    const _data = data.map((item) => {
      return {
        label: item.persianDate,
        value: item.dateTime,
      };
    });
    return _data;
  }
  return [];
};

export const parentIdNormalizer = (data) => {
  if (data && data.length !== 0) {
    const result = [{ label: 'بدون ریشه', value: '' }];
    const _data = data.map((item) => {
      return {
        label: item.title,
        value: item.id,
      };
    });
    return result.concat(_data);
  }
  return [{ label: 'بدون ریشه', value: '' }];
};

export const roleTypeDataNormalizer = (data) => {
  if (data && data.length !== 0) {
    const result = [{ label: '-- لطفا انتخاب کنید --', value: '' }];
    const _data = data.map((item) => {
      return {
        label: item.title,
        value: item.key,
      };
    });
    return result.concat(_data);
  }
  return [];
};

export const roleTypeMultiSelectDataNormalizer = (data) => {
  if (data && data.length !== 0) {
    const _data = data.map((item) => {
      return {
        label: item.name,
        value: item.userId,
      };
    });
    return _data;
  }
  return [];
};

export const categoryDropDownNormalizer = (data) => {
  if (data && data.length !== 0) {
    const result = [
      {
        label: '',
        value: '',
        option: [
          {
            label: '-- لطفا انتخاب کنید --',
            value: '',
          },
        ],
      },
    ];
    const _data = data.map((item) => {
      return {
        label: item.title,
        value: item.id,
        option: item.sub_cats.map((subItem) => {
          return {
            label: subItem.title,
            value: subItem.id,
          };
        }),
      };
    });
    return result.concat(_data);
  }
  return [];
};

export const memberShipNormalizer = (data) => {
  if (data && data.length !== 0) {
    const result = [{ label: '-- لطفا انتخاب کنید --', value: '' }];
    const _data = data.map((item) => {
      return {
        label: `${item.dsc} (${item.type}) - ${item.service_type}`,
        value: item.id,
        type: item.type,
      };
    });
    return result.concat(_data);
  }
  return [];
};
