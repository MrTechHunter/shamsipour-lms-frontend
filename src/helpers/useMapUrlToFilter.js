const mapUrlToFilter = async (search, defaults) => {
  const searchParams = await new URLSearchParams(search);
  let obj = {
    page: 1,
    pageSize: 10,
    ...defaults,
  };
  if (searchParams) {
    searchParams.forEach((value, key) => {
      if (
        key === 'startDate' ||
        key === 'endDate' ||
        key === 'startDateFrom' ||
        key === 'endDateTo' ||
        key === 'creationDate' ||
        key === 'creationDateFrom' ||
        key === 'creationDateTo' ||
        key === 'dateTime' ||
        key === 'toDate' ||
        key === 'fromDate'
      ) {
        obj = {
          ...obj,
          [key]: parseInt(value),
        };
      } else if (key === 'contractPartyName' || key === 'title' || key === 'key') {
        obj = {
          ...obj,
          [key]: decodeURI(value),
        };
      } else {
        obj = {
          ...obj,
          [key === 'p' ? 'page' : key === 'ps' ? 'pageSize' : key]: value,
        };
      }
    });
  }

  return obj;
};

export default mapUrlToFilter;
