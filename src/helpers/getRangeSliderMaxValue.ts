export default (stairsLength: number, lastMax: number, lastMin: number) => {
  const _lastMax = lastMax > 0 ? lastMax : 1;
  const _stairsLength = (stairsLength > 1 ? stairsLength - 1 : 1);
  return (_lastMax / _stairsLength) + lastMin;
};

