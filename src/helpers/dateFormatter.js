import moment from 'jalali-moment';
export function dateToObject(date) {
  return {
    year: parseInt(date.split('/')[0]),
    month: parseInt(date.split('/')[1]),
    day: parseInt(date.split('/')[2]),
  };
}
export const objectToString = (date) => {
  return `${date.year}/${date.month.toString().length === 1 ? `0${date.month}` : date.month}/${
    date.day.toString().length === 1 ? `0${date.day}` : date.day
  }`;
};
export const timeStampToObject = (unixDate) => {
  if (unixDate) {
    return dateToObject(moment(unixDate).format('jYYYY/jM/jD'));
  }
  return dateToObject(moment().format('jYYYY/jM/jD'));
};
export const objectToTimeStamp = (date) => {
  return moment(objectToString(date), 'jYYYY/jM/jD').valueOf();
};
export const timeStampToString = (timeStamp) => {
  if (timeStamp) {
    return objectToString(timeStampToObject(timeStamp));
  }
  return '';
};
