interface IData {
  parentId: number | null;
  children?: IData[];
  id: number;
}

const addParentToEachChild = (data: IData[], parentId: number | null = null) => {
  return data.map((item) => {
    item.parentId = parentId;
    if (item.children && item.children.length !== 0) {
      addParentToEachChild(item.children, item.id);
    }
    return item;
  });
};
export default addParentToEachChild;
