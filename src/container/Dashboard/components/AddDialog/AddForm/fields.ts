import { ApplicationFormItem } from "../../../../../components/ApplicationForm/interfaces";


const screenFields: (options: string[]) => ApplicationFormItem[] = (
  options: string[]
) => [
    {
      type: 'date',
      label: 'Data',
      accessor: 'createdAt',
      inputType: 'textfield',
      styles: {
        width: '400px'
      }
    },
    {
      type: 'text',
      label: 'Descrição',
      accessor: 'description',
      inputType: 'textfield',
      styles: {
        width: '400px'
      }
    },
    {
      type: 'text',
      label: 'Valor',
      accessor: 'amount',
      inputType: 'currency',
      styles: {
        width: '400px'
      }
    },
    {
      type: 'text',
      label: 'Categoria',
      accessor: 'category',
      inputType: 'text-with-options',
      styles: {
        width: '400px'
      },
      options: options
    },
  ]

export default screenFields;