export interface IOptions {
  label: string;
  value: string;
}
export interface IReactSelect {
  label?: string;
  name: string;
  options?: IOptions[];
  value?: any;
  onChange: any;
  loading?: boolean;
  error?: any;
  notice?: string;
  disabled?: boolean;
  onBlur?: any;
  variant?: string;
  isMulti?: boolean;
}

export interface IMessageWrapper {
  type: string;
  labelOnTop: boolean;
}
export interface ILabel {
  rightIcon?: string;
  error?: boolean;
  labelOnTop?: boolean;
  disabled?: boolean;
  isFilled?: boolean;
}

export interface ISelect {
  children?: React.ReactNode;
  type?: string | undefined;
  labelOnTop?: any;
}
