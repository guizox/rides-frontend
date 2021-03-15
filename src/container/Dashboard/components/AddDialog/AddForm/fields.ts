import { ApplicationFormItem } from "../../../../../components/ApplicationForm/interfaces";


const fields: ApplicationFormItem[] = [
  {
    type: 'text',
    label: 'Descrição',
    accessor: 'description',
    inputType: 'textfield'
  },
  {
    type: 'text',
    label: 'Valor',
    accessor: 'amount',
    inputType: 'textfield'
  },
  {
    type: 'text',
    label: 'Categoria',
    accessor: 'category',
    inputType: 'textfield'
  },
  {
    type: 'date',
    label: 'Data',
    accessor: 'createdAt',
    inputType: 'textfield'
  }
]

export default fields;