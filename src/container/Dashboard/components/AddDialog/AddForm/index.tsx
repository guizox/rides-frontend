import React from 'react';
import fields from './fields';
import { schema } from './schema';
import ApplicationForm from '../../../../../components/ApplicationForm';

const AddForm = () => {


  return (
    <ApplicationForm
      items={fields}
      onChange={() => { }}
      values={{}}
      validationSchema={schema}
      onSubmit={() => { }}
      buttonLabel={'Adicionar corrida'}
      isLoading={false}
    />
  )
}

export default AddForm;