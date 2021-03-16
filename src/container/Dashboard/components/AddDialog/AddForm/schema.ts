import * as yup from 'yup';

export const schema = yup.object().shape({
  description: yup.string().required('Campo obrigatório'),
  amount: yup.string().required('Campo obrigatório'),
  category: yup.string().required('Campo obrigatório'),
  createdAt: yup.date().required('Campo obrigatório'),
})