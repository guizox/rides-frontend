import { ApplicationFormItem } from "../../../../components/ApplicationForm/interfaces";

const fields: ApplicationFormItem[] = [
  {
    type: 'date',
    label: 'Data',
    accessor: 'creationDate',
    inputType: 'textfield',
    sm: 3,
    md: 3,
    lg: 1,
    xl: 1
  },
  {
    type: 'text',
    label: 'Category',
    accessor: 'category',
    inputType: 'textfield',
    sm: 3,
    md: 3,
    lg: 1,
    xl: 1

  },
]

export default fields;