import { ApplicationFormItem } from "../../../../components/ApplicationForm/interfaces";

const fields: (options: string[]) => ApplicationFormItem[] = (
  options: string[]
) => {
  return [
    {
      type: 'text',
      label: 'Descrição',
      accessor: 'description',
      inputType: 'textfield',
      sm: 3,
      md: 3,
      lg: 1,
      xl: 1
    },
    {
      type: 'date',
      label: 'Data',
      accessor: 'startDate',
      inputType: 'textfield',
      sm: 3,
      md: 3,
      lg: 1,
      xl: 1,
    },
    {
      type: 'date',
      label: 'Data',
      accessor: 'endDate',
      inputType: 'textfield',
      sm: 3,
      md: 3,
      lg: 1,
      xl: 1,
    },

    {
      type: 'text',
      label: 'Valor',
      accessor: 'amount',
      inputType: 'currency',
      sm: 3,
      md: 3,
      lg: 1,
      xl: 1
    },
    {
      type: 'text',
      label: 'Categoria',
      accessor: 'category',
      inputType: 'text-with-options',
      sm: 6,
      md: 6,
      lg: 1,
      xl: 1,
      options: options
    },
  ]
}

export default fields;