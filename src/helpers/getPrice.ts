export default (price: any) => {
  let validNumber = price;
  if (price) {
    validNumber = price.replace(/\b0+\B|\.{1}[^0-9]/g, '').toString();
  }
  return validNumber;
};
