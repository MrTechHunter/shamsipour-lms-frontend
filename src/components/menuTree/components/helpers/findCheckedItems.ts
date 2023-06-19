import USING_PROPERTY from '../constants/usingProperty';

const findCheckedItems = (data: [], usingProperty: any) => {
  const getProperty = (property: string) => {
    if (usingProperty && usingProperty[property]) {
      return usingProperty[property];
    }
    return USING_PROPERTY[property as keyof typeof USING_PROPERTY];
  };
  let IDS: number[] = [];
  const finder = (data: any) => {
    if (data) {
      data.forEach((item: any) => {
        if (item[getProperty('checked')] === 'FULL' || item[getProperty('checked')] === 'HALF') {
          if (IDS.indexOf(item[getProperty('id')]) === -1) {
            IDS.push(item[getProperty('id')]);
          }
        } else {
          IDS = IDS.filter((id) => Number(id) !== Number(item[getProperty('id')]));
        }

        finder(item[getProperty('children')]);
      });
    }
    return IDS;
  };
  return finder(data);
};

export default findCheckedItems;
