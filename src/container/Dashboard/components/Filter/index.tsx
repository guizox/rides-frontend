import React from 'react';
import { Stack } from '@chakra-ui/react';
import fields from './fields';
import { schema } from './schema';
import ApplicationForm from '../../../../components/ApplicationForm';

const Filter = () => {
  return (

    <Stack spacing={3}>

      <ApplicationForm
        items={fields}
        onChange={() => { }}
        values={{}}
        validationSchema={schema}
        onSubmit={() => { }}
        buttonLabel={'Buscar'}
        isLoading={false}
        columns={{
          sm: 1,
          md: 1,
          lg: 3,
          xl: 3,
        }}
      />

    </Stack>
  )
}

export default Filter;