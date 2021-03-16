import React from 'react';
import { Stack } from '@chakra-ui/react';
import fields from './fields';
import { schema } from './schema';
import ApplicationForm from '../../../../components/ApplicationForm';
import { ridesStore } from '../../../../zustand/rides';
import actions from '../../../../zustand/rides/actions';

const Filter = () => {

  const { filters, dispatch, isLoading, allCategories } = ridesStore();

  const { changeRidesFilterFields, getAll } = actions(dispatch);

  return (

    <Stack spacing={3}>

      <ApplicationForm
        items={fields(allCategories)}
        onChange={changeRidesFilterFields}
        values={filters}
        validationSchema={schema}
        onSubmit={getAll}
        buttonLabel={'Buscar'}
        isLoading={isLoading}
        columns={fields(allCategories).length + 1}
      />

    </Stack>
  )
}

export default Filter;