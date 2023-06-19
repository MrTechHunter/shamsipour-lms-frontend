/***
 * get string
 * convert persian number to english
 * */
const PersianNumToEnglish = (num) => {
  if (!num) {
    return num;
  }
  num = num.toString();
  const persianNumbers = [
    '۰',
    '۱',
    '۲',
    '۳',
    '۴',
    '۵',
    '۶',
    '۷',
    '۸',
    '۹',
    '۰',
    '١',
    '٢',
    '٣',
    '٤',
    '٥',
    '٦',
    '٧',
    '٨',
    '٩',
  ];
  const englishNumbers = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
  ];
  for (let i = 0; i < num.length; i++) {
    const startPoint = num.indexOf(num[i]);
    const endPoint = num[i].length + startPoint;
    let theFirst = num.substring(0, startPoint);
    let theWord = num.substring(startPoint, endPoint);
    const theRest = num.substring(endPoint, num.length + endPoint);
    for (let j = 0; j < persianNumbers.length; j++) {
      if (num[i].toString() === persianNumbers[j].toString()) {
        if (startPoint !== -1) {
          theWord = englishNumbers[j];
          num = theFirst.toString() + theWord.toString() + theRest.toString();
        }
      }
    }
  }
  if (/[0-9]/.test(num)) {
    return num;
  } else {
    return '';
  }
};

export default PersianNumToEnglish;
