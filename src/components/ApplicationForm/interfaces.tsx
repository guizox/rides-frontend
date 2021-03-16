export interface ApplicationFormItem {
  type: string,
  label: string;
  accessor: string;
  inputType: 'textfield' | 'currency' | 'text-with-options';
  styles?: any;
  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  xl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  options?: string[];
}



export interface Props {
  items: ApplicationFormItem[]
  onChange: (e: any) => void;
  validationSchema: any;
  onSubmit: () => void;
  values: any;
  isLoading?: boolean;
  buttonLabel?: string;
  columns?: number;
}

export interface FieldProps {
  item: ApplicationFormItem,
  values: any,
  [prop: string]: any
}