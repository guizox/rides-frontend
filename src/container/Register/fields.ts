import { ApplicationFormItem } from "../../components/ApplicationForm/interfaces";

const fields: ApplicationFormItem[] = [
  {
    type: 'email',
    label: 'Email',
    accessor: 'email',
    inputType: 'textfield'
  },
  {
    type: 'password',
    label: 'Password',
    accessor: 'password',
    inputType: 'textfield'
  },
]

export default fields;