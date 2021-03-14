import React from 'react';
import { Grid, Box, Container, Stack, Link } from '@chakra-ui/react';
import { authStore } from '../../zustand/auth-store';
import actions from '../../zustand/auth-store/actions';
import ApplicationForm from '../../components/ApplicationForm';
import fields from './fields';
import { schema } from './schema';

const Register = () => {

  const { fields: { email, password }, isLoading } = authStore();
  const dispatch = authStore(state => state.dispatch);
  const { changeRegisterFields, register } = actions(dispatch);


  return (
    <Box>
      <Grid minH={'90vh'} justifyItems="center" alignContent="center" justifyContent="center">
        <Container
          border={'solid 1px #f0f0f0'}
          boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
          padding={20}
          borderRadius={'5%'}
          minH={500}
          minW={350}
        >
          <Grid minW={'100%'} minH={'100%'} justifyItems="center" alignContent="center" justifyContent="center">

            <Grid width="100%" justifyItems="center" alignContent="center" justifyContent="center" marginBottom={50} >
              <img src="/logo.png" alt="logo" width={200} />
            </Grid>

            <Stack spacing={3}>

              <ApplicationForm
                items={fields}
                onChange={changeRegisterFields}
                values={{ email, password }}
                validationSchema={schema}
                onSubmit={register}
                buttonLabel={'Registrar-se'}
                isLoading={isLoading}
              />

              <Grid>
                <Grid justifySelf="flex-start">
                  <Link href="/">
                    Voltar
                  </Link>
                </Grid>
              </Grid>
            </Stack>

          </Grid>
        </Container>
      </Grid>
    </Box>
  )
}

export default Register;