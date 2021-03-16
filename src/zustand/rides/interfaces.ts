export interface AddRidesFields {
  description: string;
  amount: string;
  category: string;
  createdAt?: string
}

export interface RidesFitlers {
  category?: string;
  amount?: string;
  description?: string;
  endDate?: string;
  startDate?: string;
}

export interface State {
  isLoading: boolean,
  data: any[];
  fields: AddRidesFields;
  isCreating: boolean;
  filters: RidesFitlers;
  allCategories: string[];
  openDialog: false,
}