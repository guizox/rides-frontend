import React from 'react';
import { Formik, Form } from 'formik';
import { Button, CircularProgress, Grid, Input, Stack, Text } from '@chakra-ui/react';
import { Props } from 'framer-motion/types/types';
import { ApplicationFormItem } from './interfaces';

const ApplicationForm = ({ items, onChange, values, validationSchema, onSubmit, isLoading, buttonLabel }: Props) => {


  return (
    <Grid justifyContent="center" alignContent="center" alignItems="center">
      <Formik initialValues={values} onSubmit={onSubmit} validationSchema={validationSchema}>

        {({ errors, values, setFieldValue }) =>
          <Form>
            <Stack spacing={3}>
              {items.map((item: ApplicationFormItem) =>
                <Grid key={item.accessor}>
                  <Input
                    value={values[item.accessor]}
                    onChange={e => {
                      onChange({ key: item.accessor, value: e.target.value });
                      setFieldValue(item.accessor, e.target.value);

                    }}
                    variant="outline"
                    placeholder={item.label}
                    type={item.type}
                    isInvalid={!!errors[item.accessor]}
                  />
                  <Grid mt={1}>
                    <Text color="red.500">
                      {errors[item.accessor]}
                    </Text>
                  </Grid>
                </Grid>
              )}


              <Button variant="solid" color="#fff" background="#48cae4" type="submit">
                {isLoading ? <CircularProgress size={'20px'} isIndeterminate /> : buttonLabel || 'Login'}
              </Button>
            </Stack>
          </Form>}
      </Formik>
    </Grid >
  )
}

export default ApplicationForm;