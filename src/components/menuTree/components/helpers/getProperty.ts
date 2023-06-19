const USING_PROPERTY = {
  id: 'id',
  parentId: 'parentId',
  title: 'title',
  description: 'description',
  tags: 'tags',
  iconName: 'iconName',
  children: 'children',
  checked: 'checked',
};

const getProperty = (usingProperty: any, property: string) => {
  if (usingProperty && usingProperty[property]) {
    return usingProperty[property];
  }
  return USING_PROPERTY[property as keyof typeof USING_PROPERTY];
};

export default getProperty;
