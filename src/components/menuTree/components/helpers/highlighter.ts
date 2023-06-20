const highlighter = (keyword: string, string: string) => {
  let _keyword = keyword;
  _keyword = _keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const result = new RegExp(_keyword, 'g');

  if (_keyword.length > 0) {
    return string.replace(result, `<mark class="highlight">$&</mark>`);
  }
  return string;
};
export default highlighter;
