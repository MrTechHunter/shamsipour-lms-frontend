interface I_USING_PROPERTY {
  id: string;
  parentId: string;
  title: string;
  tags: string;
  description: string;
  iconName: string;
  children: string;
  checked: string;
}
const USING_PROPERTY = <I_USING_PROPERTY>{
  id: 'id',
  parentId: 'parentId',
  title: 'title',
  description: 'description',
  tags: 'tags',
  iconName: 'iconName',
  children: 'children',
  checked: 'checked',
};

export default USING_PROPERTY;
