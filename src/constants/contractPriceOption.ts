interface IPriceOptions {
  label: string;
  key: string;
}

const priceOption: IPriceOptions[] = [
  { label: 'تومان', key: 'AMOUNT' },
  { label: 'درصد', key: 'PERCENT' },
  { label: '∞', key: 'INFINITY' },
];
export const PRICE_OPTION = {
  AMOUNT: 'تومان',
  PERCENT: 'درصد',
  INFINITY: '∞',
};
export const PRICE_OPTION_LABEL: any = {
  AMOUNT: 'مبلغ فروش',
  PERCENT: 'درصد فروش',
  INFINITY: 'تراکنش تا',
};

export default priceOption;
