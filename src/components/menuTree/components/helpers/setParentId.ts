function setParentId(data: any, parentId = null) {
  return data.map((item: any) => {
    if (item.parentId === undefined) {
      item.parentId = parentId;
      if (item?.children?.length) {
        setParentId(item?.children, item.id);
      }
      return item;
    }
    return item;
  });
}

export default setParentId;
