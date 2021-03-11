export interface ApplicationFormItem {
  type: 'email' | 'password',
  label: string;
  accessor: string;
  inputType: 'textfield';
}

export interface Props {
  items: ApplicationFormItem[]
  onChange: (e: Event) => void;
  validationSchema: any;
  onSubmit: Function;
  values: any;
  buttonLabel?: string;
  isLoading?: boolean;
}