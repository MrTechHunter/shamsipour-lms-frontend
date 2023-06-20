const findCheckedItems = (data) => {
  let IDS = [];
  const finder = data => {
    if (data) {
      data.forEach(item => {
        if (item.checked) {
          if (IDS.indexOf(item.id) === -1) {
            IDS.push(item.id);
          }
        } else {
          IDS = IDS.filter(id => Number(id) !== Number(item.id));
        }

        finder(item.children);
      });
    }
    return IDS;
  };
  return finder(data);
};

export default findCheckedItems;
