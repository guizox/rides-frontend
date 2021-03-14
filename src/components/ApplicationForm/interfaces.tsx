export interface ApplicationFormItem {
  type: string,
  label: string;
  accessor: string;
  inputType: 'textfield';
  styles?: any;
  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  xl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

export interface Columns {
  sm: number,
  md: number,
  lg: number,
  xl: number
}

export interface Props {
  items: ApplicationFormItem[]
  onChange: (e: any) => void;
  validationSchema: any;
  onSubmit: () => void;
  values: any;
  isLoading?: boolean;
  buttonLabel?: string;
  columns?: Columns;
}