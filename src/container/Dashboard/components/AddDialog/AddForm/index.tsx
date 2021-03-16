import React from 'react';
import screenFields from './fields';
import { schema } from './schema';
import ApplicationForm from '../../../../../components/ApplicationForm';
import { ridesStore } from '../../../../../zustand/rides';
import actions from '../../../../../zustand/rides/actions';

const AddForm = () => {
  const { fields, dispatch, isCreating, allCategories } = ridesStore();

  const { changeRidesFields, addRide } = actions(dispatch);

  return (
    <ApplicationForm
      items={screenFields(allCategories)}
      onChange={changeRidesFields}
      values={fields}
      validationSchema={schema}
      onSubmit={addRide}
      buttonLabel={'Adicionar corrida'}
      isLoading={isCreating}
    />
  )
}

export default AddForm;