import React from 'react';
import { Formik, Form } from 'formik';
import { Button, CircularProgress, Grid, Input, Text, GridItem } from '@chakra-ui/react';
import { ApplicationFormItem, Props } from './interfaces';

const ApplicationForm = ({
  items,
  onChange,
  values,
  validationSchema,
  onSubmit,
  isLoading,
  buttonLabel,
  columns
}: Props) => {

  return (
    <Grid justifyContent="center" alignContent="center" alignItems="center" id="teste">
      <Formik initialValues={values} onSubmit={onSubmit} validationSchema={validationSchema}>

        {({ errors, values, setFieldValue }) =>
          <Form >
            <Grid
              templateColumns={[
                `repeat(${columns?.sm || 1}, 1fr)`,
                `repeat(${columns?.md || 1}, 1fr)`,
                `repeat(${columns?.lg || 1}, 1fr)`,
                `repeat(${columns?.xl || 1}, 1fr)`
              ]} gap={3}>
              {items.map((item: ApplicationFormItem) =>
                <GridItem key={item.accessor} {...item.styles} colSpan={[item.sm, item.md, item.lg, item.xl]}>
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
                </GridItem>
              )}

              <Button variant="solid" color="#fff" background="#48cae4" type="submit" display={['none', 'none', 'flex', 'flex']}>
                {isLoading ? <CircularProgress size={'20px'} isIndeterminate /> : buttonLabel || 'Login'}
              </Button>
            </Grid>
          </Form>}
      </Formik>
      <Button variant="solid" mt="2" color="#fff" background="#48cae4" type="submit" display={['flex', 'flex', 'none', 'none']}>
        {isLoading ? <CircularProgress size={'20px'} isIndeterminate /> : buttonLabel || 'Login'}
      </Button>
    </Grid >
  )
}

export default ApplicationForm;