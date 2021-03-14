export interface AuthFields {
  email: string;
  password: string;
}

export interface State {
  fields: AuthFields;
  registerFields: AuthFields;
  isLoading: boolean;
  isCreating: boolean;
  data: any;
}