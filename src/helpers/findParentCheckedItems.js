const findParentCheckedItems = (data) => {
  let PARENT_IDS = [];
  const parentIdFinder = data => {
    if (data) {
      data.forEach(item => {
        if (item.parentChecked) {
          if (PARENT_IDS.indexOf(item.parentId) === -1 && item.parentId !== null) {
            PARENT_IDS.push(item.parentId);
          }
        }
        parentIdFinder(item.children);
      });
    }
    return PARENT_IDS;
  };
  return parentIdFinder(data);
};

export default findParentCheckedItems;
